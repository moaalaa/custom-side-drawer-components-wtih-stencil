import { Component, h, Method, Prop, State } from "@stencil/core";

@Component({
	tag: "mxcd-side-drawer",
	styleUrl: "side-drawer.css",
	shadow: true
})
export class SideDrawer {

	// We Can Define A Normal Class Property But With State And Prop We Have More Advanced Feature

	// State Define a class property that can watch from inside (watch changes and update)
	// if we have a default value we don't need to type the variable type
	// TypeScript will infers it from the value
	@State() showContactInfo = false;  

	// Prop Define a class property that can watch from inside and out side (watch changes and update)
	// reflect: true => reflect changes to Component Attributes if changes happened.
	@Prop({ reflect: true }) sideTitle: string;
	@Prop({ reflect: true, mutable: true }) opened: boolean = false;

	// Stencil not just because we define method called "open" it will be like that in the end
	// Stencil will change it's name event it's place 
	// So We Use "@Method" Decorator to tell Stencil This a "Public" method and should be like that
	@Method()
	open() {
		this.opened = true;
	}
	
	close() {
		this.opened = false;
	}

	changeContent(content: string) {
		this.showContactInfo = (content === 'contact');
	}

	render() {
		let mainContent = <slot></slot>;

		if (this.showContactInfo) {
			mainContent = (
				<div id="contact-info">
					<h2>Contact Details</h2>
					<p>You Can Reach Us By Phone Or E-Mail</p>
					<ul>
						<li>Phone: 01234567891</li>
						<li>E-Mail: <a href="mailto:email@domain.com">email@domain.com</a></li>
					</ul>
				</div>
			);
		}

		return (
			<aside>
				<header>
					<h1>{this.sideTitle}</h1>
					<button onClick={this.close.bind(this)}>&times;</button>
				</header>
				<section id="tabs">
					<button 
						class={!this.showContactInfo ? 'active' : ''} 
						onClick={this.changeContent.bind(this, 'nav')}
					>Navigation</button>
					<button 
						class={this.showContactInfo ? 'active' : ''}
						onClick={this.changeContent.bind(this, 'contact')}
					>Contact</button>
				</section>
				<main>
					{mainContent}
				</main>
			</aside>
		);
	}
}

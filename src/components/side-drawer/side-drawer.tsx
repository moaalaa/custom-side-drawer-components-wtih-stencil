import { Component, h, Prop } from "@stencil/core";

@Component({
	tag: "mxcd-side-drawer",
	styleUrl: "side-drawer.css",
	shadow: true
})
export class SideDrawer {

	// Title Prop
	// reflect: true => reflect changes to Component Attributes if changes happened.
	@Prop({ reflect: true }) sideTitle: string;
	@Prop({ reflect: true, mutable: true }) opened: boolean = false;

	closeDrawer() {
		this.opened = false;
	}

	render() {
		return (
			<aside>
				<header>
					<h1>{this.sideTitle}</h1>
					<button onClick={this.closeDrawer.bind(this)}>&times;</button>
				</header>
				<main>
					<slot></slot>
				</main>
			</aside>
		);
	}
}

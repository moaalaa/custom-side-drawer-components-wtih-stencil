import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "mxcd-side-drawer",
  styleUrl: "side-drawer.css",
  shadow: true
})
export class SideDrawer {
	
	// Title Prop
	// reflect: true => reflect changes to Component Attributes if changes happened.
  	@Prop({reflect: true}) sideTitle: string;

	render() {
		return (
			<aside>
				<header>
					<h1>{this.sideTitle}</h1>
				</header>
				<main>
					<slot></slot>
				</main>
			</aside>
		);
	}
}

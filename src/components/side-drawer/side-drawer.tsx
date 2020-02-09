import { Component, h } from "@stencil/core";

@Component({
  tag: "mxcd-side-drawer",
  styleUrl: 'side-drawer.css',
  shadow: true,
})

export class SideDrawer {
  render() {
    return (
      <aside>
        <h1>Side Drawer</h1>
      </aside>
    );
  }
}

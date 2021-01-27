import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "spacex-toggle",
  styleUrl: "toggle.scss",
  shadow: true,
})
export class SpacexToggle {
  /**
   * The toggle checked property
   */
  @Prop() checked: boolean;

  /**
   * The toggle value
   */
  @Prop() value: any;

  render() {
    return (
      <button class={`toggle ${this.checked ? "toggle--selected" : ""}`}>
        <slot></slot>
      </button>
    );
  }
}

import { r as registerInstance, h } from './index-3939aa67.js';

const toggleCss = ".toggle{padding:4px;border-radius:4px;width:100%;height:100%;outline:none;background:#c5e09b;border:none;cursor:pointer;max-width:80px;display:inline-flex;justify-content:center;align-items:center}.toggle--selected{background:#7bbb27}";

const SpacexToggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("button", { class: `toggle ${this.checked ? "toggle--selected" : ""}` }, h("slot", null)));
  }
};
SpacexToggle.style = toggleCss;

export { SpacexToggle as spacex_toggle };

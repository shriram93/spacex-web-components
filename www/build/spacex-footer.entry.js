import { r as registerInstance, h, e as Host } from './index-3939aa67.js';

const footerCss = ":host{padding:8px;display:flex;justify-content:center;align-items:center}:host p{padding:0;margin:0}";

const FooterComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("p", null, h("slot", null))));
  }
};
FooterComponent.style = footerCss;

export { FooterComponent as spacex_footer };

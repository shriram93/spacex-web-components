import { r as registerInstance, h, e as Host } from './index-3939aa67.js';

const headerCss = ":host{padding:8px;display:block}:host p{padding:0;margin:0;font-size:24px;font-weight:bold}";

const HeaderComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("p", null, h("slot", null))));
  }
};
HeaderComponent.style = headerCss;

export { HeaderComponent as spacex_header };

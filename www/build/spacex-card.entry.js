import { r as registerInstance, h } from './index-3939aa67.js';

const cardCss = ".launch-card{width:100%;height:100%;background:#fff;border-radius:8px;padding:8px;display:inline-block;max-width:500px}.launch-card__image{padding:8px;display:flex;justify-content:center;align-items:center;background:#f2f2f2}.launch-card__image img{width:100%;max-width:125px}.launch-card__name{color:#474f94;font-weight:600;margin:16px 0}.launch-card__data{margin:8px 0}.launch-card__data__label{font-weight:600;color:#000}.launch-card__data__value{color:#474f94}.launch-card__data__value ul{margin-left:30px}";

const SpacexCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("div", { class: "launch-card" }, h("div", { class: "launch-card__image" }, h("img", { src: this.imageurl, alt: this.missonname })), h("div", { class: "launch-card__name" }, h("p", null, `${this.missonname} #${this.flightnumber}`)), this.missionids && this.missionids.length > 0 && (h("p", { class: "launch-card__data" }, h("span", { class: "launch-card__data__label" }, "Mission ids:"), h("span", { class: "launch-card__data__value" }, h("ul", null, this.missionids.split(',').map((missionId) => (h("li", { key: missionId }, missionId.trim()))))))), h("p", { class: "launch-card__data" }, h("span", { class: "launch-card__data__label" }, "Launch Year:"), h("span", { class: "launch-card__data__value" }, this.launchyear)), h("p", { class: "launch-card__data" }, h("span", { class: "launch-card__data__label" }, "Successful Launch:"), h("span", { class: "launch-card__data__value" }, this.launchsuccess ? "true" : "false")), h("p", { class: "launch-card__data" }, h("span", { class: "launch-card__data__label" }, "Successful Landing:"), h("span", { class: "launch-card__data__value" }, this.landsuccess ? "true" : "false"))));
  }
};
SpacexCard.style = cardCss;

export { SpacexCard as spacex_card };

import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class ElementCountComponent extends LitElement {
  render() {
    return html`This element has ${this.children.length} child elements.`;
  }
}

customElements.define("element-count", ElementCountComponent);

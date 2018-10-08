import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class RenderExampleComponent extends LitElement {
  render() {
    return html`<b>Hello, world!</b>`;
  }
}

customElements.define("render-example", RenderExampleComponent);

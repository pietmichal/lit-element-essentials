import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class MyComponent extends LitElement {
  render() {
    return html`
      I am a component<br>
      <slot></slot>
    `;
  }
}

customElements.define("my-component", MyComponent);

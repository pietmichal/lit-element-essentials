import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.1/lit-element.js?module";

class IntegerComponent extends LitElement {
  static get properties() {
    return {
      value: {
        reflect: true,
        attribute: true,
        type: parseInt // alternatively: value => parseInt(value)
      }
    };
  }

  render() {
    return html`The integer value is ${this.value}`;
  }
}

customElements.define("integer-component", IntegerComponent);

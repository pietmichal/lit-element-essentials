import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class IntegerV2Component extends LitElement {
  static get properties() {
    return {
      value: {
        reflect: true,
        attribute: true,
        type: {
          fromAttribute: parseInt,
          toAttribute: value => value + ".00"
        }
      }
    };
  }

  render() {
    return html`The integer value is ${this.value}`;
  }
}

customElements.define("integer-v2-component", IntegerV2Component);

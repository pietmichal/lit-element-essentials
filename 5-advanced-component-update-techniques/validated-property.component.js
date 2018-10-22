import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class ValidatedPropertyComponent extends LitElement {
  static get properties() {
    return {
      value: {
        reflect: false,
        hasChanged: (current, previous) => {
          console.log(current, previous);
          return current !== previous;
        }
      }
    };
  }

  set value(val) {
    if (val > 1000) {
      return;
    }
    const oldValue = this._value;
    this._value = val;
    this.requestUpdate("value", oldValue);
  }

  get value() {
    return this._value;
  }

  constructor() {
    super();
    this.value = 1;
    setTimeout(() => {
      this.value = 1000;
    }, 1000);
    setTimeout(() => {
      this.value = 1001;
    }, 2000);
  }

  render() {
    return html`<b>${this.value}</b>`;
  }
}

customElements.define("validated-property", ValidatedPropertyComponent);

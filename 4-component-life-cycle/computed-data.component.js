import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class ComputedDataComponent extends LitElement {
  static get properties() {
    return {
      foo: { reflect: true, type: Number },
      bar: { reflect: true, type: Number }
    };
  }

  update(changedProperties) {
    this.computedValue = this.foo * this.bar;
    super.update(changedProperties);
  }

  render() {
    return html`${this.computedValue}`;
  }
}

customElements.define("computed-data", ComputedDataComponent);

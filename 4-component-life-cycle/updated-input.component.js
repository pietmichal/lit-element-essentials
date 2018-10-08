import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class UpdatedInputComponent extends LitElement {
  static get properties() {
    return {
      foo: { reflect: true }
    };
  }

  constructor() {
    super();
    this.foo = 1;
  }

  onInputChange(event) {
    this.foo = event.target.value;
  }

  updated() {
    sampleService.trackInput(this.foo);
  }

  render() {
    return html`  
      <label>
        <b>example input</b>
        <input type="text" @keypress=${this.onInputChange}>
      </label>
    `;
  }
}

customElements.define("updated-input", UpdatedInputComponent);

const sampleService = {
  trackInput(value) {
    console.log(value);
  }
};

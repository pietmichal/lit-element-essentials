import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class FocusedInputComponent extends LitElement {
  firstUpdated() {
    this.shadowRoot.querySelector("#example-input").focus();
  }

  render() {
    return html`
      <label>
        <b>example input</b>
        <input type="text" id="example-input">
      </label>
    `;
  }
}

customElements.define("focused-input", FocusedInputComponent);

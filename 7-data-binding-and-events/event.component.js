import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class EventHandlingComponent extends LitElement {
  static get properties() {
    return {
      inputValue: { reflect: false }
    };
  }

  constructor() {
    super();
    this.inputValue = "example";
  }

  onChange(event) {
    this.inputValue = event.target.value;
  }

  render() {
    return html`
      Current input value: ${this.inputValue}<br>
      <input type="text" 
        value="${this.inputValue}" 
        @input="${event => this.onChange(event)}">
    `;
  }
}

customElements.define("event-handling", EventHandlingComponent);

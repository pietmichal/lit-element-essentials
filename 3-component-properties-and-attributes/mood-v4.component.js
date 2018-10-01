import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.1/lit-element.js?module";

class MoodV4Component extends LitElement {
  static get properties() {
    return {
      currentMood: {
        reflect: true,
        attribute: false
      }
    };
  }

  constructor() {
    super();
    this.currentMood = "awesomeness";
  }

  render() {
    return html`The current mood is ${this.currentMood}`;
  }
}

customElements.define("mood-v4-component", MoodV4Component);

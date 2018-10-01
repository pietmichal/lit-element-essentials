import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.1/lit-element.js?module";

class MoodComponent extends LitElement {
  static get properties() {
    return {
      currentMood: {
        reflect: false
      }
    };
  }

  constructor() {
    super();
    this.currentMood = "happy";
  }

  render() {
    return html`The current mood is ${this.currentMood}`;
  }
}

customElements.define("mood-component", MoodComponent);

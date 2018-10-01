import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.1/lit-element.js?module";

class MoodV2Component extends LitElement {
  static get properties() {
    return {
      currentMood: {
        reflect: true
      }
    };
  }

  constructor() {
    super();
    this.currentMood = "euphoria";
  }

  render() {
    return html`The current mood is ${this.currentMood}`;
  }
}

customElements.define("mood-v2-component", MoodV2Component);

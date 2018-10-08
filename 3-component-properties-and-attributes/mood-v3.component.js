import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class MoodV3Component extends LitElement {
  static get properties() {
    return {
      currentMood: {
        reflect: true,
        attribute: "current-mood"
      }
    };
  }

  constructor() {
    super();
    this.currentMood = "delight";
  }

  render() {
    return html`The current mood is ${this.currentMood}`;
  }
}

customElements.define("mood-v3-component", MoodV3Component);

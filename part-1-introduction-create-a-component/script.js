import {
  LitElement,
  html
} from "https://unpkg.com/@polymer/lit-element@0.6.0/lit-element.js?module";

class ClockComponent extends LitElement {
  static get properties() {
    return {
      hours: {},
      minutes: {},
      seconds: {}
    };
  }

  constructor() {
    super();
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const currentTime = new Date();
    this.hours = this.ensureTwoDigits(currentTime.getHours());
    this.minutes = this.ensureTwoDigits(currentTime.getMinutes());
    this.seconds = this.ensureTwoDigits(currentTime.getSeconds());
  }

  ensureTwoDigits(value) {
    const stringValue = String(value);
    if (stringValue.length === 1) {
      return "0" + stringValue;
    }
    return stringValue;
  }

  render() {
    return html`${this.hours}:${this.minutes}:${this.seconds}`;
  }
}

customElements.define("clock-component", ClockComponent);

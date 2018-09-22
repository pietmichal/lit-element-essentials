import {
  LitElement,
  html
} from "https://unpkg.com/@polymer/lit-element@0.6.1/lit-element.js?module";

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
    return html`
      <style>
        :host {
          display: inline-block;
          width: 400px;
        }
        .section {
          text-align: center;
          width: 33%;
          float: left;
        }
        .digits {
          font-size: 48px;
        }
        .description {
          font-size: 16px;
        } 
      </style>  
      <div class="section">
        <div class="digits">${this.hours}</div>
        <div class="description">hours</div>
      </div>
      <div class="section">
        <div class="digits">${this.minutes}</div>
        <div class="description">minutes</div>
      </div>
      <div class="section">
        <div class="digits">${this.seconds}</div>
        <div class="description">seconds</div>
      </div>
    `;
  }
}

customElements.define("clock-component", ClockComponent);

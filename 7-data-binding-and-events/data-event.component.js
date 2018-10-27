import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class FooEventComponent extends LitElement {
  static get properties() {
    return {
      fooProp: {
        reflect: false
      }
    };
  }

  constructor() {
    super();
    this.fooProp = 5;
  }

  onBarChange(event) {
    this.fooProp = event.detail.value;
  }

  render() {
    return html`
        FooEventComponent's myProp value is ${this.fooProp}<br>
        <bar-event 
          .barProp="${this.fooProp}"
          @barChange="${event => this.onBarChange(event)}"
        >
        </bar-event>
      `;
  }
}

customElements.define("foo-event", FooEventComponent);

class BarEventComponent extends LitElement {
  static get properties() {
    return {
      barProp: { reflect: false }
    };
  }

  constructor() {
    super();
    this.barProp = 0;
    setInterval(async () => {
      this.barProp = this.barProp + 1;
      await this.updateComplete;
      this.dispatchEvent(
        new CustomEvent("barChange", { detail: { value: this.barProp } })
      );
    }, 1000);
  }

  render() {
    return html`BarEventComponent's barProp value is ${this.barProp}`;
  }
}

customElements.define("bar-event", BarEventComponent);

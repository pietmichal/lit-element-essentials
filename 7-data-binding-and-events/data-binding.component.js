import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class BarComponent extends LitElement {
  static get properties() {
    return {
      barProp: { reflect: false },
      barAttribute: { reflect: true, type: Number, attribute: "bar-attribute" }
    };
  }

  constructor() {
    super();
    this.barProp = 0;
    this.barAttribute = 0;
    setInterval(() => {
      this.barProp = this.barProp + 1;
      this.barAttribute = this.barAttribute + 2;
    }, 1000);
  }

  render() {
    return html`
      BarComponent's barProp value is ${this.barProp} 
      and barAttribute value is ${this.barAttribute}
    `;
  }
}

customElements.define("bar-component", BarComponent);

class FooComponent extends LitElement {
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

  render() {
    return html`
      FooComponent's myProp value is ${this.fooProp}<br>
      <bar-component 
        bar-attribute="${this.fooProp}"
        .barProp="${this.fooProp}"
      >
      </bar-component>
    `;
  }
}

customElements.define("foo-component", FooComponent);

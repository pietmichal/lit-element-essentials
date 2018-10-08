import {
  html,
  LitElement
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

class AsyncDataComponent extends LitElement {
  static get properties() {
    return {
      foo: { reflect: false },
      bar: { reflect: false }
    };
  }

  constructor() {
    super();
    this.getFoo().then(foo => (this.foo = foo));
    this.getBar().then(bar => (this.bar = bar));
  }

  getFoo() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Hello"), 1000);
    });
  }

  getBar() {
    return new Promise(resolve => {
      setTimeout(() => resolve("world!"), 3000);
    });
  }

  shouldUpdate() {
    return Boolean(this.foo) && Boolean(this.bar);
  }

  render() {
    return html`${this.foo},${this.bar}`;
  }
}

customElements.define("async-data", AsyncDataComponent);

import {
  LitElement,
  html
} from "https://unpkg.com/@polymer/lit-element@0.6.2/lit-element.js?module";

const people = [
  {
    id: 1,
    firstName: "John",
    secondName: "Smith",
    interests: "Bowling"
  },
  {
    id: 2,
    firstName: "Bob",
    secondName: "Richardson",
    interests: "Programming"
  },
  {
    id: 3,
    firstName: "Jennifer",
    secondName: "Parker",
    interests: "Photography"
  }
];

function getPerson() {
  return people[Math.floor(Math.random() * people.length)];
}

class PersonComponent extends LitElement {
  static get properties() {
    return {
      person: {
        hasChanged: (currentValue, previousValue) => {
          // During the first check, previous value is undefined!
          if (previousValue === undefined) {
            return true;
          }
          return currentValue.id !== previousValue.id;
        }
      }
    };
  }

  constructor() {
    super();
    this.person = getPerson();
    setInterval(() => (this.person = getPerson()), 1000);
  }

  render() {
    return html`
      <b>first name:</b> ${this.person.firstName}<br>
      <b>second name:</b> ${this.person.secondName}<br>
      <b>interests:</b> ${this.person.interests}<br>
    `;
  }
}

customElements.define("person-component", PersonComponent);

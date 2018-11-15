export class ShowPersonElement extends HTMLElement {
  // the custom element only reacts to changes on attributes defined here
  static get observedAttributes() {
    return ['person-id'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.person = {
      id: null,
      name: '',
      email: '',
      phone: '',
      website: '',
      company: { name: '' },
    };
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attr, _oldValue, newValue) {
    if (attr === 'person-id') {
      this.loadPerson(newValue);
    }
  }

  render() {
    const loading = this.person.id ? '' : /*html*/ `<div>loading data...</div>`;

    this.shadowRoot.innerHTML = /*html*/ `
    <h1><slot name="title">Showing Person</slot></h1>
    ${loading}
    <ul>
      <li>Name: ${this.person.name}</li>
      <li>EMail: ${this.person.email}</li>
      <li>Company: ${this.person.company.name}</li>
      <li>Website: ${this.person.website}</li>
    </ul>
  `;
  }

  async loadPerson(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (response.ok) {
      const person = await response.json();
      // to show the loading state, API is too fast
      setTimeout(() => {
        this.person = person;
        this.render();
      }, 1000);
    }
  }
}

customElements.define('my-show-person', ShowPersonElement);

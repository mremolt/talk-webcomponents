export class HelloPersonElement extends HTMLElement {
  // the custom element only reacts to changes on attributes defined here
  static get observedAttributes() {
    return ['first-name'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.firstName = 'unknown';
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attr, _oldValue, newValue) {
    if (attr === 'first-name') {
      this.firstName = newValue;
      this.render();
    }
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
    <h1>Demo of reading attribute values</h1>
    <p>Hello ${this.firstName}!</p>
  `;
  }
}

customElements.define('my-hello-person', HelloPersonElement);

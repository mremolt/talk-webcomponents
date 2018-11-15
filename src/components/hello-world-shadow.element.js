export class HelloWorldShadowElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /*html*/ `
      <style>
        p {
          font-size: 1.5em;
          color: blue;
        }
      </style>

      <h1>Demo of Shadow DOM</h1>
      <p>This element uses Shadow DOM, no styling from outside influences the element and vice versa.</p>
    `;
  }
}

customElements.define('my-hello-world-shadow', HelloWorldShadowElement);

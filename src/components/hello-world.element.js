export class HelloWorldElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
      <h1>Hello Web Components</h1>
      <p>This was easy ... and sorry for my non existent design skills.</p>
    `;
  }
}

customElements.define('my-hello-world', HelloWorldElement);

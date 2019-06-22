export class HelloWorldElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <style>
        p {
          /** this line is overwritten in global CSS, see next example about Shadow DOM **/
          border: 1px solid red;
        }
      </style>

      <h1>Hello Web Components</h1>
      <p>This was easy ... and sorry for my non existent design skills.</p>
    `;
  }
}

customElements.define('my-hello-world', HelloWorldElement);

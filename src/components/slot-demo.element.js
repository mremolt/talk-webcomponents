export class SlotDemoElement extends HTMLElement {
  // the custom element only reacts to changes on attributes defined here

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
    <h1>Custom content via slots</h1>

    <div>This is before the custom content.</div>
    <div>
      <slot name="user-content">This is the default content when the slot is not used.</slot>
    </div>
    <div>This is after the custom content.</div>
  `;
  }
}

customElements.define('my-slot-demo', SlotDemoElement);

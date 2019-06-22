class FancyButton extends HTMLButtonElement {
  connectedCallback() {
    this.addEventListener('mousedown', () => this.drawPressed());
    this.addEventListener('mouseup', () => this.drawUp());

    this.style.backgroundColor = 'inherit';
  }

  drawPressed() {
    console.log('down');
    this.style.backgroundColor = 'blue';
  }

  drawUp() {
    console.log('up');
    this.style.backgroundColor = 'inherit';
  }
}

customElements.define('my-fancy-button', FancyButton, { extends: 'button' });

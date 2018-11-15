class FancyButton extends HTMLButtonElement {
  constructor() {
    super();
    this.addEventListener('mousedown', () => this.drawPressed());
    this.addEventListener('mouseup', () => this.drawUp());
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

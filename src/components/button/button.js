import { LitElement, html, css } from "lit-element";

class Button extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
        attribute: true,
      },
    };
  }
  constructor() {
    super();
    this.text = "Save";
  }

  static get styles() {
    return css`
      button {
        all: initial;
        background-color: #4949f1;
        color: white;
        font-family: "Times New Roman", Times, serif;
        margin-right: 20px;
        width: 150px;
        border-radius: 10px;
        text-align: center;
        padding: 2px;
        cursor: pointer;
      }
    `;
  }

  firstUpdated() {
    this.button = this.shadowRoot.querySelector("button");
  }

  mouseDownListener(event) {
    this.button.style.backgroundColor = "brown";
  }

  mouseUpListener(event) {
    this.button.style.backgroundColor = "#4949f1";
  }

  render() {
    return html`
      <button
        @mousedown="${this.mouseDownListener}"
        @mouseup="${this.mouseUpListener}"
      >
        ${this.text}
      </button>
    `;
  }
}

window.customElements.define("wc-button", Button);

import { LitElement, html } from "lit-element";
class Register extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      lastName: { type: String },
      age: { type: Number },
    };
  }
  constructor() {
    super();
    this.name = this.lastName = this.age = "";
  }
  // name = lastName
  // value = Garces
  //this.lastName = Garces
  handler(name) {
    return (event) => {
      let value = event.target.value;
      this[name] = value;
    };
  }

  register(event) {
    event.preventDefault();
    let data = {
      name: this.name,
      lastName: this.lastName,
      age: this.age,
    };
    let options = {
      detail: data,
      bubbles: true,
      composed: true,
    };
    this.dispatchEvent(new CustomEvent("personRegister", options));
  }

  render() {
    return html`<form @submit="${this.register}">
      <fieldset>
        <legend>Registro de usuario</legend>

        <div>
          <label for="nombre">Nombre:</label>
          <input
            @input="${this.handler("name")}"
            .value="${this.name}"
            type="text"
            id="nombre"
            name="nombre"
            required
          />
        </div>

        <div>
          <label for="apellido">Apellido:</label>
          <input
            @input="${this.handler("lastName")}"
            .value="${this.lastName}"
            type="text"
            id="apellido"
            name="apellido"
            required
          />
        </div>

        <div>
          <label for="edad">Edad:</label>
          <input
            @input="${this.handler("age")}"
            .value="${this.age}"
            type="number"
            id="edad"
            name="edad"
            min="0"
            required
          />
        </div>

        <button type="submit">Registrar</button>
      </fieldset>
    </form>`;
  }
}

window.customElements.define("wc-form-register", Register);

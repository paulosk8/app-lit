import { LitElement, html, css } from "lit-element";

class Table extends LitElement {
  static get properties() {
    return {
      list: {
        type: Array,
      },
    };
  }
  constructor() {
    super();
  }
  render() {
    return html`
      <h1>Listado de estudiantes</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          ${this.list.map((student) => {
            return html` <tr>
              <td>${student.name}</td>
              <td>${student.lastName}</td>
              <td>${student.age}</td>
            </tr>`;
          })}
        </tbody>
      </table>
    `;
  }
}

window.customElements.define("wc-table", Table);

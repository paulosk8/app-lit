import { LitElement, html, css } from "lit-element";
import "./table";
import "./register";
class Home extends LitElement {
  static get properties() {
    return {
      studentList: { type: Array },
    };
  }
  constructor() {
    super();
    this.studentList = [
      { name: "Paulo", lastName: "Galarza", age: 30 },
      { name: "Julian", lastName: "Galarza", age: 2 },
      { name: "Karol", lastName: "Gilces", age: 27 },
    ];
  }
  addList(event) {
    let newList = Object.assign([], this.studentList);
    newList.push(event.detail);
    this.studentList = newList;
  }
  render() {
    return html`
      <wc-form-register @personRegister="${this.addList}"></wc-form-register
      ><wc-table .list="${this.studentList}"></wc-table>
    `;
  }
}

window.customElements.define("wc-home", Home);

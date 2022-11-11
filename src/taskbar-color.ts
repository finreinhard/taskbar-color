import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("taskbar-color")
class TaskbarColor extends LitElement {
  @property({ type: String })
  color = "#333333";

  override render() {
    return html`<h1>Hello World! Your background will be ${this.color}</h1>`;
  }
}

export default TaskbarColor;

declare global {
  interface HTMLElementTagNameMap {
    "taskbar-color": TaskbarColor;
  }
}

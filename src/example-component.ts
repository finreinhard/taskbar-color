import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("example-component")
class ExampleComponent extends LitElement {
  @property({ type: String })
  name = "World";

  override render() {
    return html`<h1>Hello ${this.name}!</h1>`;
  }
}

export default ExampleComponent;

declare global {
  interface HTMLElementTagNameMap {
    "example-component": ExampleComponent;
  }
}

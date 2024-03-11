import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-json-display')
export class JSONDisplayComponent extends LitElement {
  @property({ type: Object })
  public obj: object = {};

  public render() {
    return html`<code>${JSON.stringify(this.obj)}</code>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-json-display': JSONDisplayComponent;
  }
}

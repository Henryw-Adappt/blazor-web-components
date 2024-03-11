import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-root')
export class AppComponent extends LitElement {
  public render() {
    return html`
      <h1><slot></slot></h1>
      <slot name="content"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppComponent;
  }
}

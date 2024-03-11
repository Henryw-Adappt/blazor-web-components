import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-container')
export class ContainerComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--pad);
    }
  `;

  public render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-container': ContainerComponent;
  }
}

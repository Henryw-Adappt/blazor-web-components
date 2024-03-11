import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-split-layout')
export class SplitLayoutComponent extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: grid;
      grid-template: 'side content' 1fr / 400px 1fr;
    }

    .side {
      border-right: var(--border);
    }
  `;

  public render() {
    return html`
      <div class="side"><slot name="side">None</slot></div>
      <div class="content"><slot name="content"></slot></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-split-layout': SplitLayoutComponent;
  }
}

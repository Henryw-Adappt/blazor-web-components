import { LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-split-layout')
export class SplitLayoutComponent extends LitElement {}

declare global {
  interface HTMLElementTagNameMap {
    'app-split-layout': SplitLayoutComponent;
  }
}

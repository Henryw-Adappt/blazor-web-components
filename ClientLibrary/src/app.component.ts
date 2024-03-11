import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-root')
export class AppComponent extends LitElement {
  @property()
  public appTitle = 'App';

  public render() {
    return html`
      <app-split-layout>
        <app-container slot="side">
          <h1>${this.appTitle}</h1>
        </app-container>
        <div slot="content"></div>
      </app-split-layout>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppComponent;
  }
}

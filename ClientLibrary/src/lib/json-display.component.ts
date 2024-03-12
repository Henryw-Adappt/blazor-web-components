import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AppState, IAppState, IAppStateEventArgs } from '../server/types';

@customElement('app-json-display')
export class JSONDisplayComponent extends LitElement {
  @property({ type: Object })
  public set state(state: IAppState) {
    this._state = AppState.fromJS(state);
  }
  public get state() {
    return this._state;
  }
  private _state!: AppState;

  public render() {
    return html`
      <p>${this._state.appName}</p>
      <button @click=${this._setStateName}>Click me!</button>
    `;
  }

  private async _setStateName() {
    this._state.appName = 'bert';
    this.requestUpdate();
    await this.updateComplete;
    this.dispatchEvent(
      new CustomEvent<IAppStateEventArgs>('state', {
        bubbles: true,
        composed: true,
        detail: { state: this._state },
      })
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-json-display': JSONDisplayComponent;
  }
}

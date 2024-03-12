import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AppState, IAppState } from "../server/types";

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
    console.log(this._state);
    return html`<p>${this._state.appName}</p>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-json-display': JSONDisplayComponent;
  }
}

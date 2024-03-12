import { IAppStateEventArgs } from './types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function afterStarted(blazor: any) {
  alert('after started');
  blazor.registerCustomEventType('serverstate', {
    browserEventName: 'state',
    createEventArgs: (event: CustomEvent<IAppStateEventArgs>) => {
      console.log('args', event);
      return event.detail;
    },
  });
}

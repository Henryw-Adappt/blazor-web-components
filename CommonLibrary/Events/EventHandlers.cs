namespace CommonLibrary.Events;

using Microsoft.AspNetCore.Components;

[EventHandler("onserverstate", typeof(AppStateEventArgs), enableStopPropagation: true, enablePreventDefault: true)]
public static class EventHandlers
{
}

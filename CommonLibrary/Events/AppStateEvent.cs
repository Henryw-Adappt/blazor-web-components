namespace CommonLibrary.Events;

using CommonLibrary.Data;

public class AppStateEventArgs : EventArgs
{

    public AppState? State { get; set; }

}

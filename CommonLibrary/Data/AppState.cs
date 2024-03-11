namespace CommonLibrary.Data;

using System.Text.Json;

public class AppState
{
    public string AppName { get; set; } = "Untitled";

    public string Serialize() => JsonSerializer.Serialize(this);
}

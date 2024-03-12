namespace CommonLibrary;

using NSwag.Generation.Processors.Contexts;
using NSwag.Generation.Processors;

public class TypesProcessor : IDocumentProcessor
{
    public void Process(DocumentProcessorContext context)
    {
        var assembly = this.GetType().Assembly;
        var types = assembly.ExportedTypes
            .Where(t => (t.FullName.StartsWith("CommonLibrary.Data.") || t.FullName.StartsWith("CommonLibrary.Events.")) && t.IsClass);

        foreach (var type in types)
        {
            if (!context.SchemaResolver.HasSchema(type, false))
            {
                _ = context.SchemaGenerator.Generate(type, context.SchemaResolver);
            }
        }
    }
}

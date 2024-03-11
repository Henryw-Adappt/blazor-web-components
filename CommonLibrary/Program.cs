using CommonLibrary;
using NSwag.CodeGeneration.TypeScript;
using NSwag.Generation.WebApi;

var apiSettings = new WebApiOpenApiDocumentGeneratorSettings
{
    DefaultUrlTemplate = "api/{controller}/{action}/{id}",
};
apiSettings.DocumentProcessors.Add(new TypesProcessor());
var apiGenerator = new WebApiOpenApiDocumentGenerator(apiSettings);
var document = await apiGenerator.GenerateForControllersAsync(new List<Type>());

var tsSettings = new TypeScriptClientGeneratorSettings
{
    ClassName = "{controller}Client",
};
var tsGenerator = new TypeScriptClientGenerator(document, tsSettings);
var code = tsGenerator.GenerateFile();

var docPath = Directory.GetCurrentDirectory() + "/wwwroot";
using (var outputFile = new StreamWriter(Path.Combine(docPath, "types.ts")))
{
    outputFile.WriteLine(code);
}

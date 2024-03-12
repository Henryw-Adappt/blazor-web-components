# BlazorWebComponents

A demo project connecting Blazor server with web components.

ClientLibrary is a Vite + Lit web components library project. It generates two files: client-library.js, which provides the components,
and ClientLibrary.lib.module.js, which registers event handlers for Blazor x JS interop.

ServerApp is a Blazor server app that includes the ClientLibrary scripts. The ClientLibrary web components can be used directly in
Blazor the same as native elements.

CommonLibrary is an (ASP) C# library with common class declarations (Data) and event handlers/args (Events). It uses NSwag to
convert its class declarations into a TypeScript client with types and classes. This client is imported into the ClientLibrary.

Before building, run `npm i` in ClientLibrary to install its dependencies.

To build:
1. Build and run CommonLibrary. It must be executed to generate the required TypeScript file.
2. Build ClientLibrary. It builds its JS files as part of the MSBuild process.
3. Build ServerApp.

namespace ClearBank.DeveloperPortal.Tests;

using System.Linq;
using Microsoft.OpenApi;
using Microsoft.OpenApi.Models;
using Microsoft.OpenApi.Readers;
using SharpYaml.Schemas;
using Shouldly.Configuration;

public class EndpointTests
{
    public static IEnumerable<object[]> EndpointFiles => new DirectoryInfo(FilePaths.EndpointsDirectory).GetFiles().Select(x => new object[] { x.Name });

    [Theory]
    [MemberData(nameof(EndpointFiles))]
    public async Task Endpoints_Accepting_Components_Must_All_Have_Patterns_Registered(string endpointFileName)
    {
        // Arrange
        var endpointsFile = Path.Combine(FilePaths.EndpointsDirectory, endpointFileName);
        var openApiDocument = await ReadOpenApiDocument(endpointsFile);

        // Act
        var elements = GetProperties(openApiDocument.Components);
        var stringElements = elements.Where(x => string.Equals(x.PropertySchema.Type, "string"));
        var patterns = stringElements.Select(x => (x.ComponentName, x.PropertyName, x.PropertySchema.Pattern));

        // Assert
        patterns.ShouldAllBe(x => !string.IsNullOrWhiteSpace(x.Pattern));
    }

    private static IEnumerable<(string ComponentName, string PropertyName, OpenApiSchema PropertySchema)> GetProperties(OpenApiComponents components)
    {
        var properties = new List<(string schema, string property, OpenApiSchema propertySchema)>();

        foreach (var schema in components.Schemas)
        {
            var schemaName = schema.Key;
            foreach (var prop in schema.Value.Properties)
            {
                var propertyName = prop.Key;
                var property = prop.Value;

                properties.Add(new(schemaName, propertyName, property));
            }
        }

        return properties;
    }

    private static async Task<OpenApiDocument> ReadOpenApiDocument(string filePath)
    {
        using var fileReader = new FileStream(filePath, FileMode.Open);
        var readResult = await new OpenApiStreamReader().ReadAsync(fileReader);

        readResult.OpenApiDiagnostic.Errors.ShouldBeEmpty();

        return readResult.OpenApiDocument;
    }
}
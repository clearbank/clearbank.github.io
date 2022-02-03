const axios = require('axios')
const fs = require('fs');
const converter = require('swagger2openapi');

const config = require('./data/config')

async function convertSwaggerToOpenAPI (swagger, path, url) {
  const options = {
    patch: true,
    direct: true,
    url
  }

  await converter.convertStream(swagger, options, function(err, output){
    jsonContent = JSON.stringify(output, null, 2)
    fs.writeFile(path, jsonContent, 'utf8', function (err) {
      if (err) {
          console.log(`An error was encountered with ${path}`);
          return console.log(err);
      }
      console.log(`${path} has been saved`);
    });
  })
}

async function download (url, path) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  await convertSwaggerToOpenAPI(response.data, path, url)
}

async function getSwaggerFiles () {
  const swaggerFiles = config.endpointSwaggerFiles
  let baseURL = 'https://institution-api.clearbank.co.uk'

  if (process.env.SWAGGER_URL) {
    baseURL = process.env.SWAGGER_URL
  }

  // Get all swagger files and save locally
  await swaggerFiles.forEach(swaggerFile => {
    const url = `${baseURL}${swaggerFile.path}`
    const path = `./data/endpoints/${swaggerFile.name}.json`

    download(url, path)
  })
}

getSwaggerFiles()

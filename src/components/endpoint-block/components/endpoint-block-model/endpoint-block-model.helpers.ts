// loop through all repsonse codes to find one inbetween 200 - 300
export const getSuccessfullRespsoseCode = (apiData, path, type) =>
  Object.keys(apiData.paths[path][type].responses).find(
    (responseCode: string): boolean => responseCode.split('')[0] === '2'
  )

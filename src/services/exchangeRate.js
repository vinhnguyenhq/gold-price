export const EXCHANGE_RATE_URI = 'https://4i2ufdga01.execute-api.us-east-1.amazonaws.com/api/exchangerate/'

export const fetchByDate = async (dateStr) => {
  return fetch(`${EXCHANGE_RATE_URI}${dateStr}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw response
    })
    .catch((error) => {
      if (error instanceof Error) {
        return { error }
      }

      return error.json().then((responseJson) => {
        return {
          error: new Error(responseJson.message),
        }
      })
    })
}

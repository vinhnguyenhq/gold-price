const EXCHANGE_RATE_URI = 'https://4i2ufdga01.execute-api.us-east-1.amazonaws.com/api/exchangerate/'

export const fetchByDate = async (dateStr) => {
  return fetch(`${EXCHANGE_RATE_URI}${dateStr}`)
    .then((response) => response.json())
    .then((data) => Promise.resolve(data))
}

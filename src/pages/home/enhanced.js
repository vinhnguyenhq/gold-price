import { fetchByDate } from 'services/exchangeRate'

export const DATE_FORMAT = 'YYYY-MM-DD'

export const fetchExchangeRates = (dataStr) => {
  return new Promise((resolve, reject) => {
    fetchByDate(dataStr)
      .then((response) => {
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export const columns = [
  {
    title: 'USD',
    dataIndex: 'Usd',
    key: 'Usd',
    render: (Usd) => Usd.rate,
  },
  {
    title: 'EUR',
    dataIndex: 'Eur',
    key: 'Eur',
    render: (Eur) => Eur.rate,
  },
  {
    title: 'Source',
    dataIndex: 'Src',
    key: 'Src',
    filters: [
      {
        text: 'State Bank Of Vietnam',
        value: 'sbv.com.vn',
      },
      {
        text: 'Vietcombank',
        value: 'vcb.com.vn',
      },
    ],
    onFilter: (value, record) => record.Src.indexOf(value) === 0,
  },
  {
    title: 'Exchange Rate Id',
    dataIndex: 'ExchangeRateId',
    key: 'ExchangeRateId',
  },
  {
    title: 'Created',
    dataIndex: 'CreatedAt',
    key: 'CreatedAt',
  },
  {
    title: 'Updated',
    dataIndex: 'UpdatedAt',
    key: 'UpdatedAt',
  },
]

export const currentToDateMomentObject = new Date()

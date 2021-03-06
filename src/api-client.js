import { CodeGovAPIClient } from '@code.gov/api-client/src/index.js'

const client = new CodeGovAPIClient({
  api_key: process.env.CODE_GOV_API_KEY,
  base: process.env.CODE_GOV_API_BASE,
  debug: true,
  remember: true // enables caching
})

export default client
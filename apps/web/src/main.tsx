import { StrictMode, Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/app'
import { configure } from 'axios-hooks'
import { LRUCache } from 'typescript-lru-cache'
import axios from 'axios'
const cache = new LRUCache<string, string>({ maxSize: 100 })
export const Axios = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})
configure({ axios: Axios, cache })
ReactDOM.render(
  <StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
  document.getElementById('root'),
)

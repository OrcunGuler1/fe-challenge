import { StrictMode, Suspense } from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './app/app'
import { configure } from 'axios-hooks'
import axios from 'axios'
const Axios = axios.create({
  baseURL: 'http://localhost:3333',
})
configure({ axios: Axios })
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

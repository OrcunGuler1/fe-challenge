import styles from './app.module.scss'
import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from '@magiclick/header'
import { Title } from '@magiclick/title'
import AccountList from './account-list/account-list'

export function App() {
  return (
    <Router>
      <Header />
      <Title />
      <AccountList />
    </Router>
  )
}

export default App

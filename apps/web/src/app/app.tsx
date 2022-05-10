import styles from './app.module.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from '@magiclick/header'
import { Title } from '@magiclick/title'
import AccountList from './account-list/account-list'
import AccountDetails from './account-details/account-details'

export function App() {
  return (
    <Router>
      <Header />
      <Title />
      <Route path="/" exact component={AccountList} />
      <Route path="/account/:id" component={AccountDetails} />
    </Router>
  )
}

export default App

import styles from './app.module.scss';
import { BrowserRouter as Router } from 'react-router-dom';

import { Route, Link } from 'react-router-dom';
import { Button } from '@magiclick/button';
import { Header } from '@magiclick/header';
import { Title } from '@magiclick/title';
import AccountList from './account-list/account-list';
export function App() {
  onclick = () => {
    console.log('clicked');
  };
  return (
    <Router>
      <Header />
      <Title />
      <AccountList />
    </Router>
  );
}

export default App;

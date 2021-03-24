import { Route, Switch } from 'react-router';
import Header from './UI/Header/Header';
import './App.css';
import { Home } from './UI/Home/Home';
import { ReselectTesting } from './UI/ReselectTesting/ReselectTesting';

const App = () => {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/test' render={() => <ReselectTesting />} />
      </Switch>
    </div>
  );
}

export default App;
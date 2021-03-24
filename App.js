import { Route, Switch } from 'react-router';
import Header from './UI/Header/Header';
import './App.css';
import { Home } from './UI/Home/Home';
import { ReselectTesting } from './src/UI/ReselectTesting/ReselectTesting';

const App = () => {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path='/' render={() => <Home />} />
      </Switch>
    </div>
  );
}

export default App;
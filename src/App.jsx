import { Route, Switch } from 'react-router';
import Header from './UI/Header/Header';
import './App.css';
import { Home } from './UI/Home/Home';
import { ReselectTesting } from './UI/ReselectTesting/ReselectTesting';
import { ThirdAndFourthDegrees } from './UI/ThirdAndFourthDegrees/ThirdAndFourthDegrees';
import { EkasuiReport } from './UI/EkasuiReport/EkasuiReport';

const App = () => {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/third-and-fourth-degrees' render={() => <ThirdAndFourthDegrees />} />
        <Route exact path='/ekasui-report' render={() => <EkasuiReport />} />
        <Route exact path='/test' render={() => <ReselectTesting />} />
      </Switch>
    </div>
  );
}

export default App;
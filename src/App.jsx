import { Route, Switch } from 'react-router';
import MyHeader from './UI/MyHeader/MyHeader';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, DatePicker } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, FileExcelOutlined, VideoCameraOutlined, FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import './App.css';
import { Home } from './UI/Home/Home';
import { TermsOfUse } from "./UI/TermsOfUse/TermsOfUse";
import { ReselectTesting } from './UI/ReselectTesting/ReselectTesting';
import { ThirdAndFourthDegrees } from './UI/ThirdAndFourthDegrees/ThirdAndFourthDegrees';
import { EkasuiReport } from './UI/EkasuiReport/EkasuiReport';
import { ConvertVideo } from './UI/ConvertVideo/ConvertVideo';
import { Telegrams } from './UI/Telegrams/Telegrams';
import { WithTermsOfUse } from "./HOC/WithTermsOfUse";

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <div className="container"> */}
        <MyHeader />

        
        <Switch>
          <Route exact path='/' render={() => <TermsOfUse />} />
          <Route exact path='/work' render={() => <WithTermsOfUse Component={TermsOfUse} />} />
          <Route exact path='/third-and-fourth-degrees' render={() => <ThirdAndFourthDegrees />} />
          <Route exact path='/ekasui-report' render={() => <EkasuiReport />} />
          <Route exact path='/convert-video' render={() => <ConvertVideo />} />
          <Route exact path='/telegrams' render={() => <Telegrams />} />
          <Route exact path='/test' render={() => <ReselectTesting />} />
        </Switch>
      {/* </div> */}
    </Layout>
  );
}

export default App;
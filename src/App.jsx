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
import { MySideBar } from "./UI/MySideBar/MySideBar"
import { GeneralSettingsMainComponent } from './UI/Work/Settings/GeneralSettings/GeneralSettingsMainComponent';
import { FilesUploadMainComponent } from './UI/Work/FilesUpload/FilesUploadMainComponent';

const { Content } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <div className="container"> */}
      <MyHeader />

      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

          <MySideBar />

          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            <Switch>
              <div>
                <Route exact path='/' render={() => <TermsOfUse />} />
                <Route exact path='/work/load-books' render={() => <WithTermsOfUse Component={FilesUploadMainComponent} />} />
                <Route exact path='/work/general-settings' render={() => <WithTermsOfUse Component={GeneralSettingsMainComponent} />} />
                
              </div>
            </Switch>

          </Content>
        </Layout>
      </Content>





      {/* <Switch>
        <Route exact path='/' render={() => <TermsOfUse />} />
        <Route exact path='/work' render={() => <WithTermsOfUse Component={Work} />} />
        <Route exact path='/third-and-fourth-degrees' render={() => <ThirdAndFourthDegrees />} />
        <Route exact path='/ekasui-report' render={() => <EkasuiReport />} />
        <Route exact path='/convert-video' render={() => <ConvertVideo />} />
        <Route exact path='/telegrams' render={() => <Telegrams />} />
        <Route exact path='/test' render={() => <ReselectTesting />} />
      </Switch> */}
      {/* </div> */}
    </Layout>
  );
}

export default App;
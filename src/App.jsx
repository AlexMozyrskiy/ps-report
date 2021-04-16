import { Route, Switch, useHistory } from 'react-router';
import MyHeader from './UI/MyHeader/MyHeader';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout } from 'antd';
import './App.css';
import { TermsOfUse } from "./UI/TermsOfUse/TermsOfUse";
import { WithTermsOfUse } from "./HOC/WithTermsOfUse";
import { MySideBar } from "./UI/MySideBar/MySideBar"
import { GeneralSettingsMainComponent } from './UI/Work/Settings/GeneralSettings/GeneralSettingsMainComponent';
import { FilesUploadMainComponent } from './UI/Work/FilesUpload/FilesUploadMainComponent';
import { ThirdAndFourthDegrees } from "./UI/Work/Reports/ThirdAndFourthDegrees/ThirdAndFourthDegrees"
import { XlsxToJson } from './UI/Work/Tests/XlsxToJson/XlsxToJson';

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
                <Route exact path='/work/reports/third-and-fourth-defrees' render={() => <WithTermsOfUse Component={ThirdAndFourthDegrees} />} />
                <Route exact path='/work/excel-to-json' render={() => <WithTermsOfUse Component={XlsxToJson} />} />

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
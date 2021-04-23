import { Route, Switch } from 'react-router';
import { useSelector } from 'react-redux';
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
import { Score } from './UI/Work/Reports/Score/Score';
import { SpeedRestrictions } from './UI/Work/Reports/SpeedRestrictions/SpeedRestrictions';
import { ShortStraightenings } from './UI/Work/Reports/ShortStraightenings/ShortStraightenings';
import { A1543AndMore } from './UI/Work/Reports/A1543AndMore/A1543AndMore';
import { InsulatingJointDrowdowns } from './UI/Work/Reports/InsulatingJointDrowdowns/InsulatingJointDrowdowns';
import { RepeatabilityAnalysis } from './UI/Work/Reports/RepeatabilityAnalysis/RepeatabilityAnalysis';
import { selectIsWeAreOnTheWorkTab } from "./state/features/URL/selectors";

const { Content } = Layout;

const App = () => {
  // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
  const isWeAreOnTheWorkTab = useSelector(selectIsWeAreOnTheWorkTab);
  // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <div className="container"> */}
      <MyHeader />

      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

          {isWeAreOnTheWorkTab ? <MySideBar /> : null}

          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            <Switch>
              <Route exact path='/' render={() => <TermsOfUse />} />
              <Route exact path='/work/load-books' render={() => <WithTermsOfUse component={FilesUploadMainComponent} />} />
              <Route exact path='/work/general-settings' render={() => <WithTermsOfUse component={GeneralSettingsMainComponent} />} />
              <Route exact path='/work/reports/third-and-fourth-defrees' render={() => <WithTermsOfUse component={ThirdAndFourthDegrees} />} />
              <Route exact path='/work/reports/score' render={() => <WithTermsOfUse component={Score} />} />
              <Route exact path='/work/reports/speed-restrictions' render={() => <WithTermsOfUse component={SpeedRestrictions} />} />
              <Route exact path='/work/reports/short-straightenings' render={() => <WithTermsOfUse component={ShortStraightenings} />} />
              <Route exact path='/work/reports/1543-and-more' render={() => <WithTermsOfUse component={A1543AndMore} />} />
              <Route exact path='/work/reports/insulating-joint-drowdowns' render={() => <WithTermsOfUse component={InsulatingJointDrowdowns} />} />
              <Route exact path='/work/reports/repeatability-analysis' render={() => <WithTermsOfUse component={RepeatabilityAnalysis} />} />
              <Route exact path='/work/excel-to-json' render={() => <WithTermsOfUse component={XlsxToJson} />} />
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
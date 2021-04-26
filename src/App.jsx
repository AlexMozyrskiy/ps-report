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
import { FilesUploadGeometryMainComponent } from './UI/Work/FilesUpload/FilesUploadGeometry/FilesUploadGeometryMainComponent';
import { ThirdAndFourthDegrees } from "./UI/Work/Reports/ThirdAndFourthDegrees/ThirdAndFourthDegrees"
import { XlsxToJson } from './UI/Work/Tests/XlsxToJson/XlsxToJson';
import { Score } from './UI/Work/Reports/Score/Score';
import { SpeedRestrictions } from './UI/Work/Reports/SpeedRestrictions/SpeedRestrictions';
import { ShortStraightenings } from './UI/Work/Reports/ShortStraightenings/ShortStraightenings';
import { A1543AndMore } from './UI/Work/Reports/A1543AndMore/A1543AndMore';
import { InsulatingJointDrowdownsRepeats } from './UI/Work/Reports/InsulatingJointDrowdownsRepeats/InsulatingJointDrowdownsRepeats';
import { RepeatabilityAnalysis } from './UI/Work/Reports/RepeatabilityAnalysis/RepeatabilityAnalysis';
import { selectIsWeAreOnTheWorkTab } from "./state/features/URL/selectors";
import { InsulatingJointDrowdowns } from './UI/Work/Reports/InsulatingJointDrowdowns/InsulatingJointDrowdowns';
import { Time } from './UI/Work/Tests/Time/Time';
import { FilesUploadVideoMainComponent } from './UI/Work/FilesUpload/FolesUploadVideo/FilesUploadVideoMainComponent';
import { CommonTest } from './UI/Work/Tests/CommonTest/CommonTest';
import { TelegramVideo } from './UI/Work/Telegrams/Video/TelegramVideo';

const { Content } = Layout;

const App = () => {
  // -------------------------------------------------------------- Хуки ---------------------------------------------------------------------------
  const isWeAreOnTheWorkTab = useSelector(selectIsWeAreOnTheWorkTab);
  // -------------------------------------------------------------- / Хуки -------------------------------------------------------------------------

  return (
    <Layout style={{ minHeight: "100vh" }}>

      <MyHeader />

      <Content style={{ padding: '0 50px' }}>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>

          {isWeAreOnTheWorkTab ? <MySideBar /> : null}

          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            <Switch>
              <Route exact path='/' render={() => <TermsOfUse />} />
              <Route exact path='/work/load-geometry-books' render={() => <WithTermsOfUse component={FilesUploadGeometryMainComponent} />} />
              <Route exact path='/work/load-video-books' render={() => <WithTermsOfUse component={FilesUploadVideoMainComponent} />} />
              <Route exact path='/work/general-settings' render={() => <WithTermsOfUse component={GeneralSettingsMainComponent} />} />
              <Route exact path='/work/reports/third-and-fourth-defrees' render={() => <WithTermsOfUse component={ThirdAndFourthDegrees} />} />
              <Route exact path='/work/reports/score' render={() => <WithTermsOfUse component={Score} />} />
              <Route exact path='/work/reports/speed-restrictions' render={() => <WithTermsOfUse component={SpeedRestrictions} />} />
              <Route exact path='/work/reports/short-straightenings' render={() => <WithTermsOfUse component={ShortStraightenings} />} />
              <Route exact path='/work/reports/1543-and-more' render={() => <WithTermsOfUse component={A1543AndMore} />} />
              <Route exact path='/work/reports/insulating-joint-drowdowns-repeats' render={() => <WithTermsOfUse component={InsulatingJointDrowdownsRepeats} />} />
              <Route exact path='/work/reports/insulating-joint-drowdowns' render={() => <WithTermsOfUse component={InsulatingJointDrowdowns} />} />
              <Route exact path='/work/reports/repeatability-analysis' render={() => <WithTermsOfUse component={RepeatabilityAnalysis} />} />
              <Route exact path='/work/telegrams/video' render={() => <WithTermsOfUse component={TelegramVideo} />} />
              <Route exact path='/work/excel-to-json' render={() => <WithTermsOfUse component={XlsxToJson} />} />
              <Route exact path='/work/time' render={() => <WithTermsOfUse component={Time} />} />
              <Route exact path='/work/common-test' render={() => <WithTermsOfUse component={CommonTest} />} />
            </Switch>

          </Content>

        </Layout>
      </Content>

    </Layout>
  );
}

export default App;
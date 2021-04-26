import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu } from 'antd';
import { LaptopOutlined, FileExcelOutlined, VideoCameraOutlined, FileTextOutlined, SettingOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

export const MySideBar = () => {
    
    return (
        <Sider className="site-layout-background" width={300}>
          <Menu
            mode="inline"
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            
            <SubMenu key="sub1" icon={<SettingOutlined />} title="Настройки и установки">
              <Menu.Item key="1"><NavLink to="/work/general-settings">Основные Настройки</NavLink></Menu.Item>
              <Menu.Item key="2">Видео</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<FileExcelOutlined />} title="Загрузка файлов">
              <Menu.Item key="3"><NavLink to="/work/load-geometry-books">ГРК</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to="/work/load-video-books">Видео</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<LaptopOutlined />} title="Отчетные формы по ГРК">
              <Menu.Item key="5"><NavLink to="/work/reports/third-and-fourth-defrees">Третьи и четвертые степени</NavLink></Menu.Item>
              <Menu.Item key="6"><NavLink to="/work/reports/score">Бальность для Единых Форм</NavLink></Menu.Item>
              <Menu.Item key="7"><NavLink to="/work/reports/speed-restrictions">Справка по ограничениям</NavLink></Menu.Item>
              <Menu.Item key="8"><NavLink to="/work/reports/short-straightenings">Короткие рихтовки</NavLink></Menu.Item>
              <Menu.Item key="9"><NavLink to="/work/reports/insulating-joint-drowdowns-repeats">Повторы просадок ИС</NavLink></Menu.Item>
              <Menu.Item key="10"><NavLink to="/work/reports/insulating-joint-drowdowns">Просадки в ИС форма для ПС</NavLink></Menu.Item>
              <Menu.Item key="11"><NavLink to="/work/reports/repeatability-analysis">Анализ повторяемости</NavLink></Menu.Item>
              <Menu.Item key="12"><NavLink to="/work/reports/1543-and-more">Шаблон 1543 и более</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub4" icon={<VideoCameraOutlined />} title="Отчетные формы по Видеокотролю">
              <Menu.Item key="13">option9</Menu.Item>
            </SubMenu>
            
            <SubMenu key="sub5" icon={<FileTextOutlined />} title="Телеграммы">
              <Menu.Item key="14"><NavLink to="/work/telegrams/video">Телеграмма Видео</NavLink></Menu.Item>
            </SubMenu>

            <SubMenu key="sub6" icon={<FileTextOutlined />} title="Тесты">
              <Menu.Item key="15"><NavLink to="/work/excel-to-json">Excel в JSON</NavLink></Menu.Item>
              <Menu.Item key="16"><NavLink to="/work/time">Time</NavLink></Menu.Item>
              <Menu.Item key="17"><NavLink to="/work/common-test">Common Test</NavLink></Menu.Item>
            </SubMenu>

          </Menu>
        </Sider>
    );
}
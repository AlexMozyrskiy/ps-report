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
              <Menu.Item key="4">Видео</Menu.Item>
            </SubMenu>

            <SubMenu key="sub2" icon={<FileExcelOutlined />} title="Загрузка файлов">
              <Menu.Item key="5"><NavLink to="/work/load-books">ГРК</NavLink></Menu.Item>
              <Menu.Item key="6">Видео</Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<LaptopOutlined />} title="Отчетные формы по ГРК">
              <Menu.Item key="9">option5</Menu.Item>
              <Menu.Item key="10">option6</Menu.Item>
              <Menu.Item key="11">option7</Menu.Item>
              <Menu.Item key="12">option8</Menu.Item>
            </SubMenu>

            <SubMenu key="sub4" icon={<VideoCameraOutlined />} title="Отчетные формы по Видеокотролю">
              <Menu.Item key="13">option9</Menu.Item>
              <Menu.Item key="14">option10</Menu.Item>
              <Menu.Item key="15">option11</Menu.Item>
              <Menu.Item key="16">option12</Menu.Item>
            </SubMenu>
            
            <SubMenu key="sub5" icon={<FileTextOutlined />} title="Телеграммы">
              <Menu.Item key="17">option9</Menu.Item>
              <Menu.Item key="18">option10</Menu.Item>
              <Menu.Item key="19">option11</Menu.Item>
              <Menu.Item key="20">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
    );
}
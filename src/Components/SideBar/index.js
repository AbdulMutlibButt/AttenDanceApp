import React from 'react'
import { Menu, Switch } from 'antd';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ClassIcon from '@mui/icons-material/Class';
import './style.css'

const { SubMenu } = Menu;

class SideBar extends React.Component {
  state = {
    theme: 'light',
    current: '1',
  };


  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div className="SideBar">
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 200,height:'100vh',marginTop:-42 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
            <Menu.Item icon={<AdminPanelSettingsIcon />} key="1">Teacher</Menu.Item>
            <Menu.Item icon={<PeopleAltIcon/>}key="2">Students</Menu.Item>
            <Menu.Item icon={<ClassIcon/>} key="3">Classes</Menu.Item>
         
        </Menu>
      </div>
    );
  }
}
export default SideBar
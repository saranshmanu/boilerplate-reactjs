import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
function Sidebar() {
  return (
    <Sider
      theme="light"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div style={{ padding: 40 }} />
      <Menu mode="inline" defaultSelectedKeys={['4']} theme="light">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/" className="nav-text">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/settings" className="nav-text">Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default Sidebar;

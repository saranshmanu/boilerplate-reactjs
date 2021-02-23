import { Menu, Button } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Navbar({ setVisible }) {
  const [current, setCurrent] = useState('mail');
  return (
    <Menu style={{ textAlign: 'right', paddingRight: 30 }} onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="Notifications" icon={<BellOutlined />} title="Notifications" onClick={() => setVisible(true)}>Notifications</Menu.Item>
      <Button danger>Logout</Button>
    </Menu>
  );
}

export default Navbar;

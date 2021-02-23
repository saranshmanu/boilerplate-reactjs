/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';

const { Header, Content, Footer } = Layout;
const styles = {
  header: {
    padding: 0,
    position: 'fixed',
    marginLeft: 0,
    marginRight: 0,
    width: 'calc(100% - 200px)',
  },
  footer: {
    background: '#333',
    color: '#bbb',
    textAlign: 'center',
    position: 'fixed',
    padding: '10px 10px 10px 10px',
    bottom: 0,
    width: 'calc(100% - 200px)',
    height: '40px',
  },
};
// eslint-disable-next-line react/prop-types
function CleanLayout({ children }) {
  const [visible, setVisible] = useState(false);
  return (
    <Layout theme="light">
      <Sidebar />
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={styles.header}>
          <Navbar setVisible={setVisible} />
          <Notification visible={visible} setVisible={setVisible} />
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', paddingTop: 70 }}>
          <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
            <div style={{ minHeight: '80vh' }}>{children}</div>
          </div>
        </Content>
        <Footer style={styles.footer}>
          React Boilerplate ©2020 😊 Created by Saransh Mittal
        </Footer>
      </Layout>
    </Layout>
  );
}

export default CleanLayout;

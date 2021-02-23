import { Drawer, List, Avatar } from 'antd';

const data = [
  {
    title: 'Ant Design Title 1',
  },
];

// eslint-disable-next-line react/prop-types
function Notification({ visible, setVisible }) {
  return (
    <Drawer
      width={480}
      title="Notification"
      placement="right"
      closable
      onClose={() => setVisible(false)}
      visible={visible}
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </Drawer>
  );
}

export default Notification;

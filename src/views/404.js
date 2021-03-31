import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

function NotFound() {
  const history = useHistory();
  const onClick = () => {
    history.push('/');
  };
  return (
    <Result
      style={{ background: '#fff' }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={onClick}>Back Home</Button>}
    />
  );
}

export default NotFound;

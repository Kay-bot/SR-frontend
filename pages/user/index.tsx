import Layout from '../../components/Layout';
import { Container } from 'reactstrap';
import Private from '../../components/auth/Private';

const UserIndex = () => {
  return (
    <Layout>
      <Container>
        <Private>
          <h2>User Dashboard</h2>
        </Private>
      </Container>
    </Layout>
  );
};

export default UserIndex;

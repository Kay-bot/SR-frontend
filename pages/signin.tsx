import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import SigninComponent from '../components/auth/SigninComponent';
const Signin = () => {
  return (
    <Layout>
      <Container>
        <SigninComponent />
      </Container>
    </Layout>
  );
};

export default Signin;

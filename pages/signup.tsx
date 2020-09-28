import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import SignupComponent from '../components/auth/SignupComponent';
const Signup = () => {
  return (
    <Layout>
      <Container>
        <SignupComponent />
      </Container>
    </Layout>
  );
};

export default Signup;

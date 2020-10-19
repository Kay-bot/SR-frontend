import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import SignupComponent from '../components/auth/SignupComponent';
const Signup = () => {
  return (
    <Layout>
      <Container>
      <div className="row">
          <div className="col-md-6 offset-md-3">
        <SignupComponent />
        </div>
        </div>
      </Container>
    </Layout>
  );
};

export default Signup;

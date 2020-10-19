import Layout from '../components/Layout';
import {withRouter} from 'next/router';
import { Container } from 'reactstrap';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = ({router}) => {
  const showRedirectMessage = () =>{
    if(router.query.message) {
    return (<div className="alert alert-danger">{router.query.message}</div>)
    }else {
      return
    }
  }
  return (
    <Layout>
      <Container>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="my-5">
            {showRedirectMessage()}
            </div>
          <SigninComponent />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default withRouter(Signin);

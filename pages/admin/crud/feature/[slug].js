import Layout from '../../../../components/Layout';
import { Container } from 'reactstrap';
import Admin from '../../../../components/auth/Admin';
import UpdateFeature from '../../../../components/crud/UpdateFeature';

const Feature = () => {
  return (
    <Layout>
      <Container>
        <Admin>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pt-5 pb-5">
                <h2>Update Feature</h2>
              </div>
              <div className="col-md-12">
                <UpdateFeature />
              </div>
            </div>
          </div>
        </Admin>
      </Container>
    </Layout>
  );
};

export default Feature;

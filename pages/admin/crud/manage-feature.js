import Layout from '../../../components/Layout';
import { Container } from 'reactstrap';
import Admin from '../../../components/auth/Admin';
import ReadFeature from '../../../components/crud/ReadFeature';

const Feature = () => {
  return (
    <Layout>
      <Container>
        <Admin>
          <div className="container">
            <div className="row text-center py-5">
              <div className="col-md-12">
                <h2>Manage Feature</h2>
              </div>
              <div className="col-md-12">
                <ReadFeature />
              </div>
            </div>
          </div>
        </Admin>
      </Container>
    </Layout>
  );
};

export default Feature;

import Layout from '../../../components/Layout';
import { Container } from 'reactstrap';
import Admin from '../../../components/auth/Admin';
import ReadSupportTeam from '../../../components/crud/ReadSupportTeam';

const Staff = () => {
  return (
    <Layout>
      <Container>
        <Admin>
          <div className="container">
            <div className="row text-center py-5">
              <div className="col-md-12">
                <h2>Manage Support Staff</h2>
              </div>
              <div className="col-md-12">
                <ReadSupportTeam />
              </div>
            </div>
          </div>
        </Admin>
      </Container>
    </Layout>
  );
};

export default Staff;

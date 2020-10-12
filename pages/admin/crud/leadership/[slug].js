import Layout from '../../../../components/Layout';
import { Container } from 'reactstrap';
import Admin from '../../../../components/auth/Admin';
import UpdateLeader from '../../../../components/crud/UpdateLeader';

const Staff = () => {
  return (
    <Layout>
      <Container>
        <Admin>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 pt-5 pb-5">
                <h2>Update Leader</h2>
              </div>
              <div className="col-md-12">
                <UpdateLeader />
              </div>
            </div>
          </div>
        </Admin>
      </Container>
    </Layout>
  );
};

export default Staff;

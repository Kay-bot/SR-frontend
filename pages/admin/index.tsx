import Layout from '../../components/Layout';
import { Container } from 'reactstrap';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
  return (
    <Layout>
      <Container>
        <Admin>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Admin Dashboard</h2>
              </div>
              <div className="col-6 py-5">
                <ul className="list-group">
                  <li className="list-group-item">
                    <Link href="/admin/crud/leader">
                      <a>Add New Leader</a>
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <Link href="/admin/crud/staff">
                      <a>Add New Field Staff</a>
                    </Link>
                  </li>

                  <li className="list-group-item">
                    <Link href="/admin/crud/supportTeam">
                      <a>Add New Support Staff</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6 py-5">
                <li className="list-group-item">
                  <Link href="/admin/crud/manage-field-staff">
                    <a>Update/Delete Field Staff</a>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Admin>
      </Container>
    </Layout>
  );
};

export default AdminIndex;

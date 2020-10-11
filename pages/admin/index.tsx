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
              <div className="col-12 py-5">
                <ul className="list-group">
                  <li className="list-group-item">
                    <a href="/admin/crud/leader">Add New Leader</a>
                  </li>
                  <li className="list-group-item">
                    <a href="/admin/crud/staff">Add New Onsite Staff</a>
                  </li>

                  <li className="list-group-item">
                    <a href="/admin/crud/supportTeam">Add New Support Staff</a>
                  </li>

                  <li className="list-group-item">
                    <Link href="/admin/crud/staffs">
                      <a>Update/Delete Staffs</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Admin>
      </Container>
    </Layout>
  );
};

export default AdminIndex;

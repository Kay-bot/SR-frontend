import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import OurTeamComponent from '../components/OurTeamComponent';
import WhyUs from '../components/WhyUs';
const Index = () => {
  return (
    <Layout>
      <Container>
        <OurTeamComponent />
        <WhyUs />
      </Container>
    </Layout>
  );
};

export default Index;

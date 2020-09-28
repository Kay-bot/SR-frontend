import Layout from '../components/Layout';
import { Container } from 'reactstrap';
import Carousel from '../components/Carousel';
import HowCanWeHelp from '../components/HowCanWeHelp';
import WhyUs from '../components/WhyUs';
const Index = () => {
  return (
    <Layout>
      <Carousel />
      <Container>
        <div>
          <HowCanWeHelp />
          <WhyUs />
        </div>
      </Container>
    </Layout>
  );
};

export default Index;

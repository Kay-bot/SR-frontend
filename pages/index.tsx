import Layout from '../components/Layout';
import OurTeamComponent from '../components/OurTeamComponent';
import WhyUs from '../components/WhyUs';
import HomeHeader from '../components/HomeHeader';
import CompliancePartners from '../components/CompliancePartners';

const Index = () => {
  return (
    <Layout>
      <HomeHeader />
      <OurTeamComponent />
      <WhyUs />
      <CompliancePartners />
    </Layout>
  );
};

export default Index;

import Layout from '../components/Layout';
import OurTeamComponent from '../components/OurTeamComponent';
import WhyUs from '../components/WhyUs';
import HomeHeader from '../components/HomeHeader';
const Index = () => {
  return (
    <Layout>
      <HomeHeader />
      <OurTeamComponent />
      <WhyUs />
    </Layout>
  );
};

export default Index;

import Layout from '../../components/Layout';
import { Container } from 'reactstrap';
import PhotosGallery from '../../components/PhotosGallery';
const Gallery = () => {
  return (
    <Layout>
      <Container>
        <PhotosGallery />
      </Container>
    </Layout>
  );
};

export default Gallery;

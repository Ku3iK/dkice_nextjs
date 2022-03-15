import Container from '@components/containers/Container/Container';
import Gallery from '@components/Gallery';
import { request } from 'src/lib/datocms';
import { GalleriesInterface } from 'src/types/GalleriesInterface';

const MAGMET_GALLERY_QUERY = `
  query MyQuery {
    allMagmetGalleries {
      imageTitle
      imageTitleDe
      imageDescription
      imageDescriptionDe
      image {
        url
      }
    }
  }
`;

export async function getServerSideProps() {
  //@ts-ignore
  const data = await request({
    query: MAGMET_GALLERY_QUERY
  });

  return {
    props: { data }
  };
}

const MagmetGallery = ({ data }: GalleriesInterface) => {
  const { allMagmetGalleries } = data;

  return (
    <Container>
      <Gallery galleryData={allMagmetGalleries} />
    </Container>
  );
};

export default MagmetGallery;

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

export async function getStaticProps() {
  //@ts-ignore
  const data = await request({
    query: MAGMET_GALLERY_QUERY
  });

  return {
    props: { data },
    revalidate: 60 * 30 //60 sec * 30 = 30 min
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

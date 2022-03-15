import Container from '@components/containers/Container/Container';
import Gallery from '@components/Gallery';
import { request } from 'src/lib/datocms';
import { GalleriesInterface } from 'src/types/GalleriesInterface';

const DKICE_GALLERY_QUERY = `
  query MyQuery {
    allDkiceGalleries {
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
    query: DKICE_GALLERY_QUERY
  });

  return {
    props: { data },
    revalidate: 60 * 30 //60 sec * 30 = 30 min
  };
}

const DkiceGallery = ({ data }: GalleriesInterface) => {
  const { allDkiceGalleries } = data;

  return (
    <Container>
      <Gallery galleryData={allDkiceGalleries} />
    </Container>
  );
};

export default DkiceGallery;

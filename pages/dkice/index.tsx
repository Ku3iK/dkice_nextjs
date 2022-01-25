import Container from '@components/containers/Container/Container';
import useOfDryIceCleaningContent from 'src/assets/i18n/dkice/useOfDryIceCleaning.json';
import DynamicContent from '@components/containers/DynamicContent';

const { tilesContainer }: any = useOfDryIceCleaningContent.useOfDryIceCleaning[0];

const DkicePage = () => {

  return (
    <Container>
      <DynamicContent 
        tilesContainer={tilesContainer}
      />
    </Container>
  )
}

export default DkicePage;
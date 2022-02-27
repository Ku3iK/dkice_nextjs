import Container from '@components/containers/Container/Container';
import Headings from '@components/Typography/Headings';
import { AlternateSectionInterface } from './AlternateSectionInterface';
import AlternatBlock from './AlternateBlock/AlternateBlock';
import { AlternatBlocksStyled } from './AlternateSection.styled';

const AlternateSection = ({ title, steps, classNames }: AlternateSectionInterface) => {
  return (
    <section className={`${classNames}`}>
      <Container withoutPadding={true}>
        <div>
          <div>{title && <Headings level={2}>{title}</Headings>}</div>
          <AlternatBlocksStyled>
            {!!steps?.length &&
              steps.map(({ stepTitle, stepDescription, stepImage }, stepKey) => (
                <AlternatBlock
                  key={stepKey}
                  stepTitle={stepTitle}
                  stepDescription={stepDescription}
                  stepImage={stepImage}
                />
              ))}
          </AlternatBlocksStyled>
        </div>
      </Container>
    </section>
  );
};

export default AlternateSection;

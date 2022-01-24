import TitleWithDescription from '@components/TitleWithDescription';
import contactPageData from 'src/assets/i18n/magmet/contactPage.json';
import formData from 'src/assets/i18n/contactForms.json';
import Form from '@components/Form';

const { contactPage } = contactPageData;
const { contactForms } = formData;

const MagmetContact = () => {
  return (
    <>
        <TitleWithDescription content={contactPage} />
        <Form 
          formName={'magmetContact'} 
          isNetlifyFrom 
          formContent={contactForms} 
          withoutContainer={true}
          buttonText={'Wyślij'}
        />
    </>
  )
}

export default MagmetContact;
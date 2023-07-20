import Button from '../Button/Button';
import Styles from './footer.module.css';

export interface FooterProps {
  position?: string;
  handleBack: () => void;
  handleNext: () => void;
}

const Footer = ({ position = '', handleBack, handleNext }: FooterProps) => {
  return (
    <footer className={Styles.footer}>
      {position === 'first' ? (
        <p />
      ) : (
        <Button onClick={handleBack} kind='text' variant='secondary'>
          Go Back
        </Button>
      )}

      {position === 'last' ? (
        <Button type='submit' onClick={handleNext}>
          Confirm
        </Button>
      ) : (
        <Button onClick={handleNext} variant='secondary'>
          Next Step
        </Button>
      )}
    </footer>
  );
};

export default Footer;

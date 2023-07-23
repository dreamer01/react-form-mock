import clsx from 'clsx';
import Button from '../Button/Button';
import Styles from './footer.module.css';

export interface FooterProps {
  className?: string;
  position?: string;
  handleBack?: () => void;
  handleNext: () => void;
  isSubmitting?: boolean;
}

const Footer = ({
  className = '',
  position = '',
  handleBack,
  handleNext,
  isSubmitting = false,
}: FooterProps) => {
  return (
    <footer className={clsx(Styles.footer, className)}>
      {position === 'first' ? (
        <p />
      ) : (
        <Button onClick={handleBack} kind='text' variant='secondary'>
          Go Back
        </Button>
      )}

      {position === 'last' ? (
        <Button isLoading={isSubmitting} onClick={handleNext}>
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

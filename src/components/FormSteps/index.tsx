import { FormData } from '../../App';

export type FormStepProps = {
  goto: React.Dispatch<React.SetStateAction<number>>;
  formData: FormData;
  setFormData: (data: FormData) => void;
};

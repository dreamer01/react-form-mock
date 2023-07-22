import { FormData } from '../App';

export const mockFormData = {
  name: 'Ajay',
  email: '',
  phone: '',
  plan: 'arcade',
  period: 'yearly',
  addOns: ['online'],
} as FormData;

export const mockGoto = vi.fn();
export const mockSetFormData = vi.fn();

export type PlansName = 'arcade' | 'advance' | 'pro';
export const PLANS_PRICE: { [k in PlansName]: number } = {
  arcade: 99,
  advance: 199,
  pro: 299,
};

export type AddonsName = 'online' | 'storage' | 'customization';
export const ADDONS_PRICE: {
  [k in AddonsName]: { label: string; subText: string; price: number };
} = {
  online: {
    label: 'Online Service',
    subText: 'Access to other users and their projects',
    price: 49,
  },
  storage: {
    label: 'Larger Storage',
    subText: 'Extra 1TB of the cloud save for backups',
    price: 49,
  },
  customization: {
    label: 'Customization',
    subText: 'Custom profile theme and app experience',
    price: 29,
  },
};

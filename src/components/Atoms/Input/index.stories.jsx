import Input from './index';

export default {
  title: 'Components/Atoms/Input',
  component: Input,
};

export const Default = {
  args: {
    defaultValue: '',
    onEditComplete: () => {
      console.log('Editing complete');
    },
  },
};

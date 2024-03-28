import { Toaster as DefaultToaster } from 'react-hot-toast';

import { ToastCSS } from './Toast.styled';

export const Toaster = () => (
  <>
    <DefaultToaster />
    <ToastCSS />
  </>
);

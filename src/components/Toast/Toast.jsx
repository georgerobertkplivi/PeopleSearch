import defaultToast from 'react-hot-toast';

import { ButtonClose, ToastTitle } from './Toast.styled';
import { ReactComponent as IconCheckCircle } from 'theme/icons/check-circle.svg';

const toastContent = (toast, content) => {
  let body = typeof content === 'function' ? content() : content;
  if (content?.title || content?.description) {
    body = (
      <>
        {content.title && <ToastTitle>{content.title}</ToastTitle>}
        {content.description}
      </>
    );
  }

  return (
    <>
      {body}
      <ButtonClose aria-label="Close message" onClick={() => defaultToast.dismiss(toast.id)} />
    </>
  );
};

const position = 'bottom-left';
const duration = 6000;
const className = 'toast';
const SIZE = {
  width: 18,
  height: 18,
};

const CONTENT = {
  SUCCESS: {
    icon: <IconCheckCircle {...SIZE} aria-label="Success:" />,
    className: `${className} ${className}-success`,
  },
};

export const toast = {
  dismiss: defaultToast.dismiss,

  remove: defaultToast.remove,

  success: (content, options = {}) =>
    defaultToast((t) => toastContent(t, content), {
      duration,
      position,
      ...CONTENT.SUCCESS,
      ...options,
    }),

  error: (content, options = {}) =>
    defaultToast((t) => toastContent(t, content), {
      duration,
      position,
      ...CONTENT.ERROR,
      ...options,
    }),

  promise: (promiseFn, { loading, success, error, ...options }) =>
    defaultToast.promise(
      promiseFn,
      {
        loading: (t) => toastContent(t, loading),
        success: () => (t) => toastContent(t, success),
        error: (e) => (t) => {
          if (typeof error === 'function') {
            return toastContent(t, error(e));
          }

          return toastContent(t, error);
        },
      },
      {
        position,
        className,
        success: CONTENT.SUCCESS,
        loading: CONTENT.LOADING,
        error: CONTENT.ERROR,
        ...options,
      }
    ),
};

export const {
  success: successToast,
  error: errorToast,
  promise: promiseToast,
  dismiss,
  remove,
} = toast;

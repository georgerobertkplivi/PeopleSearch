import PropTypes from 'prop-types';

import Button from 'components/Button';
import {
  ModalOverlay,
  ModalClose,
  ModalArea,
  ModalContent,
  Header,
  HeaderTitle,
  Body,
  Footer,
} from './Modal.styled';

export const Modal = ({
  children,
  isOpen,
  confirmLoading,
  headerTitle,
  onSave,
  onCancel,
  onDismiss,
  shouldSubmit,
  formName,
  error,
}) => {
  /**
   * Define the button props based on the component props.
   * If the modal body has a form, we need to provide a way to be able to submit. If not, we just
   * create a normal button with a click event.
   */
  function getButtonProps() {
    const buttonProps = {};

    if (shouldSubmit) {
      buttonProps.type = 'submit';
      buttonProps.form = formName;
    } else {
      buttonProps.onClick = onSave;
      buttonProps.type = 'button';
    }

    return buttonProps;
  }

  const modalAriaTitle = headerTitle
    ? { 'aria-labelledby': '#modalTitle' }
    : { 'aria-label': 'Dialog area' };

  return (
    isOpen && (
      <ModalOverlay isOpen={isOpen} onDismiss={onDismiss ?? onCancel}>
        <ModalArea>
          <ModalContent {...modalAriaTitle}>
            {
              <Header>
                <HeaderTitle as="h2">{headerTitle}</HeaderTitle>
                <ModalClose onClick={onDismiss} id="modal-close-button" />
              </Header>
            }
            <Body>{children}</Body>
            <Footer>
              <div>
                <Button
                  isLoading={confirmLoading}
                  disabled={confirmLoading}
                  size="sm"
                  data-testid="modal-save-button"
                  {...getButtonProps()}
                >
                  Save
                </Button>
                <Button
                  data-testid="modal-close-button"
                  type="button"
                  size="sm"
                  variant="secondary"
                  onClick={onCancel}
                >
                  Close
                </Button>
              </div>
            </Footer>
          </ModalContent>
        </ModalArea>
      </ModalOverlay>
    )
  );
};

Modal.defaultProps = {
  isOpen: false,
  shouldSubmit: true,
  confirmLoading: false,
  formName: '',
  onSave: () => {},
  onDismiss: null,
  headerTitle: null,
};

export const modalPropTypes = {
  /** Controls modal visibility (if false it is not rendered) */
  isOpen: PropTypes.bool,
  /** When true, the submit button turns into type="submit" */
  shouldSubmit: PropTypes.bool,
  /** Passed to submit button if shouldSubmit is tru */
  formName: PropTypes.string,
  /** When true, the submit button displays as loading */
  confirmLoading: PropTypes.bool,
  headerTitle: PropTypes.node,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  onDismiss: PropTypes.func,
};

Modal.propTypes = {
  ...modalPropTypes,
  children: PropTypes.node.isRequired,
};

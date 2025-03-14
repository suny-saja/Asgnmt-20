import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../Buttons/Button';
import style from './Dialog.module.scss';

type DialogProps = {
  disabled?: boolean;
  imgSrc?: string;
  variant?:
    | 'success'
    | 'info'
    | 'danger'
    | 'disabledInfo'
    | 'disabledDanger'
    | null;
  isOpen?: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children?: React.ReactNode;
};

export const Dialog: React.FC<DialogProps> = ({
  disabled = false,
  variant = 'success',
  isOpen = true,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const imgSrc = variant
    ? {
        success: 'src/assets/successLogo.svg',
        info: 'src/assets/infoLogo.svg',
        danger: 'src/assets/dangerLogo.svg',
        disabledInfo: 'src/assets/infoLogo.svg',
        disabledDanger: 'src/assets/dangerLogo.svg',
      }[variant]
    : '';

  const title = variant
    ? {
        success: 'Successfully loaded',
        info: 'New information',
        danger: 'Are you sure you want to delete this user?',
        disabledInfo: 'New information',
        disabledDanger: 'Are you sure you want to delete this user?',
      }[variant]
    : '';

  const description = variant
    ? {
        success: 'lorem ipsum dolor sit amet',
        info: 'lorem ipsum dolor sit amet',
        danger: 'This action is irreversible',
        disabledInfo: 'lorem ipsum dolor sit amet',
        disabledDanger: 'This action is irreversible',
      }[variant]
    : '';

  const buttons = variant
    ? {
        success: [{ label: 'OK', type: 'secondary', action: onClose }],
        info: [
          { label: 'Cancel', type: 'secondary', action: onClose },
          { label: 'Create', type: 'primary', action: onConfirm },
        ],
        danger: [
          { label: 'Cancel', type: 'secondary', action: onClose },
          { label: 'Delete', type: 'danger', action: onConfirm },
        ],
        disabledInfo: [
          { label: 'Cancel', type: 'secondary', action: false },
          { label: 'Create', type: 'primary', action: false },
        ],
        disabledDanger: [
          { label: 'Cancel', type: 'secondary', action: false },
          { label: 'Delete', type: 'danger', action: false },
        ],
      }[variant]
    : '';

  return ReactDOM.createPortal(
    <>
      <div className={style.dialogOverlay} onClick={onClose}>
        <div className={style.dialogBox}>
          <div className={style.container}>
            <div className={style.wrapper}>
              <img className={style.logo} src={imgSrc} alt='logo' />
              <div className={style.content}>
                <h2 className={style.title}>{title}</h2>
                <p className={style.description}>{description}</p>
              </div>
            </div>
          </div>
          <div className={style.footer}>
            <div className={style.buttons}>
              {Array.isArray(buttons) &&
                buttons.map((button, index) => (
                  <Button
                    disabled={disabled}
                    key={index}
                    label={button.label}
                    type={
                      button.type as
                        | 'primary'
                        | 'secondary'
                        | 'danger'
                        | 'outlined'
                    }
                    onClick={
                      typeof button.action === 'function'
                        ? button.action
                        : undefined
                    }
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  );
};

export default Dialog;

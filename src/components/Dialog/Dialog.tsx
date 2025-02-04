import React from 'react';
import Button from '../Buttons/Button';
import styles from './Dialog.module.scss';

type DialogProps = {
  imgSrc?: string;
  type: 'info' | 'danger' | 'success';
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
};

const DialogBox: React.FC<DialogProps> = ({
  type,
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  const title = {
    info: 'New Information',
    danger: 'Are you sure you want to delete this user?',
    success: 'Successfully loaded',
  }[type];

  const imgSrc = {
    info: './../../infoLogo.svg',
    danger: './../../dangerLogo.svg',
    success: './../../successLogo.svg',
  }[type];

  const description = {
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    danger: 'This action is irreversible',
    success: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }[type];

  const buttons = {
    success: [{ label: 'OK', variant: 'secondary', action: onClose }],
    info: [
      { label: 'Cancel', variant: 'secondary', action: onClose },
      { label: 'Create', variant: 'primary', action: onConfirm },
    ],
    danger: [
      { label: 'Cancel', variant: 'secondary', action: onClose },
      { label: 'Delete', variant: 'danger', action: onConfirm },
    ],
  }[type];

  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog}>
        <img src={imgSrc} alt='logo' className={styles.img} />
        <div className={styles.dialogContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.overlay}>
        <div className={styles.dialog__buttons}>
          {buttons.map((btn, index) => (
            <Button
              key={index}
              label={btn.label}
              variant={btn.variant as 'secondary' | 'primary' | 'danger'}
              onClick={btn.action || (() => {})}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DialogBox;

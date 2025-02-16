import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  disabled?: boolean;
  label?: string;
  type?: 'primary' | 'secondary' | 'danger' | 'outlined';
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  label,
  type = 'primary',
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]} ${
        disabled ? styles.disabled : ''
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

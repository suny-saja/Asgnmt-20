import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  label: string;
  variant?: 'secondary' | 'primary' | 'danger';
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'secondary',
  onClick,
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[`btn-${variant}`]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

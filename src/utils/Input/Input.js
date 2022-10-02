import React from 'react';
import styles from './Input.module.css';

// props = {}
const Input = ({ id, label, type, placeholder, className, ...otherProps }) => {
  return (
    <div className={styles.inputContainer}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={`${styles.input}  ${className}`}
        {...otherProps}
      />
    </div>
  );
};

export default Input;

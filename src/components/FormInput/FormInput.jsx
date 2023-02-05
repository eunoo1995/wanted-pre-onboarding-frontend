import styles from './FormInput.module.css';

export const FormInput = ({
  type = 'text',
  name,
  label,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div className={styles.conatiner}>
      <input
        type={type}
        data-testid={name}
        name={name}
        id={name}
        className={styles.input}
        onChange={onChange}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
      />
      <label
        className={styles.label + ' ' + (value && styles.fill)}
        htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

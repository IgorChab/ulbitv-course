import React, { type InputHTMLAttributes, useState, forwardRef, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';
import { Typography } from 'shared/ui/Typography/Typography';

import styles from './Input.module.scss';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends InputHTMLProps {
  className?: string
  label?: string
  onChange?: (value: string) => void
  errorText?: string
}

const MONOSPACE_FONT_CHAR_RATIO = 0.6;

export const Input = memo(forwardRef<HTMLInputElement, InputProps>(({
  className,
  label,
  type = 'text',
  onChange,
  autoFocus,
  errorText,
  onBlur,
  ...otherProps
}, ref) => {
  const [caretPosition, setCaretPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(!!autoFocus);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur && onBlur(e);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSelect = (e: any) => {
    const caretOffset = e?.target?.selectionStart || 0;
    const caretPositionPixels = caretOffset * MONOSPACE_FONT_CHAR_RATIO;

    setCaretPosition(caretPositionPixels);
  };

  return (
    <div className={classNames(styles.container, {}, [className])}>
      <OptionalRender condition={!!label}>
        <p className={styles.label}>
          {`${label}>`}
        </p>
      </OptionalRender>
      <div className={styles.inputWrapper}>
        <div className={styles.caretWrapper}>
          <input
            ref={ref}
            className={styles.input}
            type={type}
            onChange={onChangeHandler}
            onFocus={onFocus}
            onBlur={onBlurInput}
            onSelect={onSelect}
            autoFocus={autoFocus}
            autoComplete="off"
            {...otherProps}
          />
          <OptionalRender condition={isFocused}>
            <span className={styles.caret} style={{ left: `${caretPosition}rem` }} />
          </OptionalRender>
        </div>
        <OptionalRender condition={!!errorText}>
          <Typography variant="small" className={styles.error}>
            {errorText}
          </Typography>
        </OptionalRender>
      </div>
    </div>
  );
}));

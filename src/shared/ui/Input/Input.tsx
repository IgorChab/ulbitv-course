import React, { type FC, type InputHTMLAttributes, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { OptionalRender } from 'shared/lib/components/OptionalRender/OptionalRender';

import styles from './Input.module.scss';

type InputHTMLProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends InputHTMLProps {
  className?: string
  label?: string
  onChange?: (value: string) => void
}

const MONOSPACE_FONT_CHAR_RATIO = 0.6;

const InputBase: FC<InputProps> = ({
  className,
  label,
  type = 'text',
  onChange,
  autoFocus,
  ...otherProps
}) => {
  const [caretPosition, setCaretPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(!!autoFocus);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
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
      <div className={styles.caretWrapper}>
        <input
          ref={inputRef}
          className={styles.input}
          type={type}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          autoFocus={autoFocus}
          {...otherProps}
        />
        <OptionalRender condition={isFocused}>
          <span className={styles.caret} style={{ left: `${caretPosition}rem` }} />
        </OptionalRender>
      </div>
    </div>
  );
};

export const Input = React.memo(InputBase);

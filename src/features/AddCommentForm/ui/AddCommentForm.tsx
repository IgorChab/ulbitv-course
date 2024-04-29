import React, { type FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import styles from './AddCommentForm.module.scss';

interface AddCommentFormProps {
  className?: string
  onSendComment: (text: string) => void
}

export const AddCommentForm: FC<AddCommentFormProps> = ({ className, onSendComment }) => {
  const { t } = useTranslation('articleDetails');
  const [text, setText] = useState('');

  const onChangeText = useCallback((value: string) => {
    setText(value);
  }, []);

  const handleSendComment = useCallback(() => {
    onSendComment(text);
    setText('');
  }, [text]);

  return (
    <div className={classNames(styles.addCommentForm, {}, [className])}>
      <Input
        label={t('enterCommentText')}
        value={text}
        onChange={onChangeText}
      />
      <Button
        variant="outline"
        disabled={!text}
        onClick={handleSendComment}
      >
        {t('send')}
      </Button>
    </div>
  );
};

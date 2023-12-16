import React, { Suspense, useEffect } from 'react';
import { type Decorator } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

export const withI18next: Decorator = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    void i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

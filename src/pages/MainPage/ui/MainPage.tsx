import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      {t('mainPage')}
      <Counter />
    </div>
  );
};

export default MainPage;

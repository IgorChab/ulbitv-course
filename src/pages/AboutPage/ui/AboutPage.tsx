import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '20px' }}>
      {t('aboutPage')}
    </div>
  );
};

export default AboutPage;

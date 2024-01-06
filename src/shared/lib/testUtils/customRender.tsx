import React, { type ReactElement } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import i18n from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from 'shared/types/DeepPartial';

interface CustomRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
};

const customRender = (
  ui: ReactElement,
  options: CustomRenderOptions = {}
) => {
  const {
    route = '/',
    initialState
  } = options;

  render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider>
          <I18nextProvider i18n={i18n}>
            {ui}
          </I18nextProvider>
        </ThemeProvider>
      </MemoryRouter>
    </StoreProvider>
  );
};

export default customRender;

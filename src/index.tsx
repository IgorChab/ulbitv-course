import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { ErrorBoundary } from 'react-error-boundary';
import { PageError } from 'widgets/PageError';

import App from './app/App';

import 'shared/config/i18n/i18n';

const domNode = document.getElementById('root') as HTMLElement;

const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ErrorBoundary fallback={<PageError />}>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>
);

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';

import 'shared/config/i18n/i18n';

import App from './app/App';

const domNode = document.getElementById('root') as HTMLElement;

const root = createRoot(domNode);

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

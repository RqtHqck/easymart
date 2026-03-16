import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/app/styles/index.scss';

import App from '@/app/App.tsx';

import { ErrorBoundary, StoreProvider, ThemeProvider } from './app/providers';
import '@/shared/config';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </StoreProvider>
  </StrictMode>,
);

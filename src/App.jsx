import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './utils/themeContext';
import ErrorBoundary from './components/shared/ErrorBoundary';
import Layout from './components/layout/Layout';
import PerformanceMonitor from './components/shared/PerformanceMonitor';
import Routes from './routes';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <BrowserRouter>
          <ThemeProvider>
            <Layout>
              <Routes />
              {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </HelmetProvider>
  );
}
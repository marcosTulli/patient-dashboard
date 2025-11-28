'use client';

import { GlobalErrorBoundary } from './GlobalErrorBoundary';

const QueryErrorBoundary = ({ children }: { children: React.ReactNode }) => (
  <GlobalErrorBoundary
    fallback={
      <div className="p-4 text-red-500">
        <h2>Something went wrong!</h2>
        <button
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded"
        >
          Reload Page
        </button>
      </div>
    }
  >
    {children}
  </GlobalErrorBoundary>
);

export default function ErrorProvider({ children }: { children: React.ReactNode }) {
  return (
    <GlobalErrorBoundary
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Critical Error</h1>
            <p className="mb-6">Please refresh the page or try again later</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Reload Application
            </button>
          </div>
        </div>
      }
    >
      <QueryErrorBoundary>{children}</QueryErrorBoundary>
    </GlobalErrorBoundary>
  );
}

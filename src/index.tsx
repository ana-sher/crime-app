import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import MainPage from './components/main-page';

const App: React.FC = () => {
  return (
    <MainPage />
  );
};

const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<App />)
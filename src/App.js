import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const LoginPage = React.lazy(() => import('./pages/login/Login'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

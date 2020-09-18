import React from 'react';
import './App.css';
import ThemeProvider from './context/themeContext'
import CheckTheme from './Component/CheckTheme'
import ToggleTheme from './Component/ToggleTheme'
import CheckAuth from './Component/CheckAuth';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthContextProvider>
          <CheckTheme />
          <ToggleTheme />
          <CheckAuth />
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

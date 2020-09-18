import React from 'react';
import './App.css';
import ThemeProvider from './context/themeContext'
import CheckTheme from './Component/CheckTheme'
import ToggleTheme from './Component/ToggleTheme'
import CheckAuth from './Component/CheckAuth';
import CheckAuth_Hooks from './Component/CheckAuth_Hooks';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthContextProvider>
          <CheckTheme />
          <ToggleTheme />
          <CheckAuth />
          <CheckAuth_Hooks />
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

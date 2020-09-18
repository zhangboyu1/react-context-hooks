import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/themeContext';

const CheckAuth_Hooks = () => {
    // 问题就来了，如果想在这个component中再accessThe
    const { user, toggleAuth } = useContext(AuthContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark

    return (
        <React.Fragment>
            <h1>React hooks:</h1>
            <div style={{ background: theme.ui, color: theme.syntax }}>
                <h1 >userid:{user.id}</h1>
                <h1>activation:{user.activation}</h1>
            </div>

            <button onClick={toggleAuth}>toggleAuth</button>
        </React.Fragment>
    );
}

export default CheckAuth_Hooks;
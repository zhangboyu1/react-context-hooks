import React from 'react';
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/themeContext';

class CheckAuth extends React.Component {
    render() {
        // 问题就来了，如果想在这个component中再accessThe
        return (
            <ThemeContext.Consumer>
                {(themeContext) => (
                    <AuthContext.Consumer>
                        {(authContext) => {
                            const { user, toggleAuth } = authContext
                            const { isLightTheme, light, dark } = themeContext
                            const theme = isLightTheme ? light : dark
                            return (
                                <React.Fragment>
                                    <div style={{ background: theme.ui, color: theme.syntax }}>
                                        <h1 >userid:{user.id}</h1>
                                        <h1>activation:{user.activation}</h1>
                                    </div>

                                    <button onClick={toggleAuth}>toggleAuth</button>
                                </React.Fragment>
                            )
                        }}
                    </AuthContext.Consumer>
                )}
            </ThemeContext.Consumer>

        );
    }
}

export default CheckAuth;
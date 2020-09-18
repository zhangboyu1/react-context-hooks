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
                        {(authcontext) => {
                            const { user, toggleAuth } = authcontext
                            console.log(user)
                            return (
                                <React.Fragment>
                                    <h1>userid:{user.id}</h1>
                                    <h1>activation:{user.activation}</h1>
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
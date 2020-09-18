import React from 'react';
import { ThemeContext } from '../context/themeContext';

class ToggleTheme extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { toggleTheme } = context

                    return (
                        <React.Fragment>
                            <button onClick={toggleTheme}>toggleTheme</button>
                            {/* <h1>asdasdasdas</h1> */}
                        </React.Fragment>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default ToggleTheme;
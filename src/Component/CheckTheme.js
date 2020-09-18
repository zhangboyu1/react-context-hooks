import React from 'react';
import { ThemeContext } from '../context/themeContext';

class CheckTheme extends React.Component {

    // If it's a class Component 
    // IMPORT the themeContext.......
    // This is one of the ways to use access the context...
    static contextType = ThemeContext

    render() {
        // how to access that theme as a contextConsumer...
        console.log(this.context)
        // const { isLightTheme, light, dark } = this.context
        // const theme = isLightTheme ? light : dark
        return (
            <ThemeContext.Consumer>
                {(context) => {
                    const { isLightTheme, light, dark } = context
                    const theme = isLightTheme ? light : dark

                    return (
                        <React.Fragment>
                            <div style={{ background: theme.ui, color: theme.syntax }}>
                                <h1>{'hello world'}</h1>
                            </div>
                        </React.Fragment>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}

export default CheckTheme;
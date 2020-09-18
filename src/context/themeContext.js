import React, { createContext, Component } from 'react';
// This is used to create a context objects.
export const ThemeContext = createContext()

class ThemeProvider extends Component {
    state = {
        isLightTheme: true,
        light: {
            syntax: '#555',
            ui: '#ddd',
            bj: '#eee'
        },

        dark: {
            syntax: '#ddd',
            ui: '#333',
            bj: '#555'
        }
    }

    // 问题就来了现在如何改变这个state？
    // context 也可以pass setState function: 
    toogleTheme = () => {
        this.setState({
            isLightTheme: !this.state.isLightTheme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toogleTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
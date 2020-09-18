import React, { createContext } from 'react';

export const AuthContext = createContext()
class AuthContextProvider extends React.Component {
    state = {
        user: {
            id: '232423432',
            name: 'fsf',
            pasw: 'sfsd',
            activation: true ? 1 : 2
        }
    }

    toggleAuth = () => {
        const { user } = this.state
        user.activation = !this.state.user.activation
        console.log(user)
        this.setState({
            ...user
        })
    }

    render() {
        return (
            <AuthContext.Provider value={{ ...this.state, toggleAuth: this.toggleAuth }}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;
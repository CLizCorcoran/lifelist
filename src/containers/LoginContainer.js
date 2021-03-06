import { connect } from "react-redux";
import Login from "../components/Login.jsx";
import loginUser from "../actions/loginUser.js";
import logoutUser from "../actions/logoutUser.js";
import clearEvents from "../actions/clearEvents.js";

const mapStateToProps = state => {
    return {
        username: state.userData,
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username) => {
            dispatch(loginUser(username));
        },
        onLogout: () => {
            dispatch(logoutUser());
            dispatch(clearEvents());
        }
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
import React, { useState } from "react";
import { axiosWithAuth } from "./../utils/axiosWithAuth";
import { connect } from "react-redux";

const Login = (props) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post("/", credentials)
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                if ("token" ? setLoggedIn(true) : null);
                return props.history.push("")
            })
            .catch(err => console.log(err))
    };

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    };


    return (
        <div>
            <form onSubmit={login}>
                <input
                    className="inputs"
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    className="inputs"
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log in</button>
            </form>
        </div>
    );
};

export default connect(state => state, null)(Login);
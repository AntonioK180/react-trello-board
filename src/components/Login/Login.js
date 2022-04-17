import React, {useEffect, useState} from 'react'
import "./Login.css"
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");

    useEffect(() => {
        async function DidMount() {
            if (localStorage.getItem('logged_user')) {
                navigate('/home');
            }
        }

        DidMount();

    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        // get the users massive
        const users = JSON.parse(localStorage.getItem("users"))

        if (users !== null) {
            // if user don't exist - add the new user to the existing users
            if (!users.includes(username)) {
                users.push(username);
                localStorage.setItem("users", JSON.stringify(users));
            }
        } else {
            // if there isn't users array - create the array of users
            const users_json = [username];
            localStorage.setItem("users", JSON.stringify(users_json));
        }

        // set the logged-in user
        localStorage.setItem("logged_user", username);

        navigate("/home");
    }

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-container">
                    <input type="text" name="uname"
                           value={username}
                           onChange={(event) => {
                               setUsername(event.target.value)
                           }}
                           placeholder="Enter your username"/>
                </div>
                <div className="button-container">
                    <input type="submit" value="Login"/>
                </div>
            </form>
        </div>
    )
}

export default Login
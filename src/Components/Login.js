import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/generateAuth', {
    username, password
})
}

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username"
                 value={username}
                 onChange={(e) => setUsername(e.target.value) }
                  required />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                 placeholder="Password"
                 value={password}
                 onChange={(e) => setPassword(e.target.value) }
                  required />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Submit</Form.Label>
                <Form.Control type="submit"  value="Login" />
            </Form.Group>
        </Form>

        // <form onSubmit={handleSubmit} >
        //     <input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        //     <input placeholder="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>

        //     <input type="submit" name="" value="Login" />
        // </form>
    );
};

export default Login;
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Register = () => {
    const [agree, setAgree] = useState(false);

    const [ createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {useSendEmailVerification:true});

    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }


    const handleRegister =  (event) => {
        event.preventDefault();
        // console.log(event.target.name.value);
        // console.log(event.target.email.value);
        // console.log(event.target.password.value);
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;

         createUserWithEmailAndPassword(email, password);
        // await updateProfile({displayName: name});
        // console.log('Profile Updated');
        console.log('Created');
        navigate('/home');

    }
    return (
        <div className="container w-50 mx-auto mt-5">
        <h2 className="text-info text-center mb-3">Please Register Here </h2>
        <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address:</Form.Label> */}
            <Form.Control  type="text" name="name" placeholder="Enter Your Name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            {/* <Form.Label>Email address:</Form.Label> */}
            <Form.Control  type="email" name="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            {/* <Form.Label>Password:</Form.Label> */}
            <Form.Control   type="password" name="password" placeholder="Password" required />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check className={ agree ? 'text-info' : 'text-danger' } onClick={()=>setAgree(!agree)} name="terms" type="checkbox" label="Accept Our Terms and Conditions" />
            </Form.Group>
            <Button disabled={!agree} className='btn btn-primary w-50 mx-auto d-block mb-3 text-white fw-bold mt-3' variant="info" type="submit">
                Register
            </Button>
    
        </Form>
        {/* <p>Password Forgotten? <button  className="btn btn-link text-primary text-decoration-none ">Reset Password</button></p> */}
        <p>Already Registered?.. <Link to="/login"  className="text-warning text-decoration-none">Login</Link></p>
        {/* {errorElement} */}
        {/* <SocialLogin></SocialLogin>
        <ToastContainer></ToastContainer> */}
    </div>
    );
};

export default Register;

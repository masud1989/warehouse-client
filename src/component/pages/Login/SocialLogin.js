import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from './../../../images/social/google.png';
import github from './../../../images/social/github.png';

const SocialLogin = () => {
    const [SignInWithGoogle, googleUser, googleLoading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError ]= useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement; 

    if(googleLoading || githubLoading){
        <p>Loading........................</p>
    }

    if (error ) {
        errorElement=<p className='text-danger'>Error: {error.message || githubError.message}</p>
  }

    if(googleUser || githubUser) {
        navigate('/')
    }


    return (
        <div>
            <div className="d-flex align-items-center"> 
                <div style={{height: '1px'}} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height: '1px'}} className='bg-info w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={()=> SignInWithGoogle() } className='btn btn-info w-50 d-block mx-auto my-2 text-white'>
                    <img style={{width: '30px'}} src={google} alt=""/>
                    Google Sign In
                </button>
                
                <button onClick={()=>signInWithGithub()} className='btn btn-info w-50 d-block mx-auto my-1 text-white'>
                    <img style={{width: '30px', marginRight: '10px'}} src={github} alt=""/>
                    Github Sign In
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
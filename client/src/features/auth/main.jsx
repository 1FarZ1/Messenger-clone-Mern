/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import MessengerLogo from '../../common/messenger_logo.jsx'
import './auth.css';


const AuthPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [haveAccount, sethaveAccount] = useState(false);

   
    const signIn = (email,password) => {
        // add the class to the loading 
        
        console.log("logging in as  " + email + " with password " + password)
    }
    const signUp = (username,email,password) => {
        console.log("registering in as  username : "+ username + "with email :" + email + " with password " + password)

    }
    const changeMode = ()=>{
        email && setEmail('');
        password && setPassword('');
        username && setUsername('');
        sethaveAccount(!haveAccount);
    }

    return (
        <div>
            <div className='container'>
               <MessengerLogo />
               <>

               {
                    haveAccount ? 
                    <>
                            <h1>
                                Sign In
                            </h1>
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value ={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={() => signIn(email,password)}>Sign In</button>
                    </>
                    :
                    <>
                            <h1>
                                Sign Up
                            </h1>
                            <input type="text" placeholder="Username"  value = {username} onChange={(e) => setUsername(e.target.value)} />
                            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="password" placeholder="Password" value ={password} onChange={(e) => setPassword(e.target.value)} />
                            <button onClick={() => signUp(username,email,password)}>Sign Up</button>
                            </>
                }

               </>
               
                <a onClick={changeMode}>{haveAccount ? 'Need to create an account?' : 'Already have an account?'}</a>
                make a invisible loading 

                <div className={isLoading ? "loading_activate":"loading" }>
                    <div className='loading_circle'></div>
                </div>


                {/* the credits part */}
                <div className='credits'>
                    <div className="solo">
                        <a href="">Privacy Policty</a>
                        <a href="">Terms of Service</a>
                        <a href="">© Meta 2023</a>
                    </div>
                </div>
            </div>
            <div id="me"> 
                   <p>  Created by <a href='' > Fares Bekkouce</a></p>
            </div>
        </div>
    );
            }
            


export default AuthPage;
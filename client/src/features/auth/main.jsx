/* eslint-disable no-unused-vars */

import React, { useState } from 'react'
import SignIn from './componants/sign_in.jsx'
import SignUp from './componants/sign_up.jsx'
import MessengerLogo from '../../common/messenger_logo.jsx'
import '../../css/auth.css';


const AuthPage = () => {
    const [haveAccount, sethaveAccount] = useState(false);
    const signIn = () => {
    }
    const signUp = () => {
    }

    return (
        <div>
            <div className='container'>
            <MessengerLogo />

                {haveAccount ? <SignIn /> : <SignUp />}

                <button onClick={() => { haveAccount ? signIn() : signUp() }}>Submit</button>
                <a onClick={() => sethaveAccount(!haveAccount)}>{haveAccount ? 'Need to create an account?' : 'Already have an account?'}</a>
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


    )
}


export default AuthPage;
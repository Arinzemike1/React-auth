import React from 'react'

const Login = (props) => {
    const {
         email, 
         setEmail, 
         password, 
         setPassword, 
         handleLogin, 
         handleSignup, 
         hasAccount, 
         setHasAccount, 
         emailError, 
         passwordError } = props;

         const dontHaveAccount = () => {
             setHasAccount(!hasAccount);
         }
         const handleEmail = (e) => {
             setEmail(e.target.value);
         }
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Email</label>
                <input type="text" placeholder="email" autoFocus value={email} onChange={handleEmail} required />
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {
                        hasAccount ? (
                            <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account? <span onClick={dontHaveAccount}>Sign Up</span></p>
                            </>
                        ) : (
                            <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Have an account? <span onClick={dontHaveAccount}>Sign In</span></p>
                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Login;

import React from 'react'

const LoginMessage = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>LOGOUT</button>
            </nav>
        </section>
    )
}

export default LoginMessage

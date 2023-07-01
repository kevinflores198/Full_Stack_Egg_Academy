import React from 'react'

const UserForm = () => {
    return (

        <main className="form">

            <form className='form-interno'>
                <a className='imagen'><img src="morty.png" className="App-logo" width="30" ></img></a>
                <h1 className="h32 mb-3 fw-normal">Sign in</h1>

                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Repeat password</label>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <div className='boton'>
                    <button className="btn btn-primary w-100 py-2" type="submit">Sign up</button>
                </div>
            </form>

        </main>
    )
}

export default UserForm

import React from 'react'

const UserForm = () => {
    return (

        <main className="form">

            <form className='form-interno'>
                <a className='imagen'><img src="pac-man.png" className="App-logo" width="30" ></img></a>
                <h1 class="h32 mb-3 fw-normal">Registrarse</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button class="btn btn-primary w-100 py-2" type="submit">Registrarse</button>
            </form>

        </main>
    )
}

export default UserForm

import React, { useState } from 'react'
import { useUserForm } from './hooks/Custom.hooks'

const UserForm = () => {

  const { form, setForm, handleChanges } = useUserForm();
  const { areEquals, setAreEquals } = useState();
  const { passwordConfirmation, setPasswordConfirmation } = useState();
  const handlePasswordConfirmation = () => {

  }
  const handleSubmit = (e) => {

    e.preventDefault() //nos proteje de que no refresque la pagina
    console.log(form);

  }

  return (
    <div className='formulario'>
      <form className='form'>

        <h2>Registro</h2>

        <div class="mb-3">
          <input
            type="email"
            id="disabledTextInput"
            class="form-control"
            placeholder="Email"
            name='email'
            onChange={handleChanges}
          />
        </div>

        <div class="mb-3">
          <input
            type="password"
            id="disabledTextInput"
            class="form-control"
            placeholder="contrasña"
            name='password'
            onChange={handleChanges}
          />
        </div>

        <div class="mb-3">
          <input
            type="text"
            id="disabledTextInput"
            class="form-control"
            placeholder="Repetir contraseña"
            onChange={handlePasswordConfirmation}
          />
        </div>

        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck"
            />
            <label class="form-check-label" for="disabledFieldsetCheck">
              Recodrarme
            </label>
          </div>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          onClick={handleSubmit}
        >
          Registrarme
        </button>
      </form>
    </div>
  )
}

export default UserForm

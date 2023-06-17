import React from 'react'
import { useUserForm } from './hooks/Custom.hooks'

const UserForm = () => {

  const { form, setForm, handleChanges } = useUserForm()

  return (
    <form className='form'>
      <fieldset disabled>
        <legend>Humano registrate</legend>
        <div class="mb-3">
          <input type="text" id="disabledTextInput" class="form-control" placeholder="Email" />
        </div>
        <div class="mb-3">
          <select id="disabledSelect" class="form-select">
            <option>Contraseña</option>
          </select>
        </div>
        <div class="mb-3">
          <select id="disabledSelect" class="form-select">
            <option>Repetir contraseña</option>
          </select>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
            <label class="form-check-label" for="disabledFieldsetCheck">
              Recodrarme
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Ejecutar</button>
      </fieldset>
    </form>
  )
}

export default UserForm

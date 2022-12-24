import React from 'react'
import { NavLink } from 'react-router-dom'

export const ValidationSubmitModal = () => {
  return (
    <div className="modal__container">
        <div>
            <h2>Inscription validée !</h2>
            <NavLink to="/private/private-home">Aller sur votre page</NavLink>
        </div>
    </div>
  )
}

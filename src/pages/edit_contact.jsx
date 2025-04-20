// Import necessary components from react-router-dom and other parts of the application.
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  
import storeService from "../Stores/flux";

export const EditContact = () => {
  
  const params = useParams()
  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate()
  const [contacto, setContacto] = useState(store.agenda.find(el=> el.id == params.id))


  const handleChange = (e) => {
    setContacto({ ...contacto, [e.target.name]: e.target.value })

  }

  const handleSubmit = async (e) => {

    try {
      e.preventDefault()
      const resp = await storeService.editContact(contacto, params.id)
    } catch (error) {
      console.log(error)
    }


  }

  const handleReset = () => {
    setContacto(store.agenda.find(el=> el.id == params.id))
  }

  return (
    <div className="container">
      <h2 className="text-center">Edit Your Dragon!</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="name">Your Dragon Name</label>
            <input type="text" placeholder="Name" name='name' value={contacto.name} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" name='email' value={contacto.email} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" placeholder="Phone" name='phone' value={contacto.phone} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="address">Adress</label>
            <input type="text" placeholder="Address" name='address' value={contacto.address} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="botonSubmit row p-3">
          <button
            className="btn btn-secondary col-10"
            type="submit">Send DRAGON!!</button>
            <button
            className="btn btn-warning col-2"
            type="submit" onClick={handleReset}>Reset Dragon!</button>

        </div>
      </form>

      <Link to="/">
        Or get back to contacts
      </Link>
    </div>
  );
};

// Import necessary components from react-router-dom and other parts of the application.
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import storeService from "../Stores/flux";

export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const [contacto, setContacto] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })


  const handleChange = (e) => {
    setContacto({ ...contacto, [e.target.id]: e.target.value })

  }

  const handleSubmit = async (e) => {

    try {
      e.preventDefault()
      const resp = await storeService.addContact(contacto)
      setContacto({
        name: "",
        email: "",
        phone: "",
        address: ""
      });
    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div className="container">
      <h2 className="text-center">Add Contact</h2>
      <form onSubmit={handleSubmit} >
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="name">Your Dragon Name</label>
            <input type="text" placeholder="Name" id='name' value={contacto.name} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id='email' value={contacto.email} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" placeholder="Phone" id='phone' value={contacto.phone} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group p-2">
            <label htmlFor="address">Adress</label>
            <input type="text" placeholder="Address" id='address' value={contacto.address} className="form-control" onChange={handleChange} />
          </div>
        </div>
        <div className="botonSubmit row p-3">
          <button
            className="btn btn-secondary"
            type="submit">Enviar Contacto</button>
        </div>
      </form>

      <Link to="/">
        Or get back to contacts
      </Link>
    </div>
  );
};

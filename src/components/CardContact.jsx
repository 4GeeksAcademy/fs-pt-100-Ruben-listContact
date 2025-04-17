import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import { useNavigate } from "react-router-dom";
import storeService from "../Stores/flux";


export const ContactCard = (props) => {

    const navegar = useNavigate()
    const { store, dispatch } = useGlobalReducer()

    // useEffect(()=>{
    //     handleDelete()
    // }, [])


    const handleDelete = async () => {

        try {
            const resp = await storeService.deleteContact(props.cid)
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (e) => {
        navegar("/edit_contact/" + props.cid)
    }

    return (
        <div className="card">
            <div className="contact-card row">

                <img
                    src="https://ih1.redbubble.net/image.3720334325.5286/flat,750x,075,f-pad,750x1000,f8f8f8.jpg"
                    alt="Contact Photo"
                    className="contact-photo col-3"
                />
                <div className="body col-8">

                    <div className="divdetodo">
                        <h3>🐉:{props.name} </h3>
                        <p> 📩 :{props.email} </p>
                        <p> 📞:{props.phone} </p>
                        <p> 🏰:{props.address} </p>
                    </div>
                    <div className="botones d-flex">

                        <button className="btn btn-warning col-1" type="button" onClick={() => { handleDelete() }}>
                            <i className="fas fa-trash-alt" />
                        </button>

                        <button className="btn btn-dark editar col-1" onClick={() => { handleEdit() }}>
                            ✏️
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}


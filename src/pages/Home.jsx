
import React, { useEffect } from "react";
import { ContactCard } from "../components/CardContact.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../styles/card_contact.css";
import storeService from "../Stores/flux.js"

export const Home = () => {

  const { store, dispatch } = useGlobalReducer()

  // const createAgend = async () => {

  //   try {
  //     const data = await storeService.uploadAgend()
  //     console.log(data);
  //     dispatch({
  //           type:'create_user',
  //           payload: data.contacts
  //         });
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
const cargarAgenda = async () => {

      try {
        const data = await storeService.uploadAgend()
        dispatch({
          type: 'upload_user',
          payload: data.contacts
        })
      } catch (error) {
        console.log("Agenda no existe. Creando...")
        // await storeService.createAgenda();
        // const data = await storeService.uploadAgend();
        // dispatch({ type: 'upload_user', payload: data.contacts });
      }
        
      
    }
  useEffect(()=>{
    

    cargarAgenda()
    
    //storeService.uploadAgend()
  
  }, [])

  // useEffect(()=>{
  //   const eliminarContacto = async () => {

  //     try {
  //       const data = await storeService.deleteContact()
  //       dispatch({
  //         type: 'upload_user',
  //         payload: data.contacts
  //       })
  //     } catch (error) {
  //       console.log("Contacto no eliminado. Eliminando...")
  //       // await storeService.createAgenda();
  //       // const data = await storeService.uploadAgend();
  //       // dispatch({ type: 'upload_user', payload: data.contacts });
  //     }
        
      
  //   }

  //   eliminarContacto()
  // }, [storeService.uploadAgend()])





  return (
    <div className="container text-center">

      <h1>Dragon List!!</h1>
      <div className="contact-card text-center mt-5">
        <div>
          {store.agenda && store.agenda.length > 0 && store.agenda?.map((el, i) => (
            <ContactCard
              key={i}
              cid={el.id}
              name={el.name}
              email={el.email}
              phone={el.phone}
              address={el.address}
              contact={el}
              className="card"
            />
          ))}
        </div>
      </div>
      {/* <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Are you Sure?</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            If you delete this, the Dragon will Died!!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh NOO!!</button>
                            <button type="button" className="btn btn-primary" onClick={() => { handleDelete() }}>YEEESS!!!</button>
                        </div>
                    </div>
                </div>
            </div> */}
    </div>
  );
}; 
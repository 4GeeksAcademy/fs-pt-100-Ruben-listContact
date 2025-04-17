
import React, { useEffect } from "react";
import { ContactCard } from "../components/CardContact.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import "../styles/card_contact.css";
import storeService from "../Stores/flux.js"
import { Await } from "react-router-dom";

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

  useEffect(()=>{
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

    cargarAgenda()
  
  }, [])


  return (
    <div className="container text-center">

      <h1>Dragon List!!</h1>
      <div className="contact-card text-center mt-5">
        <div>
          {store.agenda?.map((el, i) => (
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
    </div>
  );
}; 
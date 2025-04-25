
const storeService = {}


storeService.createAgenda = async () => {

    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/Desdentao', {
            method: 'Post',
            body: JSON.stringify ({ slug: "Desdentao" }),
            headers: {
                'Content-Type': 'application/json'
              }
          })
        const data = await resp.json()
        console.log(data)
        return storeService.uploadAgend()
    } catch (error) {
        console.log(error)
    }
}

storeService.uploadAgend = async () => {

    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/Desdentao')
        if (!resp.ok) throw new Error("Error on Upload")
        const data = await resp.json()
        return data
    } catch (error) {
        const data = await storeService.createAgenda()
        console.log(data)
    }
}
// storeService.createAgenda = () => {
//     fetch('https://playground.4geeks.com/contact/agendas/Desdentao', {
//                     method: 'Post',
//                     headers: {
//                         'Content-Type': 'application/json'
//                       }
//                   })
//     .then( response => {
//         if (!response.ok) throw new Error(`error code: ${response.status}`)
//             return response.json()
// })
//     .then(data => storeService.uploadAgend())
//     .catch(err=>console.log(err))
// }

// storeService.uploadAgend = () => {
//     fetch('https://playground.4geeks.com/contact/agendas/Desdentao')
//     .then( response => {
//         if (!response.ok) throw new Error(`error code: ${response.status}`)
//             return response.json()
// })
//     .then(data => { console.log(data)})

//     .catch(err => storeService.createAgenda())
// }



storeService.addContact = async (payload) => {

    try {
        const resp = await fetch('https://playground.4geeks.com/contact/agendas/Desdentao/contacts', {
            method: 'Post',
            body: JSON.stringify(payload),
            headers: {
              'Content-Type': 'application/json'
            }
          })
        const data = await resp.json()
        return storeService.uploadAgend()
    } catch (error) {
        console.log(error)
        
    }
}

storeService.deleteContact = async (id) => {

    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Desdentao/contacts/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            }
          })
          if (!resp.ok) throw new Error("Error on Upload")
            return { success: true, deletedId: id };
    } catch (error) {
        console.log(error)
        return { success: false };
    }
}

// storeService.deleteContact = (id) => {
//     fetch(`https://playground.4geeks.com/contact/agendas/Desdentao/contacts/${id}`, {
//                     method: 'DELETE',
//                     headers: {
//                       'Content-Type': 'application/json'
//                     }
//                   }) 
//         .then(resp => {
//             if (!resp.ok) throw new Error(`error code: ${resp.status}`);
//             storeService.uploadAgend()
//         })
//         .catch(err => console.log(err));
// }

storeService.editContact = async (contacto, id) => {

    try {
        const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Desdentao/contacts/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contacto)
        })
        return storeService.uploadAgend()
    } catch (error) {
        console.log(error)
    }
}

export default storeService
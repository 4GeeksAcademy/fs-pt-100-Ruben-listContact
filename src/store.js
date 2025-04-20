export const initialStore = () => {
  return {
    //contactos: [],
    agenda: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'upload_user':
      return {
        ...store, agenda: action.payload
      }
      
      case 'delete_contact':
        return {
          ...store,
          agenda: store.agenda.filter(contact => contact.id !== action.payload)
        };
        
    default:
      throw Error('Unknown action.');
  }
}

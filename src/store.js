export const initialStore = () => {
  return {
    //contactos: [],
    agenda: null,
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'upload_user':
      return {
        ...store, agenda: action.payload
      }
      

    default:
      throw Error('Unknown action.');
  }
}

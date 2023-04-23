import axios from "axios";

class putAPI {
  static putInfo (id, payload, state) {

    const changeChar = async () => {
        await axios.put(`http://localhost:3001/characters/${id}`, payload)
        state(true);
      }
      changeChar()
      return state
    };
    
  }

export default putAPI
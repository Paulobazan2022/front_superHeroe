import axios from "axios";

class patchAPI {
  static patchInfo (id, payload, state) {

    const changeChar = async () => {
        await axios.patch(`http://localhost:3001/characters/${id}`, payload)
        state(true);
      }
      changeChar()
      return state
    };
    
  }

export default patchAPI
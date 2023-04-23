import axios from "axios";

class deleteApi {
  static deleteInfo(id, state) {
    const deleteCharacter = async () => {
      await axios.delete(`http://localhost:3001/characters/${id}`);
      state(true);
    };
    deleteCharacter();
    return state;
  }
}

export default deleteApi;

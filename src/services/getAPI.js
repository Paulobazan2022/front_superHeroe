import axios from "axios";

class getAPI {
  static getInfo(state) {
    let info;
    const getData = async () => {
      info = await axios.get("http://localhost:3001/characters");
      state(info.data);
    };
    getData();
    return state;
  }
}

export default getAPI;

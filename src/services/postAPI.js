import axios from "axios";

class postAPI {
  static postInfo(payload, notCreate, create) {
    let response;
    const createChar = async () => {
      try {
        response = await axios.post(
          `http://localhost:3001/characters`,
          payload
        );
      } catch (error) {
        notCreate(true);
      }

      if (response.status === 201) {
        create(true);
      }
    };
    createChar();
    return (notCreate,create);
  }
}

export default postAPI;

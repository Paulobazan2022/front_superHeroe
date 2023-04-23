import axios from "axios";

class getAPIbyID {
    static getInfo(id, state, state_name, state_publisher, state_alterEgo, state_firstAppearance, state_characters,
        state_image){
        const getData = async () => {
                const response = await axios.get(`http://localhost:3001/characters/${id}`)
                state(response.data)
            if(state_name && state_publisher && state_alterEgo && state_firstAppearance && state_characters){
                state_name(response.data.name)
                state_publisher(response.data.publisher)
                state_alterEgo(response.data.alter_ego)
                state_firstAppearance(response.data.first_appearance)
                state_characters(response.data.characters)
                state_image(response.data.image)
            }
        }
        getData()
    return (state,state_name, state_publisher, state_alterEgo, state_firstAppearance, state_characters)
    }
}

export default getAPIbyID
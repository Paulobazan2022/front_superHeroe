import { useState } from "react"
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import postAPI from "../services/postAPI";


const CreateCharacter = () => {
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [publisher, setPublisher] = useState()
    const [alterEgo, setAlterEgo] = useState()
    const [firstAppearance, setFirstAppearance] = useState()
    const [image, setImage] = useState()
    const [characters, setCharacters] = useState()
    const [create, setCreate] = useState(false)
    const [notCreate, setNotCreate] = useState(false)

    const createCharacter = async () => {
        const payload = {
            name: name,
            publisher: publisher,
            alter_ego: alterEgo,
            first_appearance: firstAppearance,
            image: image,
            characters: characters
        }

        postAPI.postInfo(payload, setNotCreate, setCreate)

    }
    return (<>

        <div className="containter-create">
            <h1 className="textH1">CREA TU PERSONAJE</h1>
            {create && <Modal text={"Personaje Creado!"} back={() => navigate("/")} text_style={"containerModal_text"} />}
            <hr />
            {notCreate && <Modal text={"ERROR!"} textP={"Es necesario que rellenes todos los campos"} back={() => setNotCreate(false)}
                text_style={"containerModal_text_Red"} />}
            <div className="container-create1">
                <div className="container-create-text">
                    <h3 >Nombre </h3>
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="container-create-text">
                    <h3>Publicado en </h3>
                    <input type="text" onChange={(e) => setPublisher(e.target.value)} />
                </div>
                <div className="container-create-text">
                    <h3>Alter Ego</h3>
                    <input type="text" onChange={(e) => setAlterEgo(e.target.value)} />
                </div>
                <div className="container-create-text">
                    <h3>1ª Aparición en </h3>
                    <input type="text" onChange={(e) => setFirstAppearance(e.target.value)} />
                </div>
                <div className="container-create-text">
                    <h3>Imagen</h3>
                    <input type="text" onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="container-create-text">
                    <h3>Personajes </h3>
                    <input type="text" onChange={(e) => setCharacters(e.target.value)} />
                </div>
            </div>
            <Button className="colo-button" variant="contained" onClick={createCharacter}>crear</Button>
        </div>

    </>)

}

export default CreateCharacter
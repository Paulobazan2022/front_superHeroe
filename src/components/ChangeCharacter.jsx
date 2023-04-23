import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Modal from "./Modal";
import deleteApi from "../services/deleteAPI";
import putAPI from "../services/putAPI";
import getAPIbyID from "../services/getAPIbyID";


const ChangeCharacter = (props) => {

    const { id } = useParams()
    const navigate = useNavigate()


    const [character, setCharacter] = useState([])
    const [name, setName] = useState()
    const [publisher, setPublisher] = useState()
    const [alterEgo, setAlterEgo] = useState()
    const [firstAppearance, setFirstAppearance] = useState()
    const [characters, setCharacters] = useState()
    const [image, setImage] = useState()

    const [textModificated, setTextModificated] = useState(false)
    const [textEliminated, setTextEliminated] = useState(false)



    useEffect(() => {

        if (id) {
            getAPIbyID.getInfo(id, setCharacter, setName, setPublisher, setAlterEgo, setFirstAppearance, setCharacters, setImage)
        } else {
            getAPIbyID.getInfo(props.char, setCharacter, setName, setPublisher, setAlterEgo, setFirstAppearance, setCharacters, setImage)
        }
    }, [props.char])



    const changeCharacter = async () => {
        const payload = {
            name: name,
            publisher: publisher,
            alter_ego: alterEgo,
            first_appearance: firstAppearance,
            image: image,
            characters: characters
        }
        
        if (id) {
            putAPI.putInfo(id, payload, setTextModificated)
        } else {
            putAPI.putInfo(props.char, payload, setTextModificated)
        } 
    }

    const deleteCharacter = async (id) => {
         if (id) {
             deleteApi.deleteInfo(id, setTextEliminated)
         } else {
             deleteApi.deleteInfo(props.char, setTextEliminated)
         } 
    }

    return <>
        <div className="containers">

            <div className="container-character" >
                <div>
                    <Card className="class-card">
                        <CardMedia
                            component="img"
                            width="300"
                            height="400"
                            image={character.image}
                            alt={character.image}
                        />

                    </Card>
                </div>
                <div className="container-info1">
                    <div className="container-set-text">
                        <h2>Aplica los cambios que quieras!</h2>
                    </div>
                    <div className="container-set-text">
                        <h3> Nombre</h3>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="container-set-text">
                        <h3>Publicado </h3>
                        <input value={publisher} type="text" onChange={(e) => setPublisher(e.target.value)} />
                    </div>
                    <div className="container-set-text">
                        <h3>Alter Ego </h3>
                        <input value={alterEgo} type="text" onChange={(e) => setAlterEgo(e.target.value)} />
                    </div>
                    <div className="container-set-text">
                        <h3>1ª Aparición </h3>
                        <input value={firstAppearance} type="text" onChange={(e) => setFirstAppearance(e.target.value)} />
                    </div>
                    <div className="container-set-text">
                        <h3>Personajes </h3>
                        <input value={characters} type="text" onChange={(e) => setCharacters(e.target.value)} />
                    </div>
                    <div className="container-set-text">
                        <h3>Imagen (url) </h3>
                        <input value={image} type="text" onChange={(e) => setImage(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="container-button-char">
                <Button className="colo-button" variant="contained" onClick={changeCharacter}>aplicar cambios</Button>
                <Button className="colo-button" variant="contained" onClick={() => deleteCharacter(character.id)}>eliminar personaje</Button>
            </div>
            {textModificated && <Modal text={"Cambios realizados!"} back={() => navigate("/")} text_style={"containerModal_text"} />}
            {textEliminated && <Modal text={"Personaje Eliminado!"} back={() => navigate("/")} text_style={"containerModal_text"} />}
        </div>

    </>
}

export default ChangeCharacter;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
import getAPIbyID from "../services/getAPIbyID";


const Character = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState([])


    useEffect(() => {
        getAPIbyID.getInfo(id,setCharacter)
    }, [])


    return (<>
        <div className="containers">
            <Button className="colo-button" variant="contained" onClick={() => navigate("/")}>VOLVER</Button>
            <div className="container-character" >
                <div >
                <Card className="class-card">
                    <CardMedia
                        component="img"
                        width="400"
                        height="400"
                        image={character.image}
                        alt={character.image}
                    />
                    <CardContent className="text">
                        <Typography gutterBottom variant="h4" component="div">
                            {character.name}
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="container-info">    
                <p>Publicado en </p><h3>{character.publisher}</h3>
                <p>Primera aparición</p><h3>{character.first_appearance}</h3>
                <p>Alter Ego</p><h3>{character.alter_ego}</h3>
                <p>Personajes </p><h3>{character.characters}</h3>

            </div>
        </div>
        <div className="container-button-char">
            <Button className="colo-button" variant="contained" onClick={() => navigate(`/character/setcharacter/${id}`)}>modificar personaje</Button>
        </div>
    </div>
    </>)
}

export default Character;
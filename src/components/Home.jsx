import "../assets/App.css"
import { useNavigate } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from "react";


import getAPI from "../services/getAPI"

const Home = () => {
    const navigate = useNavigate()
   
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        getAPI.getInfo(setCharacters)
        
    }, [])

    return (<>
        
        <div className="container-home">

            {characters.map((char) => (
                <Card sx={{ width: 250 }} onClick={() => navigate(`/character/${char.id}`)} key={char.id} className="class-card">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="350"
                            image={char.image}
                            alt={char.image}
                        />
                        <CardContent className="text">
                            <Typography gutterBottom variant="h5" component="div">
                                {char.name}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>)
            )}
        </div>



    </>)
}

export default Home;
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";



const NavBar = () => {

    const navigate = useNavigate()


    return <>
        
        <div className="containter-navbar">
            <div className="container-navbar1">
                <Button className="colo-button" variant="contained" onClick={() => navigate("/")}>inicio</Button>
                <Button className="colo-button" variant="contained" onClick={() => navigate("/character/create")}>CREAR PERSONAJE</Button>
                <Button className="colo-button" variant="contained" onClick={() => navigate("/search/character")}>modificar personaje</Button>
            </div>
        </div>
    </>
}


export default NavBar
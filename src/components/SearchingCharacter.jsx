import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Modal from "./Modal";
import getAPI from "../services/getAPI";
import ChangeCharacter from "./ChangeCharacter"

const SearchingCharacter = () => {
    const [characters, setCharacters] = useState([])
    const [sharedChar, setSharedChar] = useState()
    const [search, setSearch] = useState()
    const [results, setResults] = useState()
    const [notFound, setNotFound] = useState(false)
    const [found, setFound] = useState(false)

    useEffect(() => {
        getAPI.getInfo(setCharacters)

    }, [])


    const checkCharacter = () => {
        const currentChar = characters.find((char) => char.name.toLowerCase() === search.toLowerCase())
        if (currentChar) {
            setSharedChar(currentChar)
            setFound(true)
        } else {
            setNotFound(true)
            setFound(false)
        }
        setResults(null)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        getResults(search)
    }

    const getResults = (filtrando) => {
        const getFilter = characters.filter((char) => {
            if (char.name.toLowerCase().includes(filtrando.toLowerCase())) {
                return char
            }
        })
        setResults(getFilter)
    }

    const showResults = (info) => {
        setSearch(info)
    }
    return <>
        <div className="containter-searching">
            <div className="searching">
                <h1 className="textH1">Busca el personaje a Modificar!</h1>
            </div>
            <div className="searching">
                <input type="text" value={search} onChange={(e) => handleChange(e)} placeholder="Busca por nombre" />
                <Button className="colo-button" variant="contained" onClick={() => checkCharacter()}>buscar</Button>
            </div>
            {results && search.length > 1 && results.map((character) =>
                <h3 onClick={() => showResults(character.name)} className="textShowing">{character.name}</h3>
            )}

            {notFound && <Modal text={"Personaje no encontrado :("} back={() => setNotFound(false)}
                text_style={"containerModal_text_Red"} />}
        </div>

        {found && <ChangeCharacter char={sharedChar.id} />}
    </>
}

export default SearchingCharacter;

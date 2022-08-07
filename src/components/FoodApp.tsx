import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import getRecipe from "../api/getRecipe"
import BasicGrid from './CardGrid'


const FoodApp = (props: any) => {

    const [recipes, setRecipes] = React.useState([])
    const [input, setInput] = React.useState("");

    const handelInputChange = (event: any) => {
        setInput(event.target.value);
    }
    const handleSearchRecipe = async () => {
        const res = await getRecipe(input);
        setRecipes(res.results)
    }



    return (
        <div>
        <div style={{ marginTop: '20px' }} >
            <TextField label="Search The Restaurant" variant="filled" color="secondary" style={{ width: "400px" }} onChange={e => handelInputChange(e)} />
            <Button variant="outlined" color="secondary" style={{ height: "56px", marginLeft: '10px' }} onClick={handleSearchRecipe}>
                Search
            </Button>
        </div>
        <div>
            
            </div>
            <BasicGrid recipes={recipes}></BasicGrid>
        </div>

    )

}


export default FoodApp;


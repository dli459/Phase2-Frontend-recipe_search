import React from "react";
import { TextField } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';
import getRecipe from "../api/getRecipe"
import BasicGrid from './CardGrid'


const FoodApp = (props: any) => {

    const [recipes, setRecipes] = React.useState([])
    const [input, setInput] = React.useState("");
    const [loading,setLoading] = React.useState(false);

    const handelInputChange = (event: any) => {
        setInput(event.target.value);
    }
    const handleSearchRecipe = async () => {
        setLoading(true)
        const res = await getRecipe(input);
        setRecipes(res.results)
        setLoading(false)
    }



    return (
        <div>
        <div style={{ marginTop: '20px' }} >
            <TextField label="Search The Recipe" variant="filled" color="secondary" style={{ width: "400px" }} onChange={e => handelInputChange(e)} />
            <LoadingButton loading={loading} variant="outlined" color="secondary" style={{ height: "56px", marginLeft: '10px' }} onClick={handleSearchRecipe}>
                Search
            </LoadingButton>
        </div>
        <div>
            
            </div>
            <BasicGrid recipes={recipes}></BasicGrid>
        </div>

    )

}


export default FoodApp;


import axios from "axios";

const searchRecipe = async (recipeNmae: string) =>{
    const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${recipeNmae}`;
    const headers = {
        'X-RapidAPI-Key': 'eac909b93emsh39a1e1a8be854f6p18dd85jsnb55f29f71b1f',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
      const res = await axios.get(url,{headers});

      return res.data
}

export default searchRecipe;
import axios from "axios";

const CLIENT_ID = "e5550d446b21f8f614b4";
const CLIENT_SECRET = "ce424deee604f11e5cfc4f380dc05f43e45fd7db";

const login = async (code: string) => {
    const url = `https://recipe-app-backend-msa.herokuapp.com/login/${code}`;
    const headers = {
        "Access-Control-Allow-Origin":"*"
    }
    const res = await axios.get(url,{headers});

    return res.data
}

export default login;
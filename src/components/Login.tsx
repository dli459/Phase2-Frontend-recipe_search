import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect } from "react";
import GitHubLoginButton from "../static/github.png"
import { motion } from 'framer-motion';
import { useLocation } from "react-router-dom";
import login from "../api/login";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setUser } from "../slice/userSlice";
import ReactLoading from 'react-loading';



const CLIENT_ID = "e5550d446b21f8f614b4"
const REDIRECT_URI = "http://localhost:3000/login"


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Login = () => {

    const query = useQuery();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        loginMethod();
    }, []);

    const loginMethod = async () => {
        const code = query.get("code");
        if (code) {
            try {
                setLoading(true);
                const response = await login(code);
                dispatch(setUser(response));
                setLoading(false);
            } catch (e) {
                console.log(e);
            }
        }
    }


    return (

        <div style={{ width: '100%' }}>
            {loading ?
                <div style={{ margin: 'auto', marginTop:"300px", width: '64px' }}>
                    <ReactLoading type={"spinningBubbles"} color={"#9c27b0"} />
                </div> :

                <Card sx={{ width: '30%', minWidth: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: '100px' }}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Welcome
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component="p">
                            Please login to use this app
                        </Typography>
                        <a id="githubLink" href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`}>
                            <motion.img whileHover={{ scale: 1.1 }} src={GitHubLoginButton} style={{ width: 220, borderRadius: 12, marginTop: 50 }}></motion.img>
                        </a>
                    </CardContent>

                </Card>

            }
        </div>

    )
}

export default Login;


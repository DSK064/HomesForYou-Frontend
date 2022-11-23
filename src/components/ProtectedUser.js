import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Protected1 = (props) => {
    const {Component} = props;
    const navigate = useNavigate()
    useEffect(() => {
        let login = localStorage.getItem('user')
        if(!login)
        {
            navigate("/loginmsg")
        }
    });
    return(
        <div>
            <Component />
        </div>
    )
}
export default Protected1;
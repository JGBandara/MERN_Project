import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function AllMember() {

    const [Members, setMember] = useState([]);

    useEffect(() => {
        function getMember(){
            axios.get("http://Localhost:3000/member/").then((res) => {
                setMember(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getMember();
    }, [])

    return (
        <div className="container">
        
<h1>All Members</h1>

        </div>
    )
}
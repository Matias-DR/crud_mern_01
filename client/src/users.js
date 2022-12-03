import axios from 'axios';
import {useState, useEffect} from 'react';
import User from './user'

function Users() {
    const [users_data, set_users_data] = useState([])
    useEffect(() => {
        axios.get('api/user/get_users').then(res => {
            console.log(res)
        }).catch(
            err => { console.log('_ERROR_: ', err)
        })
    }, [])
    return (
        <div>
            <h1>
                Lista de usuarios
            </h1>
            <User/>
        </div>
    )
}


export default Users
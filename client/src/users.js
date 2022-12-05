import axios from 'axios';
import { useState, useEffect } from 'react';
import User from './user'

function Users() {
    const [users_data, set_users_data] = useState([])

    useEffect(() => {
        axios.get('api/user/get_users').then(res => {
            set_users_data(res.data)
        }).catch(
            err => {
                console.log('Petición fallida', err)
            })
    },
    // Sobre esta lista, lista de dependencias, se indican las variables para las que se ejecutará el mismo método 'useEffect' cuando cambien de estado, por ejemplo, se elimina un usuario de la lista 'users_data', funcinoa como si se tratase de enlistarse en la variable como observador
    [users_data])

    const users_list = users_data.map(user => {
        return (
            // Es importante definir la pk del elemento cuando se lo define dentro de una lista de elementos. No se genera automáticamente una pk para cada elemento dentro de la lista de elementos
            <div key={user.id}>
                <User data={user} />
            </div>
        )
    })

    return (
        <div>
            <h1>
                Lista de usuarios
            </h1>
            <div className="container text-center">
                {users_list}
            </div>
        </div>
    )
}


export default Users
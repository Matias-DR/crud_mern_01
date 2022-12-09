import axios from 'axios';
import { useState, useEffect } from 'react';
import User from './user'

function Users() {
    const [users, set_users_data] = useState([])

    useEffect(() => {
        /*
        Si se quisiera realizar una petición sin utilizar Axios, podría utilizarse 'fetch' de la siguiente manera:
        fetch('http://localhost:3000/api/user/get_users').then(
            res => res.json()
        ).then(
            user_data => set_users_data(user_data)
        ).catch(
            error => console.log(error.message)
        );

        // Podrían realizarse otras peticiones configurando la función 'fetch' con el parámetro 'options' de la siguiente manera. Aclaración del lado del backend debería esperarse una función 'post('get_users')':
        fetch(
            'http://localhost:3000/api/user/get_users',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // Contenido que desea enviarse como cuerpo, podría en ejemplo ser un id para realizar una búsqueda
                // body: JSON.stringify('')
            }
        ).then(
            res => res.json()
        ).then(
            user_data => set_users_data(user_data)
        ).catch(
            error => console.log(error.message)
        );
        */
       axios.get('api/user/get_users').then(res => {
           set_users_data(res.data)
        }).catch(
            err => console.log('Petición fallida', err)
        )
    },
        // Sobre esta lista, lista de dependencias, se indican las variables para las que se ejecutará el mismo método 'useEffect' cuando cambien de estado, por ejemplo, se elimina un usuario de la lista 'users', funcinoa como si se tratase de enlistarse en la variable como observador
        [users])

    const users_list = users.map(user => {
        return (
            // Es importante definir la pk del elemento cuando se lo define dentro de una lista de elementos. No se genera automáticamente una pk para cada elemento dentro de la lista de elementos
            <div key={user.id}>
                <User data={user} />
            </div>
        )
    })

    return (
        <div className="container text-center">
            <div className="row row-cols-1">
                <h1 className="col">Lista de usuarios</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {users_list}
            </div>
        </div>
    )
}


export default Users
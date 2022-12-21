import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Avatar from 'react-avatar-edit'
import GMap from './g_map_comp';

function UserEdit() {
    const params = useParams()
    const nav = useNavigate()
    // Hooks - Data binding
    const [name, set_name] = useState([])
    const [email, set_email] = useState([])
    const [phone, set_phone] = useState([])
    const [prof_img, set_prof_img] = useState('')
    const [location, setLocation] = useState('')

    useEffect(() => {
        // En este caso, se indica como segundo parámetro el criterio por el que realizar la búsqueda del usuario.
        // Podría utilizarse el método get indicando como ruta '`/api/user/get_user/${params.id}`'.
        // Como la conexión por el momento es solo HTTP, no es necesario tener consideraciones respecto a la seguridad, por eso, resulta indiferente la utilización de ambos métodos
        axios.post('/api/user/get_user', { id: params.id }).then(res => {
            set_name(res.data.name)
            set_email(res.data.email)
            set_phone(res.data.phone)
            set_prof_img(res.data.prof_img)
        }).catch(
            err => {
                console.log('Petición fallida', err)
            })
    }, [params.id])

    function edit_user() {
        var user = {
            name: name,
            email: email,
            phone: phone,
            prof_img: prof_img,
            location: location,
            id: params.id
        }
        axios.post('/api/user/edit_user', user).then(
            res => {
                Swal.fire(res.data)
                nav('/')
            }).then(err => {
                if (err) console.log(err)
            })
    }

    return (
        <div className="container text-center">
            <div className="row">
                <h2 className="mt-4">Editar usuario</h2>
            </div>
            <div className="row">
                {/* <div className="col-sm-6 offset-3 border border-warning"> */}
                <div className="col border border-warning">
                    <div className="mt-1">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => { set_name(e.target.value) }}></input>
                    </div>
                    <div className="mt-1">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => { set_email(e.target.value) }}></input>
                    </div>
                    <div className="mt-1">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" value={phone} onChange={(e) => { set_phone(e.target.value) }}></input>
                    </div>
                    <button onClick={edit_user} className="mt-3 mb-3 btn btn-success">Actualizar usuario</button>
                </div>
                <div className="col">
                    <Avatar onCrop={(image) => set_prof_img(image)} onClose={() => set_prof_img(null)} width={320} height={320} imageWidth={320}></Avatar>
                </div>
                <div className="col">
                    <img src={prof_img} alt="..."></img>
                </div>
                <div className="col">
                    <GMap />
                </div>
            </div>
        </div >
    )
}


export default UserEdit
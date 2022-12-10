import { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import Avatar from 'react-avatar-edit'

function AddUser() {
    const nav = useNavigate()
    // Hooks - Data binding
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [prof_img, set_prof_img] = useState(null)

    function add_user() {
        var user = {
            name: name,
            email: email,
            phone: phone,
            prof_img: prof_img,
            id: uniqid()
        }
        // res.then funciona como un try except, captura la excepción levantada
        axios.post('api/user/add_user', user).then(
            res => {
                Swal.fire(res.data)
                nav('/')
            }).then(err => {
                console.log(err)
            })
    }

    function onCrop(image) {
        set_prof_img(image)
    }

    function onClose() {
        set_prof_img(null)
    }

    return (
        <div className="container text-center">
            <div className="row">
                <h2 className="mt-4">Agregar usuarios</h2>
            </div>
            <div className="row">
                {/* <div className="col-sm-6 offset-3 border border-warning"> */}
                <div className="col border border-warning">
                    <div className="mt-1">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }}></input>
                    </div>
                    <div className="mt-1">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                    </div>
                    <div className="mt-1">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" value={phone} onChange={(e) => { setPhone(e.target.value) }}></input>
                    </div>
                    <button onClick={add_user} className="mt-3 mb-3 btn btn-success">Guardar usuario</button>
                </div>
                <div className="col">
                    <Avatar onCrop={onCrop} onClose={onClose} width={320} height={320} imageWidth={320}></Avatar>
                </div>
                <div className="col">
                    <img src={prof_img} alt="..."></img>
                </div>
            </div>
        </div>
    )
}


export default AddUser
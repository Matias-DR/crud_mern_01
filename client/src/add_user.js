import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";

function AddUser() {
    const nav = useNavigate()
    // Hooks - Data binding
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [prof_img, set_prof_img] = useState(null)

    useEffect(() => {
        console.log(prof_img)
    }, [prof_img])

    function add_user() {

        let convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        });
        convertBlobToBase64(prof_img);

        var user = {
            name: name,
            email: email,
            phone: phone,
            prof_img: new FileReader().readAsDataURL(prof_img.blob),
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
                    <div className="container text-center">
                        <div className="row">
                            <div className="col">
                                <img src={prof_img} alt="..."></img>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FileUploader handleChange={image => set_prof_img(URL.createObjectURL(image))} name="image" types={['png']} label="Suba una imagen clickeando aquí o arrastrela" hoverTitle="Arrastre hasta aquí" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddUser
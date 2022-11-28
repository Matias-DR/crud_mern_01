import {useState} from 'react';
import uniqid from 'uniqid';

function AddUser() {

    // Hooks - Data binding
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[tel, setTel] = useState('')

    function add_user() {
        var user = {
            name: name,
            email: email,
            tel: tel,
            id: uniqid()
        }
    }

    return (
        <div class="container text-center">
            <div class="row">
                <h2 className="mt-4">Agregar usuarios</h2>
            </div>
            <div class="row">
                <div class="col-sm-6 offset-3 border border-warning">
                    <div className="mt-1">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                    </div>
                    <div className="mt-1">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>
                    <div className="mt-1">
                        <label htmlFor="phone" className="form-label">Teléfono</label>
                        <input type="tel" className="form-control" value={tel} onChange={(e) => {setTel(e.target.value)}}></input>
                    </div>
                    <button onClick="" className="mt-3 mb-3 btn btn-success">Guardar usuario</button>
                </div>
            </div>
        </div>
    )
}


export default AddUser
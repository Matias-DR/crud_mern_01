import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Swal from 'sweetalert2';

function User({ data, userDeleted }) {

    useEffect(() => {
        AOS.init()
    }, [])

    function del_user() {
        axios.post('api/user/del_user', { id: data.id }).then(
            res => {
                Swal.fire(res.data)
                userDeleted(true)
            }).catch(err => { alert(err) })
    }

    return (
        <div className="col">
            <div className="card h-100" data-aos="zoom-in">
                <img src={data.prof_img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <p className="card-text">{data.email}</p>
                    <p className="card-text">{data.phone}</p>
                    <p className="card-text">{data.location}</p>
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <Link to={`/user_edit/${data.id}`}>
                            <button type="button" className="btn btn-sm btn-warning mb-2">Editar</button>
                        </Link>
                        <button type="button" className="btn btn-sm btn-outline-danger ms-2 mb-2" onClick={del_user}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default User
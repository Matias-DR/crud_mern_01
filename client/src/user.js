import { Link } from 'react-router-dom';

function User({ data }) {
    return (
        <div className="container text-center mt-3 mb-3 ">
            <div className="row">
                <div className="col">
                    {data.name}
                </div>
                <div className="col">
                    {data.email}
                </div>
                <div className="col">
                    {data.phone}
                </div>
                <div className="col">
                    <Link to={`/user_edit/${data.id}`}>
                        <button type="button" className="btn btn-sm btn-warning">Editar</button>
                    </Link>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-sm btn-outline-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}


export default User
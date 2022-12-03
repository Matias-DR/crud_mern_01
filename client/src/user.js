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
                    <button type="button" className="btn btn-sm btn-warning">Editar</button>
                </div>
                <div className="col">
                    <button type="button" class="btn btn-sm btn-outline-danger">Eliminar</button>
                </div>
            </div>
        </div>
    )
}


export default User
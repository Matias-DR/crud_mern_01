import { useState } from 'react';
import './App.css';
import AddUser from './add_user'
import UserEdit from './user_edit'
import Users from './users'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Quedamos en que hay que realizar la primer consulta al cargar la página, y, realizar la consulta al eliminar un usuario

function App() {
    const [user_search_input, set_user_search_input] = useState('')

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">CRUD MERN</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/add_user">Agregar usuario</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={input => set_user_search_input(input.target.value)}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* Quedamos en enviar la entrada obtenida del cuadro de búsqueda al componente 'Users' para que realice la consulta según el contenido */}

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Users input={user_search_input}/>}></Route>
                    <Route path='/add_user' element={<AddUser />}></Route>
                    <Route path='/user_edit/:id' element={<UserEdit />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
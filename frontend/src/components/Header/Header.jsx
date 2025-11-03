  import React from 'react';
import logo from '../../assets/logos/Logo.png';
import contact from '../../assets/styles/contact.png';
  import { Link } from 'react-router-dom';

  import '../Header/Header.css'


  function Header() {
    return (
      <>
        {/* new navbar start */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              <img src={logo} alt="" width={100} />
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/Login">Login</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Estimation">About</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Login"> <img src={contact} width={20} alt="" /></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* new navbar End */}
      </>

    )
  }

  export default Header

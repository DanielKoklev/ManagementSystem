import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:3000">Management System</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className='nav-link' href='http://localhost:3000/departments'>Departments</a>
                    </li>
                    <li className="nav-item">
                      <a className='nav-link' href='http://localhost:3000/tasks'>Tasks</a>
                    </li>
                    <li className="nav-item">
                      <a className='nav-link' href='http://localhost:3000/employees'>Employees</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        </header>
    </div>
  )
}

export default Header
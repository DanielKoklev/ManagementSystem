import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className="navbar-brand" href="http://localhost:3000">Management System</a>
                <div className='navbar-nav'>
                  <ul className='navbar-nav me-3 mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <a className='nav-link' href='http://localhost:3000/departments'>Departments</a>
                    </li>
                  </ul>
                </div>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                  <li className='nav-item'>
                    <a className='nav-link' href='http://localhost:3000/employees'>Employees</a>
                  </li>
                </ul>
            </nav>
        </header>

    </div>
  )
}

export default Header
import React, { Fragment } from 'react'
import Link from 'next/link'

const Navbar = () => {
    return <Fragment>
        <nav className='black'>
            <div className="nav-wrapper">
                <div className="container">
                <a href='/' className='brand-logo'>
                    Respira
                </a>
                <ul className='right'>
                    <li>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/register">
                            <a>Registrarse</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </Fragment>
}

export default Navbar
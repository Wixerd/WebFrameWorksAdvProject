import Head from 'next/head'
import Image from 'next/image'


export default function Navbar() {
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu has-background-black "style={{marginLeft:50, marginRight:50}}>
                    <div className="navbar-start" >
                        <a className="navbar-item" href='/'>
                            Home
                        </a>

                        <a className="navbar-item" href='/blogs'>
                            Blog archive
                        </a>

                        <a className="navbar-item" href='/discography'>
                            Discography
                        </a>
                        
                        <a className="navbar-item" href='/biography'>
                            Biographies
                        </a>

                    </div>
                    <div className="navbar-end">
                    </div>
                </div>
            </nav>
        </>
    )
}

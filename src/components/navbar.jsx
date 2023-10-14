import React from 'react'
import './navbar.css'


function navbar() {
    return (
        <header>
            <div className='container-header'>
                <a className='logoheader' href="/"><img src="src\assets\images\logo.png" alt=""/></a>
                <nav>

                    <a className="botaocontato"href="/">Contato</a>

                </nav>
            </div>
        </header>
    )
}

export default navbar
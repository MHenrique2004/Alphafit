import React from 'react'
import './comentarios.css'

function comentarios() {
    return (
        <div>
            <div className='comments'>
                <div className="containercomentarios">
                    <div className="contenidoimg">
                        <img src="https://picsum.photos/600/600" alt="" />
                    </div>
                    <div className="texto">
                        <div className="contenttexto">
                            <img src="src/assets/images/left-quote.png" className="imagemquote" alt="" />
                            <p className='textoparagrafo1'>I considaaaaaaaaaaaaaaer this a dream job. I get to do what I love every day.</p>
                            <div className='baixo'><p className="textoparagrafo2">Juvenilson, Caetés Velho. | Gympass</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='comments'>
                <div className="containercomentarios">
                    <div className="texto">
                        <div className="contenttexto">
                            <img src="src/assets/images/left-quote.png" className="imagemquote" alt="" />
                            <p className='textoparagrafo1'>I considaaaaaaaaaaaaaaer this a dream job. I get to do what I love every day.</p>
                            <div className='baixo'><p className="textoparagrafo2">Juvenilson, Caetés Velho. | Gympass</p></div>
                        </div>
                    </div>
                    <div className="contenidoimg">
                        <img src="https://picsum.photos/600/600" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default comentarios
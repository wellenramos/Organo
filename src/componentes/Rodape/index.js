import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
            <section className='redes-sociais'>
                <a href='facebook.com' target='_blank'>
                    <img src='/imagens/fb.png' alt='' />
                </a>

                <a href='twitter.com' target='_blank'>
                    <img src='/imagens/tw.png' alt='' />
                </a>

                <a href='instagram.com' target='_blank'>
                    <img src='/imagens/ig.png' alt='' />
                </a>
            </section>
            <section className='logo'>
                <img src='/imagens/logo.png' alt='' />
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape
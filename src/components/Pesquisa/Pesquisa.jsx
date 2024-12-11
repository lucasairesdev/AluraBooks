import './Pesquisa.css'
export const Pesquisa = () =>{
    return(
        <section className='ContainerPesquisa'>
            <h2 className='TituloPesquisa'>
                Já sabe por onde começar?
            </h2>

            <h3 className='SubtituloPesquisa'>
                Encontre seu livro em nossa estante.
            </h3>

            <input type="text" placeholder="Pesquise sua próxima leitura"/>
        </section>
    )
}
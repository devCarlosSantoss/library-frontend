import { books } from './DataLastReleases.js'
import styled from 'styled-components'
import { Titulo } from '../Title/Title.js'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const LastReleases = () => {
    return (
        <>
        <UltimosLancamentosContainer>
            <Titulo cor='#EB9B00'>Últimos Lançamentos</Titulo>
            <NovosLivrosContainer>
                {books.map((livros) => {
                    return <img src={livros.src} alt={livros.nome} id={livros.id}/>
                })}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
        </>
    )
}

export default LastReleases;
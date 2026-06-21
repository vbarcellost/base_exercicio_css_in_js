import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, GlobalStyle } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container as="main">
        <ListaVagas />
      </Container>
    </>
  )
}

export default App

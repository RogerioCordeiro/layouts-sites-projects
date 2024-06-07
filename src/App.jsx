import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Aside from './components/Aside'

function App() {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <div className='mainContainer'>
    <Main></Main>
    <Aside></Aside>
    </div>
    </>
  )
}

export default App

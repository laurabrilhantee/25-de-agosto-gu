import { useState } from 'react'
import './App.css'
import Tenisnike from './assets/tenis-niike.avif'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <main>
      <header></header>
      <section className="produtos">

        {/*Produto 1 */}
        <div className="card">
        <img src={Tenisnike}alt="" className="img-prod" />
          <h2>Tenis da nike</h2>
          <p className="desc">Um lindo tenis da nike</p>
          <p className="preco">R$ 699,99</p>
         <div className="avaliacao"> ★ ★ ★ ★ ☆</div>
         <div className="off">- 15%</div>
        </div>                    
      </section>
      <section className="destaque"></section>
      <footer></footer>
     </main>
    </>
  )
}

export default App

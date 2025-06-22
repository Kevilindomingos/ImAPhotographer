// import { useState } from 'react'
import style from './App.module.css'
import Menu from './components/menu'

function App() {

  return (
    <>
    <section className={style.fundo}>
      <div className={style.s1}>
      <Menu/>
       <div className={style.blocoDireito}></div>
       <div></div>
       <div></div>
      </div>
    </section>
    </>
  )
}

export default App


import style from './App.module.css'
import Menu from './components/menu'
import menuImg from './assets/fotoHome.gif'


function App() {

  return (
    <>
    <Menu />
    <section id='s1' className={style.flexContainer}>
      <div className={style.flexItem1}>
        <img src={menuImg} className={style.menuImg} alt="foto inicial da home" />
      </div>

      <div className={style.flexItem2}>
        <h1 className={style.ttHome}>Bem vindo ao meu site!</h1>
        <p className={style.textHome}>Lorem ipsum dolor, sit amet consectetur adipisicing 
          <br/>elit. Debitis facilis incidunt a animi, quaerat numquam 
          quidem atque magnam qui eaque maxime delectus eligendi beatae
           non esse sunt! Sit, provident doloremque.
          <br/> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            optio ab modi voluptas molestiae, voluptatibus consequatur commodi 
            <br/>debitis provident magnam amet laudantium sint tempora reprehenderit,
             quisquam porro laborum! Odit, tempora. Lorem ipsum, dolor sit amet consectetur
              <br/>adipisicing elit. Labore quo optio eveniet saepe fugit quaerat similique rem
              <br/> minus impedit eos, voluptate dolor quis. Molestiae atque voluptatem ipsam,
                magnam in ab. <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Harum blanditiis asperiores neque id vitae ex, dolores aperiam vel molestias 
                <br/>voluptatibus nam, voluptate labore autem dolor qui commodi perferendis, necessitatibus repudiandae!</p>
      </div>
    </section>
    <div className={style.flexBarra}>
        <h4>A moldura do instante perfeito</h4>
      </div>
      <section id='s2' className={style.flexContainer2}>
        <h1>conheça alguns exemplos da minha edição</h1>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
      <section id='s3' className={style.flexContainer3}>

      </section>
      <footer id='footer' className={style.footer}>

      </footer>
    </>
  )
}

export default App

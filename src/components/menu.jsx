import style from './menu.module.css'

function Menu() {

    return(
      <header>
        <a className={style.tituloheader} href='/'>HOME</a>
        <a className={style.tituloheader} href='#s2'>SERVICES</a>
        <a className={style.tituloheader} href='#s3'>ABOUT ME</a>
        <a className={style.tituloheader} href='#footer'>CONTACT</a>
      </header>
    )
}

export default Menu
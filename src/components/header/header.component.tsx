import './header.styles.css'
import {BsCart3} from 'react-icons/bs'

export default function Header() {
  return (
    <div className='header-container'>
      <h2 className='header-title'>CLUB CLOTHING</h2>

      <div className='header-items'>
        <div className='header-item'>Explorar</div>

        <div className='header-item'>Login</div>

        <div className='header-item'>Criar Conta</div>

        <div className='header-item'>
          <BsCart3 size={25} /> 5
        </div>
      </div>
    </div>
  )
}

// import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header className='bg-amber-700 '>
        <nav className='flex justify-between p-2 text-white font-medium'>
            <div>
                LOGO
            </div>
            <ul className='flex gap-2'>
                <li> <Link to={"/counter"}>Counter Button</Link></li>
                <li> <Link to={"/product"}>Input Product</Link></li>
                <li> <Link to={"/fetch-pokemon"}>Fetch Pokemon</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
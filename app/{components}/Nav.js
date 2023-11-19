import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className=' flex justify-between bg-nav'>
        <div>
            <Link href={'/'}>
                <FontAwesomeIcon icon={faHome} className='icon'/>
            </Link>
            <Link href={'/TicketPage/new'}>
                <FontAwesomeIcon icon={faTicket} className='icon'/>
            </Link>
        </div>
        <div>
            <p className=' text-default-text'>Seun Daniel</p>
        </div>
    </nav>
  )
}

export default Nav
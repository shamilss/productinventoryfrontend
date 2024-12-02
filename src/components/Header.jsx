import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
   <>
   <nav id='navbar' className='px-lg-5 px-0 border-bottom border-4 border-dark rounded'>
   <h1 className='px-5 py-4'><FontAwesomeIcon className='me-3' icon={faWarehouse} />PRODUCT INVENTORY</h1>
   </nav>
   
   
   
   </>
  )
}

export default Header
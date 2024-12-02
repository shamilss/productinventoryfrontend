import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWarehouse } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <>
      <div id='footer' className='container-fluid px-3 border-top border-4 border-dark rounded py-4'>

<div className='row'>
  <div className="col-md-5 px-5">
  <h3><FontAwesomeIcon className='me-3' icon={faWarehouse} />PRODUCT INVENTORY</h3>
  <p className='py-2' style={{textAlign:'justify'}} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellendus odio numquam nam saepe tempore facilis quos sed ipsa repudiandae deleniti exercitationem quam qui eos nisi magni ut a Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
  <div className="col-md-2 px-5">
    <h3>Guides</h3>
    <div className='py-2'>
      <p>React</p>
      <p>React Bootstrap</p>
      <p>Bootswatch</p>
    </div>
  </div>
  <div className="col-md-5 px-5 mt-3 mt-md-0">
  <h3>Contact Us</h3>
  <div className='d-flex py-3'>
    <input className='form-control me-2' type='email' placeholder='Email Id'></input>
    <button className='btn bg-warning text-light ms-2'>Subscribe</button>
  </div>
  <div className='d-flex justify-content-between py-3'>
  <FontAwesomeIcon icon={faInstagram} size='2xl' />
  <FontAwesomeIcon icon={faXTwitter} size='2xl' />
  <FontAwesomeIcon icon={faFacebookF} size='2xl' />
  <FontAwesomeIcon icon={faLinkedinIn} size='2xl' />
  <FontAwesomeIcon icon={faWhatsapp} size='2xl' />
  
  </div>
  </div>
</div>


</div>
    </>
  )
}

export default Footer
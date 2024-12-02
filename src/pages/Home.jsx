import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { productAddApi, productDeleteApi, productEditApi, productGetApi, productUpdateApi } from '../services/allApi';

function Home() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [view, setView] = useState(false);
    const handleCloseView = () => setView(false);
    const handleShowView = () => setView(true);
    const [addStatus,setAddStatus]=useState({})
    const [deleteStatus,setDeleteStatus]=useState({})
    const [getProduct, setGetProduct] = useState([])
    const [productDetails, setProductDetails] = useState({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: ''
    })
    console.log(productDetails);
    const getAllProduct = async () => {
      const result = await productGetApi()    
      setGetProduct(result.data)
    }
  
    useEffect(()=>{getAllProduct()},[addStatus,deleteStatus])
  
    const handleClear = () => {
      setProductDetails({
        name: '',
        category: '',
        price: '',
        stock: '',
        description: ''
      })
    }
  
    const handleAdd = async () => {
      const { name, category, price, stock, description } = productDetails
      if (!name || !category || !price || !stock || !description) {
        toast.info('Please fill the form completely')
      }
      else {
        const result = await productAddApi({ name, category, price, stock, description })
        console.log(result);
        if (result.status >= 200 && result.status < 300) {
          toast.success('Product Added Successfully')
          handleClose()
          handleClear()
          setAddStatus(result)
        }
        else {
          toast.error('Something Went Wrong')
          handleClear()
        }
      }
    }
    const handleDelete=async(id)=>{
        const result=await productDeleteApi(id)
        console.log(result);
        if(result.status>=200&&result.status<300){
            toast.success('Product Deleted Successfully')
            setDeleteStatus(result)
        }
        else{
            toast.error('Something Went Wrong') 
        }

    }
    const handleEdit=async(id)=>{
        const result=await productEditApi(id)
        setProductDetails(result.data)
        handleShowView()
    }
const handleModal=()=>{
    handleClear()
    handleCloseView()
}
  return (
    <>

<div id='main' className='px-5 pt-4 w-100'>
          <div className='w-100 d-flex justify-content-center'>
            <Button className='btn p-3' variant="primary" onClick={handleShow}>
              Add New Product
            </Button>
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TextField onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })} value={productDetails.name} type='text' className='form-control' id="outlined-basic" placeholder='Product Name' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })} value={productDetails.category} type='text' className='form-control my-3' id="outlined-basic" placeholder='Category Name' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })} value={productDetails.price} type='number' className='form-control' id="outlined-basic" placeholder='Price' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, stock: e.target.value })} value={productDetails.stock} type='number' className='form-control my-3' id="outlined-basic" placeholder='Stock Quantity' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })} value={productDetails.description} type='text' className='form-control' id="outlined-basic" placeholder='Description' variant="outlined" />
            </Modal.Body>
            <Modal.Footer>
              <Button className='btn' variant="danger" onClick={handleClear}>
                Cancel
              </Button>
              <Button className='btn' variant="success" onClick={handleAdd}>
                Add Product
              </Button>
            </Modal.Footer>
          </Modal>
          {getProduct.length > 0 ?
            <div className='table-responsive-md px-5 pt-4 pb-4'>
              <table id='customtable' className='table table-bordered border-dark'>
                <thead>
                  <tr>
                    <th>Sl No</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock Quantity</th>
                    <th>Description</th>
                    <th>Action</th>
                  </tr>

                </thead>
                <tbody>
                  {getProduct?.map((item,index)=>
                   <tr>
                   <td>{index+1}</td>
                   <td>{item?.name}</td>
                   <td>{item?.category}</td>
                   <td>{item?.price}</td>
                   <td>{item?.stock}</td>
                   <td>{item?.description}</td>
                   <td className=''>

                     <button onClick={()=>handleEdit(item?.id)} className='bg-warning btn form-control' >Edit</button>
                     <button onClick={()=>handleDelete(item?.id)} className='bg-danger btn form-control mt-2' >Delete</button>

                   </td>
                 </tr>
                  )}
                 
                </tbody>
              </table>
            </div>
            :
            <div className='container-fluid'>
              <h2 className='text-center mt-5'>No Products Added</h2>
            </div>




          }


        </div>

        
        <Modal show={view} onHide={handleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <TextField onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })} value={productDetails.name} type='text' className='form-control' id="outlined-basic" placeholder='Product Name' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })} value={productDetails.category} type='text' className='form-control my-3' id="outlined-basic" placeholder='Category Name' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })} value={productDetails.price} type='number' className='form-control' id="outlined-basic" placeholder='Price' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, stock: e.target.value })} value={productDetails.stock} type='number' className='form-control my-3' id="outlined-basic" placeholder='Stock Quantity' variant="outlined" />
              <TextField onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })} value={productDetails.description} type='text' className='form-control' id="outlined-basic" placeholder='Description' variant="outlined" />
            </Modal.Body>
            <Modal.Footer>
              <Button className='btn' variant="danger" onClick={handleClear}>
                Cancel
              </Button>
              <Button className='btn' variant="success">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

      
        <ToastContainer position='top-center' theme='colored' autoClose={2000} hideProgressBar={false} />
    
    </>
  )
}

export default Home
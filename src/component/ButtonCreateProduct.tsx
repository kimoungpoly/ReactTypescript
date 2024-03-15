'use client';
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react'; 
import FromCreateProduct, { AddProducts } from './FromCreateProduct';

const ButtonCreateProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  
  function getDataForm(product: AddProducts){
    console.log(product); 
  }
  async function createProduct(product: AddProducts){
    setOpenModal(true);
    try{
      const { title, price, description, category, image } = product;
      const response = await fetch('https://fakestoreapi.com/products',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, price, description, category, image })
      });
      const res = await response.json();
      console.log(res);
    } catch(error) {
      console.log(error);
    } finally {
      setOpenModal(false);
    }
  }
  
  return (
    <>
      <div className='flex justify-center m-5 w-full'>
        <Button onClick={() => setOpenModal(true)} color="blue">Create Product</Button>
      </div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <FromCreateProduct getDataForm={getDataForm} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={createProduct}>Create</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ButtonCreateProduct;

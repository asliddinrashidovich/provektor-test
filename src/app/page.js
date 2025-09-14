import AddProduct from '@/components/addProduct'
import Products from '@/components/products'
import React from 'react'

function Page() {
  return (
    <div className='p-[50px]'>
      <h2 className='text-center text-[25px] font-[600]'>Provektor test</h2>
      <div className='flex'>
        <Products/>
        <AddProduct/>
      </div>
    </div>
  )
}

export default Page
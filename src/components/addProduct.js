"use client"

import axios from 'axios'
import React, { useState } from 'react'

function AddProduct() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    const addProduct = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post("/api/AddProduct", {name, description, price, category})
            console.log(res)
        } catch(err) {
            console.log(err)
        }
        
    }
  return (
    <div className='w-[30%] px-[20px]'>
        <h2 className='my-[20px] font-[500]'>Add Product</h2>
        <form onSubmit={addProduct}>
            <label htmlFor="name">
                <span>Name:</span>
                <input value={name} onChange={(e) => setName(e.target.value)} required type="text" name='name' className='w-full border-[1px] rounded-[4px] border-[#333] mb-[15px]'/>
            </label>
            <label htmlFor="description">
                <span>Description:</span>
                <input value={description} onChange={(e) => setDescription(e.target.value)} required type="text" name='description' className='w-full border-[1px] rounded-[4px] border-[#333]  mb-[15px]'/>
            </label>
            <label htmlFor="price">
                <span>Price:</span>
                <input value={price} onChange={(e) => setPrice(e.target.value)} required type="number" name='price' className='w-full border-[1px] rounded-[4px] border-[#333]  mb-[15px]'/>
            </label>
            <label htmlFor="category">
                <span>Category:</span>
                <input value={category} onChange={(e) => setCategory(e.target.value)} required type="number" name='text' className='w-full border-[1px] rounded-[4px] border-[#333]  mb-[15px]'/>
            </label>
            <button className='w-full rounded-[5px] border-[1px] bg-[#777] cursor-pointer'>Add</button>
        </form>
    </div>
  )
}

export default AddProduct
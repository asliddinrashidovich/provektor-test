"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Products() {
    const [data, setData] = useState([])

    useEffect(() => {   
        axios.get("/api/Product").then((res) => {
          setData(res)
        }).catch(err => {
          console.log(err)
        })
    }, [])
    console.log(data)
  return (
    <div className='grid grid-cols-3 w-[70%]'>
      {data?.data?.map(item => (
        <div key={item.id} className='cursor-pointer rounded-[10px] p-[10px] m-[10px] border-[1px] '>
          <h3 className='font-[500]'>{item.name}</h3>
          <p className='text-[15px] font-[400] mb-[10px]'>{item.description}</p>
          <p className='text-[15px] font-[400] mb-[20px]'>Category: {item.category}</p>
          <h3 className='font-[500]'>Price: ${item.price}</h3>
          <h3 className='font-[300] text-[15px]'>{item.createdAt.slice(0, 4)}/{item.createdAt.slice(5,7)}/{item.createdAt.slice(8,10)}</h3>
        </div>
      ))}
    </div>
  )
}

export default Products
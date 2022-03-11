import Image from 'next/image'
import React from 'react'

export  const getStaticProps = async()=>{
     const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return {
        props: {data}
    }
}

const index = ({data}) => {
  return (
    <div>
        <h1>totat products {data.length}</h1>

        {
            data.map(product => (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <Image width={600} height={600}src={product.image} alt="" />
                </div>
            ))
        }
    </div>
  )
}
export  default index; 
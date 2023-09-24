import { useState } from "react"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Product(){

    const data = useLoaderData()

    // const[ product , setProduct ] = useState()
    // const[ productDesc , setProductDesc ] = useState()

    // useEffect(()=>{
    //     const ProductJson =  fetch('https://dummyjson.com/products/1').then((response)=> response.json())
    //     .then((result)=>{
    //         console.log(result)
    //         setProduct(result.title)
    //         setProductDesc(result.description)
    //     })
       
       
    // }, [])

    console.log("data: " +(data))
    return( 

        <div className="text-xl p-4 text-center bg-gray-500 text-white">
            <h1>Product Name : {data.title}</h1>
            <p>Product Discription : {data.description}</p> 
        </div>
    )

}

export default Product;


export const GetProductDetails = async ()=>{
    // console.log('Getting Product Details')
    // console.log('Getting Product Details',data)

    const result =  await fetch(`https://dummyjson.com/products/1`).then((response)=> response.json()).then((result)=>{
            return result
        })

        return result
}
import React from "react"
import { useParams } from "react-router-dom"


function User(){

    const {userId} = useParams()

    return (
        <div className="bg-gray-200 text-xl text-orange-700 text-center p-4 ">
          User Id :  {userId} 
        </div>
    )
}

export default User
import { useState ,useCallback } from 'react'

function App() {

  const [length , setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword  ] = useState('')

  const passwordGenerator = useCallback(()=>{
      str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numAllowed) str += '1234567890'
      if(charAllowed) str += '!@#$%^&*()_+'

      for (let i = 1; i <= length; i++) {
        let char = Math.floor((Math.random() * str.length + 1))
          let pass = str.charAt(char)
      } 

      setPassword(pass)
      
  }, [length ,numAllowed, charAllowed, setPassword])

  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg text-center px-4 my-8 bg-gray-700  text-white '>
      test ggggggggggg g      
      </div>

     
    </>
  )
}

export default App

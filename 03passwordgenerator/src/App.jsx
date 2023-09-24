import { useRef } from 'react'
import { useEffect } from 'react'
import { useState ,useCallback } from 'react'

function App() {

  const [length , setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password , setPassword  ] = useState('')

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
      let pass = ''
     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
      if(numAllowed) str += '1234567890'
      if(charAllowed) str += '!@#$%^&*()_+'

      for (let i = 1; i <= length; i++) {
        let char = Math.floor((Math.random() * str.length + 1))
           pass += str.charAt(char)
      } 

      setPassword(pass)
      
  }, [length ,numAllowed, charAllowed, setPassword])


  const copyPasswordToClipboard = useCallback(()=>{

    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    
    window.navigator.clipboard.writeText(password)

  })


  useEffect(()=>{

    passwordGenerator()

  }, [length ,numAllowed, charAllowed, passwordGenerator])

  

  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg text-center px-4 py-4 my-8 bg-gray-700  text-white '>
      <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 mt-3' >
          <input type="text" ref={passwordRef}  placeholder='password' value={password} className='outline-none py-1 px-3 w-full text-red-500'
            readOnly
          />
          <button type="button" className='bg-blue-600 text-white px-2 py-1 ' onClick={copyPasswordToClipboard}> Copy</button>
          </div>   

      <div  className='flex text-sm gap-x-4'
      >
        <div className='flex text-center gap-x-1'>
          <input type="range" value={length} className='cursor-pointer' min={8} max={100} onChange={(e)=> {setLength(e.target.value)}} />
          <label>Length : {length}</label>
        </div>

        <div className='flex gap-x-1 text-center'>
          <input type="checkbox" name="" id="checkbox1"  defaultChecked={numAllowed} onChange={()=>{setNumAllowed(prev => !prev )}} />
          <label htmlFor="">Numbers</label>
        </div>

        <div className='flex gap-x-1 text-center'>
          <input type="checkbox" name="" id="checkbox2"  defaultChecked={charAllowed} onChange={()=>{setCharAllowed(prev => !prev )}} />
          <label htmlFor="">Characters</label>
        </div>

      </div>

      </div>
    </>
  )
}

export default App

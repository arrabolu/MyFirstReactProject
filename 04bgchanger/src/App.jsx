
import { useState } from 'react'
import './App.css'



function App() {
  const [color , setColor] = useState('red')

  return (
  <div className='w-full h-screen duration-75' style={{backgroundColor : color}}>
        <div className='bottom-10 flex justify-center flex-wrap fixed left-0 right-0 px-3 ' >

          <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-xl '>
                    <button className='rounded px-2 py-1 text-white shadow-lg' style={{backgroundColor : 'red'}} onClick={()=>setColor('red')}>Red</button>
                    <button className='rounded px-2 py-1 text-white shadow-lg' style={{backgroundColor : 'green'}} onClick={()=>setColor('green')} >Green</button>
                    <button className='rounded px-2 py-1 text-white shadow-2xl' style={{backgroundColor : 'blue'}} onClick={()=>setColor('blue')} >Blue</button>
                    <button className='rounded px-2 py-1 text-white shadow-2xl' style={{backgroundColor : 'orange'}} onClick={()=>setColor('orange')} >Orange</button>
                    <button className='rounded px-2 py-1 text-white shadow-2xl' style={{backgroundColor : 'yellow'}} onClick={()=>setColor('yellow')} >Yellow</button>
                    <button className='rounded px-2 py-1 text-white shadow-2xl' style={{backgroundColor : 'olive'}} onClick={()=>setColor('olive')} >Olive</button>
                    <button className='rounded px-2 py-1 text-white shadow-lg' style={{backgroundColor : 'gray'}} onClick={()=>setColor('gray')} >Gray</button>
                    <button className='rounded px-2 py-1 text-black shadow-lg' style={{backgroundColor : 'pink'}} onClick={()=>setColor('pink')} >Pink</button>
                    <button className='rounded px-2 py-1 text-white shadow-sm' style={{backgroundColor : 'purple'}} onClick={()=>setColor('purple')} >Purple</button>
                    <button className='rounded px-2 py-1 text-black shadow-xl' style={{backgroundColor : 'white'}} onClick={()=>setColor('white')} >White</button>
                    <button className='rounded px-2 py-1 text-white shadow-sm' style={{backgroundColor : 'black'}} onClick={()=>setColor('black')} >Black</button>
          </div>
          {/* <button type="button" className='px-3 py-1 rounded  bg-red-600 ' >red</button>
          <button type="button" className='px-3 py-1 rounded  bg-green-600 '  >green</button>
          <button type="button" className='px-3 py-1 rounded  bg-blue-600 '  >Blue</button> */}
        </div>
  </div>

    
  )
}

export default App

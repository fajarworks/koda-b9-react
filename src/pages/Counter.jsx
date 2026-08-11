import React from 'react'

const Counter = () => {
    const [num, setNum] = React.useState(0)

  return (
    <>
    <div className='flex  flex-col gap-2 justify-center items-center mx-auto min-h-screen bg-orange-50'>
        <h1 className='font-bold text-2xl text-white bg-orange-900  p-2 rounded-lg shadow-2xl'>Counter Button</h1>
        <div className='flex gap-2 items-center shadow-md px-5 py-7 rounded-full bg-orange-300'>
            <button onClick={()=>{
                if (num > 0) {

                    setNum(num - 1)
                }
            }} className=' rounded-full cursor-pointer px-3 py-1.5 bg-red-500 text-white font-medium'>Decrease</button>
            <span className='px-6 py-1 text-xl rounded-full bg-orange-100 font-bold text-orange-900'>{num}</span>
            <button onClick={()=>{
                if(num < 10) {
                    
                    setNum(num + 1)
                }   
            }} className=' rounded-full cursor-pointer px-3 py-1.5 bg-green-500 text-white shadow-lg font-medium'>Increase</button>
            </div>
    </div>
    </>
  )
}

export default Counter
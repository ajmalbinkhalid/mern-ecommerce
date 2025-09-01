import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-3  bg-gray-100 p-10 gap-5'>
        <form className=' flex flex-col gap-4 col-span-2' action="">
            <h1 className='text-4xl'>Checkout</h1>
           <div>
                <input className='bg-white p-2' type="text" placeholder='First Name'/>
                <input className='bg-white p-2' type="text" placeholder='Last Name'/>
           </div>
            <input className='bg-white p-2' type="text" placeholder='Phone Number'/>
            <input className='bg-white p-2' type="text" placeholder='Email Address'/>
            <input className='bg-white p-2' type="text" placeholder='Address'/>
            <input className='bg-white p-2' type="text" placeholder='Zip Code'/>
            <select className='bg-white p-2' name="" id="">
                <option value="country" disabled selected>Country/Region</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="India">India</option>
                <option value="Qatar">Qatar</option>
                <option value="UAE">UAE</option>
                <option value="Oman">Oman</option>
            </select>
            <button className='bg-black text-white py-2 rounded-2xl'>Place Order</button>
        </form>
        <div className='col-span-1 flex flex-col gap-4'>
           <h1 className='text-3xl'>Order Summary</h1>
           <div className='flex justify-between'>
               <p>Item Total</p>
               <span>0</span>
           </div>
           <div className='flex justify-between'>
               <p>Shipping</p>
               <span>0</span>
           </div>
           <div className='flex justify-between'>
               <p>Total</p>
               <span>0</span>
           </div>
        </div>
    </div>
  )
}

export default page
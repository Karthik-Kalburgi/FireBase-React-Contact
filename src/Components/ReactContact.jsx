import React, { useState } from 'react'

const reactContact = () => {
  const[user,setUser]=useState({
    name:'',
    email:'',
    phone:'',
    address:'',
    message:'', 
  })
  let name,value;
  const getUserData=(e)=>{
    name=e.target.name; 
    value=e.target.value;

    setUser({...user, [name]: value});
  }
  const postData =(e)=>{
    e.preventDefault();

  }
  return (
    
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
    <p className="text-center text-gray-500 mb-6">For any queries, contact us 24/7</p>
    <form  className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
        <input
          type="text"
          placeholder='Enter Your Name'
          value={user.name}
          onChange={getUserData}
          id="name"
          name="name"
        
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
        <input
          type="email"
          placeholder='Enter Your Email.'
          value={user.email}
          onChange={getUserData}
          id="email"
          name="email"
         
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <input
          type="text"
          placeholder='Enter Your Mobile Number'
          value={user.phone}
          onChange={getUserData}
          id="phone"
          name="phone"
        
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          placeholder='Enter Your Address'
          value={user.address}
          onChange={getUserData}
          id="address"
          name="address"
        
          required
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder='Enter Your Message'
          value={user.message}
          onChange={getUserData}
        
          required
          rows="4"
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={postData}>
          Send Message
        </button>
      </div>
    </form>
  </div>
  )
}

export default reactContact
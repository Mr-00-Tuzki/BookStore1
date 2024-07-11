import React from 'react'

function contact() {
  return (
    <>
    <h1 className="heading">
    <span className='flex items-center justify-center text-5xl text-black dark:text-white pt-[150px]'>Contact_<span className='text-warning flex items-center justify-center 
    text-5xl dark:bg-slate-900 space-between'>{" "}Me :)</span></span> 
  </h1>
<section className="flex h-screen items-center justify-center light:bg-current dark:text-white text-black" id="contact">
  <div className="row flex flex-col md:flex-row">
    <div className="content mb-8 md:mb-0 md:w-1/2">
      <h3 className="title text-xl font-semibold mb-4">Contact Info</h3>
      <div className="info space-y-3">
        <h3 className="flex items-center">
          <i className="fas fa-envelope mr-2 cursor-pointer"></i>tushar834001@gmail.com
        </h3>
        <h3 className="flex items-center">
          <i className="fas fa-phone mr-2"></i>+91 6205249822
        </h3>
        <h3 className="flex items-center">
          <i className="fas fa-phone mr-2"></i>+91 8809380860
        </h3>
        <h3 className="flex items-center">
          <i className="fas fa-map-marker-alt mr-2"></i>Ranchi, Jharkhand - 834001
        </h3>
      </div>
    </div>
    <form className="md:w-1/2 space-y-4">
      <input
        type="text"
        placeholder="Name"
        className="box p-2 border border-gray-300 rounded w-full dark:bg-slate-900"
      />
      <input
        type="email"
        placeholder="Email"
        className="box p-2 border border-gray-300 rounded w-full dark:bg-slate-900"
      />
      <input
        type="text"
        placeholder="Subject"
        className="box p-2 border border-gray-300 rounded w-full  dark:bg-slate-900"
      />
      <textarea
        name="message"
        rows="10"
        className="box p-2 border border-gray-300 rounded w-full dark:bg-slate-900"
        placeholder="Message"
      ></textarea>
      <button
        type="submit"
        className="btn p-2 bg-blue-500 text-white rounded flex items-center justify-center"
      >
        Send <i className="fas fa-paper-plane ml-2"></i>
      </button>
    </form>
  </div>
</section>
    </>
  )
}

export default contact
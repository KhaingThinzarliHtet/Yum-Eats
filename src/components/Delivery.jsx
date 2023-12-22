
import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h3 className="text-orange-500 font-bold text-2xl text-center">Quick Delivery</h3>
      <div className='w-[1520px] mx-auto grid md:grid-cols-2'>
        <img src="https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp" alt="" className="w-[550px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className='text-[#00df9a] font-bold'>Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Limited Convenience on-demand</h1>
          <p className='text-justify pe-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ex doloribus quos rerum labore adipisci. Itaque soluta harum autem? Est iste, deleniti cupiditate perspiciatis expedita numquam amet beatae accusantium provident!
          Quidem non quia laborum id itaque repudiandae quasi doloribus eum, et neque autem aperiam hic, inventore, doloremque optio earum illum repellat dicta libero quam est quaerat omnis. Cumque, eius in?
          Explicabo doloremque repudiandae cum est pariatur accusamus fugit fugiat debitis reiciendis similique sequi error, excepturi voluptas saepe! Consequatur, repudiandae provident sunt laboriosam quis ad rerum corrupti neque numquam explicabo iure.</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Delivery

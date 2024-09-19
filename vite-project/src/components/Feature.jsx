/*import React from 'react'
import profoma from "../assets/proforma-invoice.png"
import coin from "../assets/coin-cash.png";
import payments from "../assets/payments.png";
import funds from "../assets/funds.png";
import invoice from "../assets/invoice.png";
import expense from "../assets/expense.png";



const Feature = () => {
    
  return (
    <div className='max-w-7xl mx-auto pt-20 px-6 mb-16'>
         <h1 className='text-center max-w-2xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800'>Finance management for MSME</h1>
         <p className='max-w-2xl text-center mx-auto text-gray-500 mt-6'>Finance management for micro, small, medium and enterprise business gets better with Orco Accounts. It’s probably the best help we could do for any business to achieve excellency. Don’t hesitate to give it a try today and you will fall in love with it!</p>
         <div className='max-w-6xl mx-auto gap-4 grid md:grid-cols-2 lg:grid-cols-3 my-16'>
             <div className='bg-white p-8  rounded-md shadow-xl border flex flex-col justify-center  items-center mx-auto '>
                <img src={profoma} className='w-20 h-20'/>  
                <h3 className='text-2xl font-bold  my-3'>Proforma Invoice</h3>
                <p className='   text-gray-500'>Do you know many opportunities gets lost due to non-availability of Proforma invoice? Not Anymore. Confidently create proforma invoice in an easy and automated way.</p>
             </div>
             <div className='bg-white p-8  rounded-md shadow-xl border flex flex-col justify-center items-center mx-auto '>
                <img src={invoice} className='w-20 h-20'/> 
                <h3 className='text-2xl font-bold my-3'>Invoice</h3>
                <p className=' text-gray-500'>Create invoices in simple steps and as per your taxation applicability and also create repeat invoices as per needs in few seconds.</p>
             </div><div className='bg-white p-8 border  rounded-md shadow-xl  flex flex-col justify-center items-center mx-auto '>
                <img src={payments} className='w-20 h-20'/> 
                <h3 className='text-2xl font-bold  my-3'>Payments</h3>
                <p className='   text-gray-500'>Track your payments seamlessly. Easy options to follow up with non-payments or pending payments.</p>
             </div>
             <div className='bg-white p-8  rounded-md shadow-xl border  flex flex-col justify-center  items-center mx-auto '>
                <img src={funds} className='w-20 h-20'/> 
                <h3 className='text-2xl font-bold  my-3'>Funds</h3>
                <p className='   text-gray-500'>Maintain funds you brought in and taken out for your small and medium business in quick way.</p>
             </div>
             <div className='bg-white p-8  rounded-md shadow-xl border  flex flex-col justify-center items-center mx-auto '>
                <img src={expense} className='w-20 h-20'/> 
                <h3 className='text-2xl font-bold  my-3'>Expense</h3>
                <p className='  text-gray-500'>Expense tracking made simple and quicker with options to track expense within expense, Sub expense.</p>
             </div>
             <div className='bg-white p-8  rounded-md shadow-xl border flex flex-col items-center justify-center mx-auto '>
                <img src={coin} className='w-20 h-20'/> 
                <h3 className=' font-semibold  my-3'>Coin Cash</h3>
                <p className='   text-gray-500'>Spending regularly or occasionally in coins or cash for your micro, small and medium business. Don’t worry we have options to track it effectively!</p>
             </div>
            
         </div>
    </div>
  )
}

export default Feature */

import React from 'react';
import profoma from '../assets/proforma-invoice.png';
import coin from '../assets/coin-cash.png';
import payments from '../assets/payments.png';
import funds from '../assets/funds.png';
import invoice from '../assets/invoice.png';
import expense from '../assets/expense.png';

const features = [
  {
    img: profoma,
    title: 'Proforma Invoice',
    description: 'Do you know many opportunities get lost due to non-availability of Proforma invoice? Not Anymore. Confidently create proforma invoice in an easy and automated way.'
  },
  {
    img: invoice,
    title: 'Invoice',
    description: 'Create invoices in simple steps and as per your taxation applicability. Also, create repeat invoices as needed in just a few seconds.'
  },
  {
    img: payments,
    title: 'Payments',
    description: 'Track your payments seamlessly. Easy options to follow up with non-payments or pending payments.'
  },
  {
    img: funds,
    title: 'Funds',
    description: 'Maintain funds brought in and taken out for your small and medium business in a quick and efficient way.'
  },
  {
    img: expense,
    title: 'Expense',
    description: 'Expense tracking made simple with options to track expenses within sub-expenses, making it quicker to manage your costs.'
  },
  {
    img: coin,
    title: 'Coin Cash',
    description: 'Spending regularly or occasionally in coins or cash for your business? Don’t worry, we have options to track it effectively!'
  }
];

const FeatureCard = ({ img, title, description }) => (
  <div className="bg-white p-8 rounded-md hover:scale-105  duration-500 ease-in-out shadow-xl border flex flex-col justify-center items-center mx-auto">
    <img src={img} alt={title} className="w-20 h-20" />
    <h3 className="text-lg font-bold my-3">{title}</h3>
    <p className="text-gray-500 text-center">{description}</p>
  </div>
);

const Feature = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6 mb-16">
        <h2 className=" w-[100px] my-3 mx-auto bg-[#008000] text-center rounded-full py-2 px-4 font-bold text-white">Features</h2>
      <h1 className="text-center max-w-2xl mx-auto text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800">
        Finance management for MSME
      </h1>
      <p className="max-w-2xl text-center mx-auto text-gray-500 mt-6">
        Finance management for micro, small, medium and enterprise business gets better with Orco Accounts. It’s probably the best help we could do for any business to achieve excellency. Don’t hesitate to give it a try today and you will fall in love with it!
      </p>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 my-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            img={feature.img}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Feature;

import React, {useState} from 'react'
import backgroundImage from '../assets/images/giraffe.jpg'
import camping from '../assets/images/banner2.jpg'
import kit from '../assets/images/FirstAidKit.jpg'
import van from '../assets/images/Van.jpg'
import monkeys from '../assets/images/monkeys.jpg'
import rhinos from '../assets/images/Rhinos.jpg'
import cows from '../assets/images/cows.jpg'
import deers from  '../assets/images/deers.jpg'
import {FaQuoteLeft} from 'react-icons/fa'
import { TourismData, ToursimColumns } from '../data'
import DataTable from 'react-data-table-component'
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useAuth } from '@pangeacyber/react-auth'
const items = [
    {
      name: "Camping Backpack",
      price: 100,
      description: "Enhance your outdoor adventures with high-quality camping bags for essential item storage.",
      image: camping,
    },
    {
      name: "Emergency Medical Kit",
      price: 75,
      description: "Get one of our essential first aid kits for safety during your trips.",
      image: kit,
    },
    {
      name: "Traveling Car",
      price: 200,
      description: "Rent our comfortable and reliable traveling cars for your journeys.",
      image: van,
    },
    // Add more items as needed
];
function Home() {
    
    const {login} = useAuth();
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
    const [isNavOpen, setIsNavOpen] = useState(false);
    const toggleNav = ()=>{
        setIsNavOpen(!isNavOpen)
    }
  return (
    <>
        {/* Hero section */}
        <div id="home" className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="bg-[#040D12] bg-opacity-60 absolute inset-0">
                <div className='container mx-auto flex justify-between items-center px-4 text-white py-5'>
                    {/* Hamburger Menu (for small screens) */}
                    <div className="md:hidden">
                        <button className="text-white" onClick={toggleNav}>
                            <FiMenu size={30}/>

                        </button>
                        <ul className={`${isNavOpen?'flex space-x-6 items-center':'hidden'}`}>
                            <li className='hover:text-[#EB1D36]'><a href="#home">Home</a></li>
                            <li className='hover:text-[#EB1D36]'><a href="#about">About</a></li>
                            <li className='hover:text-[#EB1D36]'><a href="#services">Services</a></li>
                            <li className='hover:text-[#EB1D36]'><a href="#upcoming">Upcoming</a></li>
                            <button className="bg-[#EB1D36] hover:bg-red-600 text-white font-bold py-2 px-4 uppercase rounded-full">
                                <a href="#contact">Contact Us</a>
                            </button>
                        </ul>
                        
                    </div>
                    {/* Left Side (Navbar) */}
                    <div className="hidden md:block">
                        <h1 className="text-2xl font-bold uppercase">E-Toursim</h1>
                        <p className='text-lg uppercase tracking-widest'>UGANDA</p>
                    </div>

                   
                    {/* Right Side (Navigation Links) */}
                    <div className={`hidden md:block`}>
                        <nav className="md:flex items-center space-x-8 text-lg">
                            <ul className="flex space-x-8">
                                <li className='hover:text-[#EB1D36]'><a href="#home">Home</a></li>
                                <li className='hover:text-[#EB1D36]'><a href="#about">About</a></li>
                                <li className='hover:text-[#EB1D36]'><a href="#services">Services</a></li>
                                <li className='hover:text-[#EB1D36]'><a href="#upcoming">Upcoming</a></li>
                            </ul>
                            <button 
                                className="bg-[#EB1D36] hover:bg-red-600 text-white font-bold py-2 px-4 uppercase rounded-full"
                                onClick={login}
                            >
                                signup / login
                            </button>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center justify-center my-32 text-white">
                    <div className="text-center">
                        <p className="font-extrabold text-2xl tracking-tight">
                        Explore the Amazing Country 🇺🇬
                        </p>
                        <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mt-2"></p>
                        <p className="uppercase font-bold text-5xl tracking-widest my-10">The Pearl of Africa</p>
                        <button className="bg-[#EB1D36] hover:bg-[#C31228] transition duration-300 ease-in-out rounded-full px-5 py-2 mt-5 text-white text-lg">
                           <a href="#services">Learn more</a> 
                        </button>
                    </div>
                </div>

            </div>

        </div>
        {/* Quote section */}
        <div className="bg-white">
            <div className="container mx-auto py-12 px-4">
                <div className="text-center">
                <span className="text-2xl font-bold">
                    <FaQuoteLeft size={50} className='text-gray-600 mr-2'/>
                    "If we were meant to stay in one place, we’d have roots instead of feet."
                </span>
                <p className="mt-4 text-gray-600">- Rachel Wolchin</p>
                </div>
            </div>
        </div>

        {/* services section  */}
        <div className="bg-gray-100 py-24" id='services'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center uppercase mb-6">Our Services</h2>
                <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mt-2 mb-12"></p>
                <div className="flex flex-wrap justify-center">
                {items.map((item, index) => (
                    <div key={index} className="max-w-sm mx-4 mb-8 bg-white rounded-lg overflow-hidden shadow-2xl">
                    <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                    <div className="px-6 py-4">
                        <h3 className="text-xl font-bold mb-2">{`${item.name}s`}</h3>
                        <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                    <div className="px-6 py-4">
                        <button
                        onClick={login}
                        className="bg-[#EB1D36] hover:bg-[#C31228] transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded-full"
                        >
                        Order Now
                        </button>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>

        {/* The about us section  */}
        <section className="bg-white py-24" id='about'>
            <div className=" mx-16 grid md:grid-cols-3 space-x-20">
                <div className=''>
                    <h2 className="text-3xl font-bold mb-6 text-center md:text-left">ABOUT US</h2>
                    <p className="bg-[#EB1D36] h-[2px] m-auto md:m-0 w-20 mt-2 mb-12 md:mb-6"></p>
                    <p className="text-gray-700 mb-4 text-justify text-sm lg:text-base">
                        Welcome to <span className="text-[#EB1D36] font-semibold">E-Tourism Uganda</span>, where we make your Uganda adventure amazing!
                    </p>
                    <p className=" text-gray-700 mb-4 text-justify text-sm lg:text-base">
                        We love Uganda's beauty and culture. Our goal is to help you explore it sustainably.
                    </p>
                    <p className=" text-gray-700 mb-4 text-justify text-sm lg:text-base">
                        Our team is full of Uganda enthusiasts. We're here to assist you whether you want a wildlife safari, camping gear, or a tourist van for comfort.
                    </p>
                    <p className=" text-gray-700 mb-8 text-justify text-sm lg:text-base">
                        We're all about responsible travel, so your adventure is memorable and eco-friendly. Join us to uncover Uganda's heart and create your unique story.
                    </p>
                    <div className='flex justify-center md:justify-start text-sm lg:text-base'>
                        <a href="#services" className="bg-[#EB1D36] text-white font-bold py-3 px-8 rounded-full hover:bg-[#C31228] transition duration-300 ease-in-out block text-center md:inline-block ">
                            Check out our services
                        </a>
                    </div>

                </div>
                <div className="md:col-span-2 pt-12 md:pt-0">
                    <div className='md:flex md:space-x-5 space-y-5'>
                        <div className='flex flex-col space-y-5'>
                            <img src={cows} alt='Cows' className='rounded-xl w-full' />

                            {/* Use aspect-ratio to maintain aspect ratio */}
                            <div className="aspect-w-16 aspect-h-2 hidden md:block">
                                <img src={monkeys} alt="Uganda Tours" className='rounded-xl object-cover object-bottom' />
                            </div>
                        </div>
                        
                        <div className='flex flex-col space-y-5'>
                            {/* Use aspect-ratio to maintain aspect ratio */}
                            <div className="aspect-w-16 aspect-h-9">
                                <img src={deers} alt="Deers" className='rounded-xl object-cover object-bottom' />
                            </div>

                            <img src={rhinos} alt="Rhinos" className='rounded-xl' />
                        </div>
                    </div>
                </div>


            </div>
        </section>
        {/* Upcoming section */}

        <div className="bg-gray-100 py-24" id='upcoming'>
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center uppercase mb-6">Upcoming Tours</h2>
                <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mt-2 mb-12"></p>
                <DataTable
                    columns={ToursimColumns}
                    data={TourismData}
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                />
            </div>
        </div>

        {/* Footer Section */}
        <div className='bg-[#191919] py-24' id='contact'>
            <div className='container mx-auto text-center text-white'>
                <p>123 Fifth Avenue, Kampala, Uganda | Phone: 256-771-97-3013 | Email: E-Toursim@Uganda.com</p>
                <p className='mt-5'>Copyright © 2023 E-Tourism Uganda</p>
            </div>

        </div>


    </>

  )
}

export default Home
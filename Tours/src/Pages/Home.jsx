import React from 'react'
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
function Home() {
    const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <>
        {/* Hero section */}
        <div id="home" className="bg-cover bg-center h-screen" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className=" bg-[#040D12] bg-opacity-60 absolute inset-0">
                <div className='flex justify-between text-white px-10 pt-5'>
                    {/* Left Side (Navbar) */}
                    <div className="">
                        <h1 className="text-2xl font-bold uppercase tracking-tighter">Uganda Tourism</h1>
                        <p className='text-lg uppercase tracking-widest'>Adventures</p>
                    </div>
                    
                    {/* Right Side (Navigation Links) */}
                    <div className="">
                        <nav className="flex items-center space-x-8 text-lg">
                            <ul className="flex space-x-8">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#upcoming">Upcoming</a></li>
                            </ul>
                            <button className="bg-[#EB1D36] hover:bg-red-600 text-white font-bold py-2 px-4 uppercase rounded-full">
                                <a href="#contact">Contact Us</a>
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
                        <button className="bg-[#EB1D36] rounded-full px-5 py-2 mt-5 text-white text-lg">Learn more</button>
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
                    {/* Service Card 1: Selling Camping Bags */}
                    <div className="max-w-sm mx-4 mb-8 bg-white rounded-lg overflow-hidden shadow-2xl">
                        <img src={camping} alt="Camping Bags" className="w-full h-40 object-cover" />
                        <div className="px-6 py-4">
                            <h3 className="text-xl font-bold mb-2">Camping Backpacks</h3>
                            <p className="text-gray-700 text-sm">Enhance your outdoor adventures with high-quality camping bags for essential item storage.</p>
                        </div>
                        <div className="px-6 py-4">
                            <a href="#" className="bg-[#EB1D36] text-white font-bold py-2 px-4 rounded-full">
                                Order Now
                            </a>
                        </div>
                    </div>

                    {/* Service Card 2: Selling First Aid Kits */}
                    <div className="max-w-sm mx-4 mb-8 bg-white rounded-lg overflow-hidden shadow-2xl">
                        <img src={kit} alt="First Aid Kits" className="w-full h-40 object-cover" />
                        <div className="px-6 py-4">
                        <h3 className="text-xl font-bold mb-2">Emergency Medical Kits</h3>
                        <p className="text-gray-700 text-sm">Get one of our essential first aid kits for safety during your trips.</p>
                        </div>
                        <div className="px-6 py-4">
                        <a href="#" className="bg-[#EB1D36] text-white font-bold py-2 px-4 rounded-full">
                            Order Now
                        </a>
                        </div>
                    </div>

                    {/* Service Card 3: Traveling Car */}
                        <div className="max-w-sm mx-4 mb-8 bg-white rounded-lg overflow-hidden shadow-2xl">
                        <img src={van} alt="Traveling Car" className="w-full h-40 object-cover" />
                            <div className="px-6 py-4">
                            <h3 className="text-xl font-bold mb-2">Traveling Car</h3>
                            <p className="text-gray-700 text-sm">Rent our comfortable and reliable traveling cars for your journeys.</p>
                            </div>
                            <div className="px-6 py-4">
                            <a href="#" className="bg-[#EB1D36] text-white font-bold py-2 px-4 rounded-full">
                                Order Now
                            </a>
                            </div>
                        </div>
                </div>
            </div>
        </div>

        {/* The about us section  */}
        <section class="bg-white py-24" id='about'>
            <div class=" mx-16 grid grid-cols-3 space-x-20">
                <div className=''>
                    <h2 class="text-3xl font-bold mb-6 text-left">ABOUT US</h2>
                    <p className="bg-[#EB1D36] h-[2px] w-20 mt-2 mb-12"></p>
                    <p class="text-gray-700 mb-4 text-justify">
                        Welcome to <span class="text-[#EB1D36] font-semibold">UGANDA TOURS</span>, where we make your Uganda adventure amazing!
                    </p>
                    <p class=" text-gray-700 mb-4 text-justify">
                        We love Uganda's beauty and culture. Our goal is to help you explore it sustainably.
                    </p>
                    <p class=" text-gray-700 mb-4 text-justify">
                        Our team is full of Uganda enthusiasts. We're here to assist you whether you want a wildlife safari, camping gear, or a tourist van for comfort.
                    </p>
                    <p class=" text-gray-700 mb-8 text-justify">
                        We're all about responsible travel, so your adventure is memorable and eco-friendly. Join us to uncover Uganda's heart and create your unique story.
                    </p>
                    <a href="#services" class="bg-[#EB1D36] text-white font-bold py-3 px-8 rounded-full hover:bg-[#C31228] transition duration-300 ease-in-out block text-center md:inline-block">
                        Check out our services
                    </a>
                </div>
                <div class="col-span-2">
                    <div className='flex space-x-5'>
                        <div className='flex flex-col space-y-5'>
                            <img src={cows} alt='Cows' className=' rounded-xl w-full'/>
                            <img src={monkeys} alt="Uganda Tours" className='rounded-xl h-[400px] w-full object-cover object-bottom'/>     

                        </div>
                        <div className='flex flex-col space-y-5'>
                            <img src={deers} alt="Deers" className='rounded-xl h-[400px] w-full object-cover object-bottom'/>
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
                <p>123 Fifth Avenue, Kampala, Uganda | Phone: 256-123-456-3013 | Email: Uganda@Tours.com</p>
                <p className='mt-5'>Copyright © 2023 Uganda Tours</p>
            </div>

        </div>


    </>

  )
}

export default Home
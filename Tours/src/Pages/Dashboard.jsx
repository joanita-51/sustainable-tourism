import React, { useState } from 'react';
import {FaUserCircle} from 'react-icons/fa'
import {FiEdit2,FiEdit} from 'react-icons/fi'
import {BsGrid3X3,BsClockHistory} from 'react-icons/bs'
import {BiDetail,BiLogOut} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import EditProfileForm from '../components/EditProfileForm';
import { useAuth } from '@pangeacyber/react-auth';

function UserDashboard() {
  const [selectedSection, setSelectedSection]= useState('overview')
  const [bookingType, setBookingType] = useState('campingGear');
  const [bookingDate, setBookingDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);
  const [showOrderDetails, setShowOrderDetails] = useState(null);
  const {logout} = useAuth();
  const handleSidebarItemClick = (section) =>{
    setSelectedSection(section)
  }
  const handleBookingTypeChange = (event) => {
    setBookingType(event.target.value);
  };

  const handleDateChange = (event) => {
    setBookingDate(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleMakeBooking = () => {
    // Create a new booking and add it to the orders list
    const newOrder = {
      id: orders.length + 1,
      type: bookingType,
      date: bookingDate,
      quantity,
      status: 'Pending',
    };
    setOrders([...orders, newOrder]);

    // Reset form inputs after successful booking
    setBookingType('campingGear');
    setBookingDate('');
    setQuantity(1);

  };

  const handleViewOrderDetails = (order) => {
    setShowOrderDetails(order);
  };

  const handleDeleteOrder = (orderId) => {
    const updateOrders = orders.filter(order => order.id !==orderId);
    setOrders(updateOrders);
    setShowOrderDetails(null)
  }

  return (
    <div className="container mx-auto flex">
      {/* Left sidebar */}
      <div className="w-1/6 mx-8 ">
        <div className='flex justify-center my-5'>
          <FaUserCircle size={100} color='gray'/>

        </div>
        <div className='text-center'>
          <p >Joanita Nakityo</p>
        </div>
        <div 
          className='flex items-center justify-center gap-2 bg-[#459c6e] hover:bg-green-700 my-5 text-white rounded-lg py-2'
          onClick={() => handleSidebarItemClick('editProfile')}
        >
          <FiEdit2/>
          <span >Edit Profile</span>
        </div>

        <ul className='sp space-y-3 cursor-pointer'>
          <li 
            className={`mt-9 flex items-center gap-2 p-3 rounded-xl hover:bg-[#e2e0e086] ${selectedSection ==='overview'? 'bg-[#e2e0e086]':''}`}
            onClick={() => handleSidebarItemClick('overview')}
          >
            <BsGrid3X3/>
            <p>Overview</p>
          </li>
          <hr />
          <li 
            className={`flex items-center gap-2 p-3 rounded-xl hover:bg-[#e2e0e086] ${selectedSection === 'makeBooking' ? 'bg-[#e2e0e086]': ''}`}
            onClick={() => handleSidebarItemClick('makeBooking')}
          >
            <FiEdit/>
            <p>Make Booking</p>
          </li>
          <hr />
          <li 
            className={`flex items-center gap-2 p-3 rounded-xl hover:bg-[#e2e0e086] ${selectedSection === 'bookingHistory'? 'bg-[#e2e0e086]': ''}`}
            onClick={() => handleSidebarItemClick('bookingHistory')}
          >
            <BsClockHistory/>
            <p>Booking History</p>
          </li>
          <hr />
          <li 
            className={`flex items-center gap-2 p-3 rounded-xl hover:bg-[#e2e0e086] ${selectedSection === 'editProfile'? 'bg-[#e2e0e086]': ''}`}
            onClick={() => handleSidebarItemClick('editProfile')}
          >
            <BiDetail/>
            <p>Edit Profile</p>
          </li>
          <hr />
          <li 
            className={`flex items-center gap-2 p-3 rounded-xl hover:bg-[#e2e0e086] ${selectedSection === 'logout'? 'bg-[#e2e0e086]': ''}`}
            onClick={logout}>
            <BiLogOut/>
            <p>Logout</p>
          </li>
          <hr />
        </ul>

      </div>

      {/* Main Content */}
      <div className="flex-1 bg-[#f8f6f6] p-8 ">
        {selectedSection === 'overview' && (
          <div>
            <p className='text-xl font-sans font-medium'>Hi, Welcome back ! 👋</p>
            <div className='grid grid-cols-3 mt-10 mb-5 gap-11'>
              <div className="mb-6 col-span-2 bg-white p-5 rounded-xl shadow-lg">
                {/* ... Booking History Section ... */}
                <h2 className="text-xl font-bold mb-2 uppercase text-center">Booking History</h2>
                <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mb-12"></p>
                <table className="w-full border-collapse border">
                  <thead>
                    <tr>
                      <th className="border p-2 text-sm uppercase font-normal">Type</th>
                      <th className="border p-2 text-sm uppercase font-normal">Date</th>
                      <th className="border p-2 text-sm uppercase font-normal">Status</th>
                      <th className="border p-2 text-sm uppercase font-normal">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td className="border p-2 text-sm font-light">{order.type}</td>
                        <td className="border p-2 text-sm font-light">{order.date}</td>
                        <td className="border p-2 text-sm font-light">🔸{order.status}</td>
                        <td className="border p-2 text-sm font-light">
                          <button onClick={() => handleViewOrderDetails(order)} className="text-green-700 underline underline-offset-8">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
                {showOrderDetails && (
                    <div className='mb-4  bg-white p-5 rounded-xl shadow-lg'>
                      <h2 className="text-xl font-bold mb-2 uppercase text-center">Order Details</h2>
                      <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mb-12"></p>
                      <table className="w-full">
                        <tbody>
                          <tr>
                            <td className="py-2 text-sm uppercase">Service Type:</td>
                            <td className="py-2 text-sm font-light">{showOrderDetails.type}</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-sm uppercase">Date:</td>
                            <td className="py-2 text-sm font-light">{showOrderDetails.date}</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-sm uppercase">Quantity:</td>
                            <td className="py-2 text-sm font-light">{showOrderDetails.quantity}</td>
                          </tr>
                          <tr>
                            <td className="py-2 text-sm uppercase">Status:</td>
                            <td className="py-2 text-sm font-light">{showOrderDetails.status}</td>
                          </tr>
                        </tbody>
                      </table>

                    </div>
                    )}

            </div>
            <hr />
            <div className="my-10  bg-white p-5 rounded-xl shadow-xl">
              {/* Making New Bookings Section */}
              <h2 className="text-xl font-bold my-4 uppercase text-center">Make a New Booking</h2>
              <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mb-12"></p>
              <div className="mb-8 text-sm">
                <label className="block text-sm  uppercase font-normal mb-2" htmlFor="bookingType">
                  Select Service Type:
                </label>
                <select
                  id="bookingType"
                  value={bookingType}
                  onChange={handleBookingTypeChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="campingGear" className='py-3'>Camping Gear</option>
                  <option value="firstAidKit" className='py-10'>First Aid Kit</option>
                  <option value="travelingCar" className='py-10'>Traveling Car</option>
                </select>
              </div>
              <div className="mb-8 text-sm">
                <label className="block text-sm  uppercase font-normal mb-2" htmlFor="bookingDate">
                  Select Booking Date:
                </label>
                <input
                  type="date"
                  id="bookingDate"
                  value={bookingDate}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-8 text-sm">
                <label className="block text-sm  uppercase font-normal mb-2" htmlFor="quantity">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <button onClick={handleMakeBooking} className="bg-[#459c6e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
                Book Now
              </button>
            </div>
          </div>
        )}

        {/* make booking section */}
        {selectedSection === 'makeBooking' && (
          <div className="bg-white px-10 py-10 h-full rounded-xl shadow-xl">
            {/* Making New Bookings Section */}
            <h2 className="text-xl font-bold my-4 uppercase text-center">Make a New Booking</h2>
            <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mb-12"></p>
            <div className="mb-8 text-sm">
              <label className="block text-sm  uppercase font-normal mb-2" htmlFor="bookingType">
                Select Service Type:
              </label>
              <select
                id="bookingType"
                value={bookingType}
                onChange={handleBookingTypeChange}
                className="w-full p-2 border rounded"
              >
                <option value="campingGear" className='py-3'>Camping Gear</option>
                <option value="firstAidKit" className='py-10'>First Aid Kit</option>
                <option value="travelingCar" className='py-10'>Traveling Car</option>
              </select>
            </div>
            <div className="mb-8 text-sm">
              <label className="block text-sm  uppercase font-normal mb-2" htmlFor="bookingDate">
                Select Booking Date:
              </label>
              <input
                type="date"
                id="bookingDate"
                value={bookingDate}
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-8 text-sm">
              <label className="block text-sm  uppercase font-normal mb-2" htmlFor="quantity">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <button onClick={handleMakeBooking} className="bg-[#459c6e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
              Book Now
            </button>
          </div>          
        )}

        {/* Booking History section */}
        {selectedSection === 'bookingHistory' && (
          <div className="mb-6 col-span-2 bg-white h-full px-5 py-10 rounded-xl shadow-lg">
            {/* ... Booking History Section ... */}
            <h2 className="text-xl font-bold mb-2 uppercase text-center">Booking History</h2>
            <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mb-12"></p>
            <table className="w-full border-collapse border">
              <thead>
                <tr>
                  <th className="border p-2 text-sm uppercase font-normal text-left">Type</th>
                  <th className="border p-2 text-sm uppercase font-normal text-left">Date</th>
                  <th className="border p-2 text-sm uppercase font-normal text-left">Status</th>
                  <th className="border p-2 text-sm uppercase font-normal text-left">Quantity</th>
                  <th className="border p-2 text-sm uppercase font-normal text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="border p-2 text-sm font-light">{order.type}</td>
                    <td className="border p-2 text-sm font-light">{order.date}</td>
                    <td className="border p-2 text-sm font-light">🔸{order.status}</td>
                    <td className="border p-2 text-sm font-light">{order.quantity}</td>
                    <td className="border p-2 text-sm font-light">
                      <button onClick={() => handleDeleteOrder(order.id)} className="flex items-center gap-2 text-[#EB1D36]">
                        <AiOutlineDelete color='#EB1D36'/>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        
        )}

        {/* Edit Profile section */}
        {selectedSection === 'editProfile' && (
          <div className='my-10  bg-white p-5 rounded-xl shadow-xl h-full'>
              <h2 className="text-xl font-bold my-4 uppercase text-center">Edit Your Profile</h2>
              <p className="bg-[#EB1D36] h-[2px] w-20 mx-auto mb-12"></p>
            <EditProfileForm/>
          </div>
        )}

        {/* Logout section */}
        {selectedSection === 'logout' && (
          <div className='flex justify-center'>
            <p>Please wait for a moment ... </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserDashboard;

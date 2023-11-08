import React, { useState } from 'react';

function UserDashboard() {
  const [bookingType, setBookingType] = useState('campingGear');
  const [bookingDate, setBookingDate] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [orders, setOrders] = useState([]);
  const [showOrderDetails, setShowOrderDetails] = useState(null);

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
  };

  const handleViewOrderDetails = (order) => {
    setShowOrderDetails(order);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          {/* ... User Profile Section ... */}
          Welcome back Joanita! 👋
        </div>
        <hr />
        <div className='grid grid-cols-2 my-10'>
            <div className="mb-6">
            {/* ... Booking History Section ... */}
            <h2 className="text-xl font-bold mb-2">Booking History</h2>
            <ul>
                {orders.map((order) => (
                <li key={order.id}>
                    {order.type} - {order.date} ({order.status})
                    <button onClick={() => handleViewOrderDetails(order)} className="ml-2 text-[#EB1D36]">
                    View Details
                    </button>
                </li>
                ))}
            </ul>
            </div>
            {showOrderDetails && (
                <div className='mb-4'>
                    <h2 className="text-xl font-bold mb-2">Order Details</h2>
                    <p>Service Type: {showOrderDetails.type}</p>
                    <p>Date: {showOrderDetails.date}</p>
                    <p>Quantity: {showOrderDetails.quantity}</p>
                    <p>Status: {showOrderDetails.status}</p>
                </div>
                )}

        </div>
    <hr />
        <div className="my-10">
          {/* Making New Bookings Section */}
          <h2 className="text-xl font-bold my-4">Make a New Booking</h2>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="bookingType">
              Select Service Type:
            </label>
            <select
              id="bookingType"
              value={bookingType}
              onChange={handleBookingTypeChange}
              className="w-full p-2 border rounded"
            >
              <option value="campingGear">Camping Gear</option>
              <option value="firstAidKit">First Aid Kit</option>
              <option value="travelingCar">Traveling Car</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="bookingDate">
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
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="quantity">
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
          <button onClick={handleMakeBooking} className="bg-[#459c6e] hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

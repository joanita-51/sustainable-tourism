const BookNowButton = ({ onClick }) => (
    <button 
      onClick={onClick}
      className="bg-[#EB1D36] text-white font-bold py-2 px-4 rounded-full"
    >
      Book Now
    </button>
);

// Your handleBooking function can handle the booking action
function handleBooking(row) {
    // Add your logic here to handle the booking action for the selected row
    console.log(`Booking for ${row.destination}`);
}
export const ToursimColumns=[
    { name: 'Destination', 
      selector: row => row.destination, 
      sortable: true,
    },
    { name: 'Duration', 
      selector: row => row.duration,
      sortable: true, 
    },
    { name: 'Price', 
      selector: row => row.price, 
      sortable: true,
    },
    { name: 'Departure Dates', 
      selector: row => row.departureDates, 
      sortable: true,
      cell: (row) => (
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {row.departureDates}
        </div>
      ),
    },
    { name: 'Tour Highlights', selector: row => row.highlights, sortable: true,},
    { name: 'Inclusions', selector: row => row.inclusions, sortable: true,},
    { name: 'Exclusions', selector: row => row.exclusions, sortable: true,},
    { name: 'Availability', selector: row => row.availability, sortable: true,},
    { name: 'Book Now', selector: (row) => row.bookButton,sortable: true, cell: (row) => <BookNowButton onClick={() => handleBooking(row)} />,},
]

export const TourismData = [
    {
      "destination": "Safari Adventure",
      "duration": "5 days / 4 nights",
      "price": "$1,200",
      "departureDates": "March 15, April 10, May 5",
      "highlights": "Big Five safari, guided tours, wildlife photography",
      "inclusions": "Accommodation, meals, safari guide, park fees",
      "exclusions": "Airfare, personal expenses",
      "availability": "10 seats available",

    },
    {
      "destination": "Beach Getaway",
      "duration": "7 days / 6 nights",
      "price": "$1,500",
      "departureDates": "June 20, July 5, August 15",
      "highlights": "White sandy beaches, water sports, snorkeling",
      "inclusions": "Resort stay, meals, water sports equipment",
      "exclusions": "Airfare, optional activities",
      "availability": "8 rooms available",

    },
    {
      "destination": "Mountain Trek",
      "duration": "8 days / 7 nights",
      "price": "$1,800",
      "departureDates": "September 10, October 5, November 20",
      "highlights": "Hiking, stunning views, cultural experiences",
      "inclusions": "Lodge stays, meals, trekking guide, permits",
      "exclusions": "Airfare, personal gear",
      "availability": "6 slots available",

    }
]
  
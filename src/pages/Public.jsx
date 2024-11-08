import React, { useState } from 'react';
import MapComponent from '../components/directory/MapComponent';
import Introduction from '../components/public/Introduction';
import FindTrashCans from '../components/public/FindTrashCans';
import SchedulePickups from '../components/public/SchedulePickups';
import Faqs from '../components/public/Faqs';
import Navbar from "../components/navbar/Navbar";



const Public = () => {

const [activeForm, setActiveForm] = useState('');

const [pickupDetails, setPickupDetails] = useState('');
    const [showPickupResult, setShowPickupResult] = useState(false);
    const [calendarEvent, setCalendarEvent] = useState(null);
  const [userLocation, setUserLocation] = useState('');
    const [showReportResult, setShowReportResult] = useState(false);   
  const [recyclingCenters, setRecyclingCenters] = useState([]);
  const [error, setError] = useState('');
  
  

  const handleFormDisplay = (formType) => {
    setActiveForm(activeForm === formType ? '' : formType);
    setShowPickupResult(false); // Reset the result display on form toggle
    setShowReportResult(false);
  };

  const getRandomPickupDetails = () => {
    const randomDate = new Date();
    randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 7));
    const randomTime = `${Math.floor(Math.random() * 12) + 1} ${Math.random() < 0.5 ? "AM" : "PM"}`;
    
    return {
        date: randomDate.toLocaleDateString(),
        time: randomTime,
    };
};

const handlePickupSubmit = (e) => {
    e.preventDefault();
    if (userLocation) {
        const { date, time } = getRandomPickupDetails();
        setPickupDetails(`Pickup scheduled for ${date} at ${time} from ${userLocation}.`);
        setCalendarEvent({ date, time, location: userLocation });
        setShowPickupResult(true);
    } else {
        alert("Please enter a location.");
    }
};

const handleLocationChange = (e) => {
    setUserLocation(e.target.value);
};

const downloadCalendarEvent = () => {
    if (calendarEvent) {
        const { date, time, location } = calendarEvent;
        const eventStart = new Date(date).toISOString().replace(/[-:]/g, '').split('.')[0];
        const eventEnd = new Date(new Date(date).getTime() + 60 * 60 * 1000).toISOString().replace(/[-:]/g, '').split('.')[0];
        const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${eventStart}
DTEND:${eventEnd}
SUMMARY:Waste Pickup Scheduled
DESCRIPTION:Waste pickup at ${location}.
LOCATION:${location}
END:VEVENT
END:VCALENDAR
        `.trim();

        const blob = new Blob([icsContent], { type: 'text/calendar' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'pickup_schedule.ics';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
};

const handleReportSubmit = (e) => {
    e.preventDefault();
    setShowReportResult(true);
};

  const handleFindNearMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchRecyclingCenters(lat, lon);
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.");
        break;
      default:
        setError("An unknown error occurred.");
    }
  };

  const fetchRecyclingCenters = (lat, lon) => {
    // Here we could integrate an actual API; for now, we'll use mock data
    const mockRecyclingCenters = [
      { name: "Evolvers Lead recycling and cleaning", address: "Egbejila road", distance: "17 km" },
      { name: "Vicfold Recyclers", address: "12, Mustapha Idi Agbede, Basin Area, Ilorin", distance: "3.5 km" },
      { name: "Prime Hygeiene International", address: "Malete, Ilorin", distance: "40 km" }
    ];
    setRecyclingCenters(mockRecyclingCenters);
  };

  const fetchRecyclingCentersByState = (state) => {
    const recyclingCentersByState = getMockRecyclingCenters();
    const centers = recyclingCentersByState[state] || [];
    setRecyclingCenters(centers);
  };

  const getMockRecyclingCenters = () => {
    return {
      Lagos: [
        { name: "Rivot Recycling", address: "Olajide George Street, Lagos", Contact: '+234 913 097 4962'},
        { name: "Recycle Point Limited", address: "102 Lagos Street, Ebute-Metta, Lagos", Contact: '+234 809 800 2400'},
        { name: "Hinckely Recycling Nigeria Limited", address: "1st Floor, Awolowo House, 29/31 Obafemi Awolowo Way, Ikeja", Contact: '+234 816 737 0453'},
      ],
      Abuja: [
        { name: "RecycAbuja Hub", address: "789 Yellow Blvd, Abuja", distance: "4 km" },
        { name: "GreenRecycle Abuja", address: "321 Eco Lane, Abuja", distance: "5 km" }
      ],
      // Add other states similarly
    };
  };
   
  return (
<>
<Navbar />

<Introduction />


    <div className="min-h-screen py-10 bg-gray-100">

      <main className="container px-4 mx-auto mt-8 space-y-12">
       
        <section className="text-center">
          <h2 className="text-2xl font-bold text-green-600">Overview of Public Waste Services</h2>
          <p className="mt-4 text-gray-700">Explore public sector waste management and its benefits, including accessible and environmentally friendly disposal solutions.</p>
        </section>


        <SchedulePickups />

<section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Waste Pickup Section */}
      <div className="flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg my-10 rounded-lg p-6 bg-gray-50">
        <img src="/images/images5.jpeg" alt="Waste Pickup Icon" className="w-[200px] h-[200px] mb-4 transition duration-300 transform hover:scale-110" />
        <button
          onClick={() => handleFormDisplay('pickup')}
          className="px-6 py-3 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
        >
          Request Waste Pickup
        </button>
        {activeForm === 'pickup' && (
          <form onSubmit={handlePickupSubmit} className="w-full mt-4 p-4 bg-white rounded shadow-md space-y-4">
            <label className="block" htmlFor="address">Enter your address:</label>
            <input
              type="text"
              id="address"
              required
              value={userLocation}
              onChange={handleLocationChange}
              className="w-full p-2 border rounded focus:outline-none focus:border-orange-300"
            />
            <label className="block" htmlFor="waste-type">Type of waste:</label>
            <select id="waste-type" required className="w-full p-2 border rounded focus:outline-none focus:border-orange-300">
              <option value="recyclables">Recyclables</option>
              <option value="hazardous">Hazardous Waste</option>
              <option value="organic">Organic Waste</option>
            </select>
            <label className="block text-gray-700">Additional Details</label>
            <textarea className="w-full p-2 border rounded focus:outline-none focus:border-orange-300" placeholder="Provide any additional information" required></textarea>
            <button type="submit" className="w-full py-2 text-white bg-orange-500 rounded hover:bg-orange-600">Submit</button>
            {showPickupResult && <p className="mt-4 p-2 bg-green-100 rounded">{pickupDetails}</p>}
          </form>
        )}
      </div>

      {/* Report Illegal Dumping Section */}
      <div className="flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg my-10 rounded-lg p-6 bg-gray-50">
        <img src="/images/illegal.jpeg" alt="Illegal Dumping Icon" className="w-[200px] h-[200px] mb-4 transition duration-300 transform hover:scale-110" />
        <button
          onClick={() => handleFormDisplay('dumping')}
          className="px-6 py-3 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Report Illegal Dumping
        </button>
        {activeForm === 'dumping' && (
          <form onSubmit={handleReportSubmit} className="w-full mt-4 p-4 bg-white rounded shadow-md space-y-4">
            <label className="block" htmlFor="location">Dumping Location:</label>
            <input type="text" id="location" required className="w-full p-2 border rounded focus:outline-none focus:border-red-300" />
            <label className="block" htmlFor="description">Description:</label>
            <textarea id="description" placeholder="Describe the issue..." className="w-full p-2 border rounded focus:outline-none focus:border-red-300" required></textarea>
            <input type="file" id="dump-image" accept="image/*" required className="w-full p-2 border rounded" />
            <button type="submit" className="w-full py-2 text-white bg-red-500 rounded hover:bg-red-600">Report</button>
            {showReportResult && <p className="mt-4 p-4 bg-red-100 rounded">Thank you for reporting. Your submission has been received.</p>}
          </form>
        )}
      </div>

      {/* Find Recycling Center Section */}
      <div className="flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg my-10 rounded-lg p-6 bg-gray-50">
        <img src="/images/recycle.jpg" alt="Recycling Center Icon" className="w-[200px] h-[200px] mb-4 transition duration-300 transform hover:scale-110" />
        <button
          onClick={() => handleFormDisplay('recycling')}
          className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Find Recycling Center
        </button>
        {activeForm === 'recycling' && (
  <div className="w-full mt-4 p-4 bg-white rounded shadow-md">
    <button 
      onClick={handleFindNearMe} 
      className="w-full py-2 text-white bg-green-500 rounded hover:bg-green-600"
    >
      Find Centers Near Me
    </button>
    
    {error && <p className="text-red-500">{error}</p>}
    
    <div className="mt-6">
      {recyclingCenters.length > 0 ? (
        recyclingCenters.map((center, index) => (
          <div key={index} className="p-4 bg-white rounded shadow mb-4">
            <h4 className="font-bold">{center.name}</h4>
            <p>Address: {center.address}</p>
            <a 
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.name)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500"
            >
              View on Map
            </a>
          </div>
        ))
      ) : (
        <p>No recycling centers found in your area.</p>
      )}
    </div>
  </div>
)}

      </div>
    </section>



{/* <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
  pickup
  <div className="flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg my-10 rounded-lg p-6 bg-gray-50">
    <img
      src="/images/images5.jpeg"
      alt="Waste Pickup Icon"
      className="w-[200px] h-[200px] mb-4 transition duration-300 transform hover:scale-110"
    />
    <button
      onClick={() => handleFormDisplay('pickup')}
      className="px-6 py-3 text-white transition-transform transform bg-orange-600 rounded-lg hover:bg-orange-700"
    >
      Request Waste Pickup
    </button>
  </div>

 Illegal dumping
  <div className="flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg my-10 rounded-lg p-6 bg-gray-50">
    <img
      src="/images/illegal.jpeg"
      alt="Illegal Dumping Icon"
      className="w-[200px] h-[200px] mb-4 transition duration-300 transform hover:scale-110"
    />
    <button
      onClick={() => handleFormDisplay('dumping')}
      className="px-6 py-3 text-white transition-transform transform bg-red-600 rounded-lg hover:bg-red-700"
    >
      Report Illegal Dumping
    </button>
  </div>

 find recycling centers
  <div className="flex flex-col items-center transition-transform transform hover:scale-105 shadow-lg my-10 rounded-lg p-6 bg-gray-50">
    <img
      src="/images/recycle.jpg"
      alt="Recycling Center Icon"
      className="w-[200px] h-[200px] mb-4 transition duration-300 transform hover:scale-110"
    />
    <button
      onClick={() => handleFormDisplay('recycling')}
      className="px-6 py-3 text-white transition-transform transform bg-green-600 rounded-lg hover:bg-green-700"
    >
      Find Recycling Center
    </button>
  </div>
</section> */}
      {/* Forms Display with animation */}
      {/* <div className="mt-6">
                    Request Waste Pickup Form
                    {activeForm === 'pickup' && (
                <form onSubmit={handlePickupSubmit} className="p-4 bg-white rounded shadow-md">
                    <label className="block mb-2" htmlFor="address">Enter your address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        value={userLocation}
                        onChange={handleLocationChange}
                        className="w-full p-2 mb-4 border rounded focus:border-orange-300 focus:ring focus:ring-orange-300 focus:outline-none"
                    />

                    <label className="block mb-2" htmlFor="waste-type">Type of waste:</label>
                    <select
                        id="waste-type"
                        name="waste-type"
                        required
                        className="w-full p-2 mb-4 border rounded focus:border-orange-300 focus:ring focus:ring-orange-300 focus:outline-none"
                    >
                        <option value="recyclables">Recyclables</option>
                        <option value="hazardous">Hazardous Waste</option>
                        <option value="organic">Organic Waste</option>
                    </select>

                    <div className="mb-4">
                        <label htmlFor="details" className="block text-gray-700">Additional Details</label>
                        <textarea
                            id="details"
                            name="details"
                            className="w-full p-2 border rounded focus:border-orange-300 focus:ring focus:ring-orange-300 focus:outline-none"
                            placeholder="Provide any additional information"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="px-4 py-2 text-white bg-orange-500 rounded hover:bg-orange-600">
                        Submit
                    </button>

                    Pickup Details Display
                    {showPickupResult && (
                    <div className="mt-4">
                        <p className="p-2 bg-green-100 rounded">{pickupDetails}</p>
                        <button
                            type="button"
                            onClick={downloadCalendarEvent}
                            className="px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            Add to Calendar
                        </button>
                    </div>
                )}
                </form>
            )}
            

        Report Illegal Dumping Form
        {activeForm === 'dumping' && (
                <form onSubmit={handleReportSubmit} className="p-4 bg-white rounded shadow-md">
                    <label className="block mb-2" htmlFor="location">Dumping Location:</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        className="w-full p-2 mb-4 border rounded focus:border-red-300 focus:ring focus:ring-red-300 focus:outline-none"
                    />

                    <label className="block mb-2" htmlFor="description">Description of the incident:</label>
                    <textarea
                        id="description"
                        name="description"
                        placeholder="Describe the issue..."
                        className="w-full p-2 mb-4 border rounded focus:border-red-300 focus:ring focus:ring-red-300 focus:outline-none"
                    ></textarea>

                    <div className="mb-4">
                        <label htmlFor="dump-image" className="block text-gray-700">Upload Image</label>
                        <input
                            type="file"
                            id="dump-image"
                            name="dumpImage"
                            className="w-full p-2 border rounded"
                            accept="image/*"
                            required
                        />
                    </div>

                    <button type="submit" className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600">
                        Report
                    </button>

                    
                    {showReportResult && (
                        <div id="report-result" className="p-4 mt-4 bg-red-100 rounded shadow-md">
                            <p>Thank you for reporting. Your submission has been received.</p>
                        </div>
                    )}
                </form>
            )}

        Find Recycling Center Section
      {activeForm === 'recycling' && (
        <div>
          <button onClick={handleFindNearMe} className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">
            Find Recycling Centers Near Me
          </button>
          
          {error && <p className="text-red-500">{error}</p>}

          <div id="recycling-centers" className="mt-6">
            <h3 className="mb-4 text-lg font-bold">Recycling Centers Near You:</h3>
            {recyclingCenters.length > 0 ? (
              recyclingCenters.map((center, index) => (
                <div key={index} className="p-4 mb-4 bg-white rounded shadow-md">
                  <h4 className="font-bold">{center.name}</h4>
                  <p>Address: {center.address}</p>
                  <p>Distance: {center.distance || "N/A"}</p>
                  <p>Contact: {center.Contact || "N/A"}</p>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(center.name)}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on Map</a>
                </div>
              ))
            ) : (
              <p>No recycling centers found in your area.</p>
            )}
          </div>
        </div>
      )}

      </div> */}


        {/* Map and Location Section */}
        <section className="p-6 text-center bg-white rounded-lg shadow-md relative z-10">
          <h3 className="text-2xl font-bold text-green-600">Find Nearest Public Trash Can</h3>
          <p className="mt-2 text-gray-600">Use our interactive map to locate the nearest government trash cans for convenient disposal.</p>
          <div className="mt-4 h-72">
            <MapComponent />
          </div>
        </section>


      </main>


     
      <Faqs />
    </div>
    </>
  );
};


export default Public;


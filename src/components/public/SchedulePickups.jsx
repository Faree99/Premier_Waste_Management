// import React, { useState, useEffect } from 'react';
// import './SchedulePickups.css'; 

// const SchedulePickups = () => {
//     const [pickupDate, setPickupDate] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [locationInput, setLocationInput] = useState('');

//     const generateRandomPickupDate = () => {
//         const randomDate = new Date();
//         randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 14)); 
//         return randomDate.toLocaleDateString('en-US', {
//             weekday: 'long',
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric',
//         });
//     };

//     const handleLocationInput = (e) => {
//         setLocationInput(e.target.value);
//     };

//     useEffect(() => {
//         if (locationInput) {
//             setLoading(true); 

//             const timer = setTimeout(() => {
//                 const generatedDate = generateRandomPickupDate();
//                 setPickupDate(generatedDate);
//                 setLoading(false); 
//             }, 1000); 

//             return () => clearTimeout(timer); 
//         } else {
//             setPickupDate(null); 
//             setLoading(false); 
//         }
//     }, [locationInput]); 

//     const addToCalendar = () => {
//         if (!pickupDate) return;

//         const eventDate = new Date(pickupDate);
//         const startDate = eventDate.toISOString().split('T')[0]; // Format date for calendar
//         const eventTitle = 'Scheduled Government Waste Pickup';
//         const calendarLink = `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
// VERSION:2.0
// BEGIN:VEVENT
// SUMMARY:${eventTitle}
// DTSTART:${startDate.replace(/-/g, '')}T090000Z
// DTEND:${startDate.replace(/-/g, '')}T100000Z
// DESCRIPTION:Scheduled waste pickup at your location.
// END:VEVENT
// END:VCALENDAR`;

//         const link = document.createElement('a');
//         link.href = calendarLink;
//         link.download = 'pickup_schedule.ics';
//         link.click();
//     };

//     return (
//         <section className="max-w-4xl p-6 mx-auto my-10 rounded-lg shadow-md bg-gray-50">
//             <h2 className="mb-4 text-3xl font-semibold text-green-800">Scheduled Government Pickups</h2>
//             <p className="mb-4">Enter your location to view upcoming waste pickup schedules in your area.</p>
//             <input
//                 type="text"
//                 placeholder="Enter your location"
//                 className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
//                 onChange={handleLocationInput}
//                 value={locationInput}
//             />
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                 <div className="p-4 text-center bg-white rounded-md shadow">
//                     <p className="text-xl font-bold text-green-700">Next Pickup</p>
//                     {loading ? (
//                         <div className="rolling-loader"></div> 
//                     ) : (
//                         <p className="text-gray-600">Date: {pickupDate || 'No date available yet'}</p>
//                     )}
//                     {pickupDate && (
//                         <button
//                             onClick={addToCalendar}
//                             className="px-4 py-2 mt-4 text-white bg-green-600 rounded-full"
//                         >
//                             Add to Calendar
//                         </button>
//                     )}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default SchedulePickups;

import React, { useState } from 'react';
import './SchedulePickups.css';

const SchedulePickups = () => {
    const [pickupDate, setPickupDate] = useState(null);
    const [loading, setLoading] = useState(false);
    const [locationInput, setLocationInput] = useState('');

    // Function to generate a random pickup date
    const generateRandomPickupDate = () => {
        const randomDate = new Date();
        randomDate.setDate(randomDate.getDate() + Math.floor(Math.random() * 14)); // Random date within 14 days
        return randomDate.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    // Handle input change for location
    const handleLocationInput = (e) => {
        setLocationInput(e.target.value);
    };

    // Handle submit button click
    const handleSubmitLocation = () => {
        if (!locationInput.trim()) {
            // Show an alert if location input is empty
            alert('Please enter a location to get the pickup schedule.');
            return; // Exit the function early if no location is entered
        }

        setLoading(true); // Show loader
        setTimeout(() => {
            const generatedDate = generateRandomPickupDate();
            setPickupDate(generatedDate); // Set generated pickup date
            setLoading(false); // Hide loader
        }, 1000); // Simulate API delay or processing time
    };

    // Add event to calendar functionality
    const addToCalendar = () => {
        if (!pickupDate) return;

        const eventDate = new Date(pickupDate);
        const startDate = eventDate.toISOString().split('T')[0]; // Format date for calendar
        const eventTitle = 'Scheduled Government Waste Pickup';
        const calendarLink = `data:text/calendar;charset=utf-8,BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${eventTitle}
DTSTART:${startDate.replace(/-/g, '')}T090000Z
DTEND:${startDate.replace(/-/g, '')}T100000Z
DESCRIPTION:Scheduled waste pickup at your location.
END:VEVENT
END:VCALENDAR`;

        const link = document.createElement('a');
        link.href = calendarLink;
        link.download = 'pickup_schedule.ics';
        link.click();
    };

    return (
        <section className="max-w-4xl p-6 mx-auto my-10 rounded-lg shadow-md bg-gray-50">
            <h2 className="mb-4 text-3xl font-semibold text-green-800">Scheduled Government Pickups</h2>
            <p className="mb-4">Enter your location to view upcoming waste pickup schedules in your area.</p>
            
            {/* Location input field */}
            <input
                type="text"
                placeholder="Enter your location"
                className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring focus:ring-green-300"
                onChange={handleLocationInput}
                value={locationInput}
            />
            
            {/* Submit button for generating the pickup date */}
            <button
                onClick={handleSubmitLocation}
                className="px-6 py-2 mt-4 text-white bg-green-600 rounded-full hover:bg-green-800"
            >
                Submit Location
            </button>

            {/* Display Pickup Date and Calendar Button */}
            {pickupDate && (
                <div className="mt-6">
                    <p className="text-xl font-bold text-green-700">Pickup Date:</p>
                    <p className="text-lg text-gray-600">{pickupDate}</p>
                    <button
                        onClick={addToCalendar}
                        className="px-4 py-2 mt-4 text-white bg-green-600 rounded-full hover:bg-green-800"
                    >
                        Add to Calendar
                    </button>
                </div>
            )}

            {/* Loader display while fetching pickup date */}
            {loading && (
                <div className="mt-4 text-center">
                    <div className="rolling-loader"></div> {/* Add a rolling loader or spinner component here */}
                </div>
            )}
        </section>
    );
};

export default SchedulePickups;



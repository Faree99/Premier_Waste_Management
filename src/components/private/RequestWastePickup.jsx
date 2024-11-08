import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RequestWastePickup = () => {
    const [address, setAddress] = useState('');
    const [serviceType, setServiceType] = useState('Residential');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [pickupWasteType, setPickupWasteType] = useState('recyclables');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [price, setPrice] = useState(0);
    const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState('');
    const [showCreditCardForm, setShowCreditCardForm] = useState(false);
    const [showPayPalForm, setShowPayPalForm] = useState(false);
    const [showMobileMoneyForm, setShowMobileMoneyForm] = useState(false);
    const [creditCardInfo, setCreditCardInfo] = useState({ cardNumber: '', expiryDate: '', cvv: '' });
    const [mobileNumber, setMobileNumber] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');

    // Pricing for different waste types
    const pricing = {
        recyclables: 500,
        hazardous: 1500,
        organic: 1000,
    };

    useEffect(() => {
        setPrice(pricing[pickupWasteType]);
    }, [pickupWasteType]);

    const handleWasteTypeChange = (event) => {
        setPickupWasteType(event.target.value);
    };

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
        setShowCreditCardForm(event.target.value === 'credit-card');
        setShowPayPalForm(event.target.value === 'paypal');
        setShowMobileMoneyForm(event.target.value === 'mobile-money');
    };

    const handleCreditCardChange = (event) => {
        const { name, value } = event.target;
        setCreditCardInfo((prev) => ({ ...prev, [name]: value }));
    };

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPaymentSuccessful(true);
        setPaymentDetails(`Pickup scheduled at: ${address}, Type: ${pickupWasteType}, Total: ₦${price}`);
        setConfirmationMessage('Your pickup request has been submitted successfully!');
        sendEmailNotification();
    };

    const sendEmailNotification = () => {
        // Placeholder for email notification function
        // You would typically call your backend here to send the email
        console.log(`Sending email confirmation for pickup on ${pickupDate} at ${pickupTime}`);
    };

    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar
  };

    return (
        <div className="flex bg-gradient-to-b from-green-200 to-orange-200">
      {/* Toggle Button for Mobile View */}
      <button
        onClick={toggleSidebar}
        className="p-2 m-4 text-white bg-green-600 rounded hover:bg-green-700 md:hidden focus:outline-none"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 p-4 bg-green-700 shadow-md transform transition-transform duration-300 
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:shadow-none`}>
        <div className="flex items-center justify-between">
          <div className="p-4 text-2xl font-bold text-white">Dashboard</div>
          {/* Close Button Only Visible in Mobile View */}
          <button onClick={closeSidebar} className="text-white focus:outline-none md:hidden">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col p-4">
            <Link to="/dashboard" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Home</Link>
            {/* <Link to="/my-services" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>My Services</Link> */}
            <Link to="/payment-history" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Payment History</Link>
            <Link to="/profile" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Profile</Link>
            <Link to="/private-sector" className="py-2 text-red-600 hover:text-red-800" onClick={closeSidebar}>Logout</Link>
          </nav>
      </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6">
                <h1 className="mb-4 text-2xl font-bold">Request Waste Pickup</h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow">
                    {/* Pickup Address */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700" htmlFor="address">Pickup Address</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Waste Type Selection */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700" htmlFor="pickup-waste-type">Type of Waste</label>
                        <select
                            id="pickup-waste-type"
                            value={pickupWasteType}
                            onChange={handleWasteTypeChange}
                            className="w-full p-2 border rounded"
                        >
                            <option value="recyclables">Recyclables</option>
                            <option value="hazardous">Hazardous Waste</option>
                            <option value="organic">Organic Waste</option>
                        </select>
                        <p className="font-bold text-gray-500 text-m ">Price: <span id="price">₦{price}</span></p>
                    </div>

                    {/* Service Type Selection */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700" htmlFor="service-type">Service Type</label>
                        <select
                            id="service-type"
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                    </div>

                    {/* Preferred Pickup Date */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700" htmlFor="pickup-date">Preferred Pickup Date</label>
                        <input
                            type="date"
                            id="pickup-date"
                            value={pickupDate}
                            onChange={(e) => setPickupDate(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Preferred Pickup Time */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700" htmlFor="pickup-time">Preferred Pickup Time</label>
                        <input
                            type="time"
                            id="pickup-time"
                            value={pickupTime}
                            onChange={(e) => setPickupTime(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                    {/* Payment Method Selection */}
                    <div className="mb-4">
                        <label className="block mb-2 text-gray-700" htmlFor="payment-method">Choose Payment Method</label>
                        <select
                            id="payment-method"
                            value={paymentMethod}
                            onChange={handlePaymentMethodChange}
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="" disabled>Select payment method</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="paypal">PayPal</option>
                            <option value="mobile-money">Mobile Money</option>
                        </select>
                    </div>

                    {/* Credit Card Payment Form */}
                    {showCreditCardForm && (
                        <div id="credit-card-form">
                            <label className="block mb-2" htmlFor="card-number">Card Number:</label>
                            <input
                                type="text"
                                id="card-number"
                                name="cardNumber"
                                value={creditCardInfo.cardNumber}
                                onChange={handleCreditCardChange}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                            <label className="block mb-2" htmlFor="expiry-date">Expiry Date:</label>
                            <input
                                type="text"
                                id="expiry-date"
                                name="expiryDate"
                                value={creditCardInfo.expiryDate}
                                onChange={handleCreditCardChange}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                            <label className="block mb-2" htmlFor="cvv">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={creditCardInfo.cvv}
                                onChange={handleCreditCardChange}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                        </div>
                    )}

                    {/* PayPal Form */}
                    {showPayPalForm && (
                        <div id="paypal-form">
                            <p className="mb-4">You will be redirected to PayPal to complete your purchase.</p>
                        </div>
                    )}

                    {/* Mobile Money Form */}
                    {showMobileMoneyForm && (
                        <div id="mobile-money-form">
                            <label className="block mb-2" htmlFor="phone-number">Mobile Number:</label>
                            <input
                                type="text"
                                id="phone-number"
                                value={mobileNumber}
                                onChange={handleMobileNumberChange}
                                className="w-full p-2 mb-4 border rounded"
                                required
                            />
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
                    >
                        Submit Request
                    </button>
                </form>

                {/* Confirmation Message */}
                {isPaymentSuccessful && (
                    <div className="p-4 mt-4 text-green-800 bg-green-200 rounded">
                        {confirmationMessage}
                        <p>{paymentDetails}</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default RequestWastePickup;




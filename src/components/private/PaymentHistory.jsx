import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PaymentHistory = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false); // Close sidebar
  };
  
    const [paymentHistory, setPaymentHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    const dummyData = [
        {
            id: 1,
            date: '2024-09-01',
            serviceType: 'Residential',
            wasteType: 'Organic',
            amount: 100.00,
            paymentMethod: 'Credit Card',
            status: 'Completed'
        },
        {
            id: 2,
            date: '2024-09-15',
            serviceType: 'Commercial',
            wasteType: 'Hazardous',
            amount: 200.00,
            paymentMethod: 'PayPal',
            status: 'Completed'
        }
    ];

    useEffect(() => {
        const fetchPaymentHistory = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/payment-history');
                if (!response.ok) throw new Error('Failed to fetch payment history');
                
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    const data = await response.json();
                    setPaymentHistory(data);
                } else {
                    throw new Error("Unexpected response format");
                }
            } catch (err) {
                // Set dummy data instead of displaying error
                setPaymentHistory(dummyData);
            } finally {
                setLoading(false);
            }
        };

        fetchPaymentHistory();
    }, []);
    

    return (
        <div className="flex h-screen bg-gradient-to-b from-green-200 to-orange-200">
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
              <Link to="/my-services" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>My Services</Link>
              <Link to="/payment-history" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Payment History</Link>
              <Link to="/profile" className="py-2 text-white hover:bg-green-300" onClick={closeSidebar}>Profile</Link>
              <Link to="/private-sector" className="py-2 text-red-600 hover:text-red-800" onClick={closeSidebar}>Logout</Link>
            </nav>
        </aside>

            {/* Main Content Area */}
            <main className="flex-1 p-6">
                <h1 className="mb-4 text-2xl font-bold">Payment History</h1>

                {loading ? (
                    <p>Loading payment history...</p>
                ) : (
                    <table className="w-full mb-4 bg-white rounded shadow-md">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 text-left">Date</th>
                                <th className="p-2 text-left">Service Type</th>
                                <th className="p-2 text-left">Waste Type</th>
                                <th className="p-2 text-right">Amount</th>
                                <th className="p-2 text-left">Payment Method</th>
                                <th className="p-2 text-left">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paymentHistory.length > 0 ? (
                                paymentHistory.map((payment) => (
                                    <tr key={payment.id} className="border-b">
                                        <td className="p-2">{new Date(payment.date).toLocaleDateString()}</td>
                                        <td className="p-2">{payment.serviceType}</td>
                                        <td className="p-2">{payment.wasteType}</td>
                                        <td className="p-2 text-right">${payment.amount.toFixed(2)}</td>
                                        <td className="p-2">{payment.paymentMethod}</td>
                                        <td className="p-2">{payment.status}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center text-gray-500">
                                        No payment history available.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
};

export default PaymentHistory;

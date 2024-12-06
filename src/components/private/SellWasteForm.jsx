import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SellWasteForm = () => {
  const [wasteType, setWasteType] = useState("plastic");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("kg");
  const [location, setLocation] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const navigate = useNavigate();

  const wasteTypes = [
    "plastic",
    "glass",
    "paper",
    "spoiled food",
    "organic",
    "electronics",
    "metal",
    "textiles",
    "batteries",
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic, such as sending data to the backend
    console.log({
      wasteType,
      quantity,
      unit,
      location,
      uploadedImage,
    });

    // Set confirmation message
    setConfirmationMessage(
      "Thank you for your submission! We will review your waste details and get back to you shortly."
    );

    // Simulate an email notification
    sendEmailNotification();

    // Navigate back to the dashboard after a delay
    setTimeout(() => navigate("/dashboard"), 3000); // Adjust the delay as needed
  };

  const sendEmailNotification = () => {
    // Simulate email sending
    console.log("Sending email notification...");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="mb-4 text-2xl font-bold text-center">Sell Your Waste</h1>
        <form onSubmit={handleSubmit}>
          {/* Waste Type */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="waste-type">
              Type of Waste
            </label>
            <select
              id="waste-type"
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {wasteTypes.map((type) => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="quantity">
              Quantity
            </label>
            <div className="flex">
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="flex-1 p-2 border rounded"
                placeholder="Enter quantity"
                required
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="p-2 ml-2 border rounded"
              >
                <option value="kg">kg</option>
                <option value="ton">ton</option>
                <option value="lb">lb</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="location">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your location"
              required
            />
          </div>

          {/* Upload Image */}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="waste-image">
              Upload Waste Image
            </label>
            <input
              type="file"
              id="waste-image"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </form>

        {/* Confirmation Message */}
        {confirmationMessage && (
          <div className="p-4 mt-4 text-green-800 bg-green-200 rounded">
            {confirmationMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default SellWasteForm;


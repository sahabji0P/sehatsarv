"use client";
import React, { useState } from 'react';

const PatientAdmissionForm = () => {
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    condition: '',
    currentHospital: '',
    newHospital: '',
  });
  const [showTransfer, setShowTransfer] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPatientData({ ...patientData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Patient Data:', patientData);
    // Here you would typically send the data to your backend
  }
  
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg border border-gray-800">
      <h2 className="text-2xl font-bold mb-6">Patient Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Patient Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={patientData.name}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium">Age</label>
          <input
            id="age"
            name="age"
            type="number"
            value={patientData.age}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium">Gender</label>
          <select
            id="gender"
            name="gender"
            value={patientData.gender}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="condition" className="block text-sm font-medium">Medical Condition</label>
          <input
            id="condition"
            name="condition"
            type="text"
            value={patientData.condition}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="currentHospital" className="block text-sm font-medium">Current Hospital</label>
          <input
            id="currentHospital"
            name="currentHospital"
            type="text"
            value={patientData.currentHospital}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          />
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="transferCheck"
            checked={showTransfer}
            onChange={() => setShowTransfer(!showTransfer)}
            className="rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-500 focus:ring-opacity-50"
          />
          <label htmlFor="transferCheck" className="text-sm font-medium">Transfer to another hospital?</label>
        </div>
        {showTransfer && (
          <div>
            <label htmlFor="newHospital" className="block text-sm font-medium">New Hospital</label>
            <input
              id="newHospital"
              name="newHospital"
              type="text"
              value={patientData.newHospital}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Admit Patient
        </button>
      </form>
    </div>
  );
};

export default PatientAdmissionForm;
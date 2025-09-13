import { useState } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashBoard = () => {
    const [selectedYear, setSelectedYear] = useState(2025);

    return (

        <div className="p-4">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <p className="text-gray-600 text-sm">community manager</p>
            </div>

            {/* Year Selection */}
            <div className="flex space-x-3 mb-6">
                {[2025, 2024, 2023].map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-md font-medium text-sm ${selectedYear === year
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-700'
                            }`}
                    >
                        {year}
                    </button>
                ))}
            </div>

            {/* Balance */}
            <div className="mb-6">
                <p className="text-gray-700 font-semibold text-sm">Balance:</p>
                <p className="text-xl font-bold text-gray-800">70000xF</p>
            </div>

            {/* Properties Table */}
            <Link to={'/dashboard/manager/history'}>
                <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b">
                                <th className="pb-2 font-semibold text-gray-700 text-sm">Properties</th>
                                <th className="pb-2 font-semibold text-gray-700 text-sm">Tennis</th>
                                <th className="pb-2 font-semibold text-gray-700 text-sm">Paid</th>
                                <th className="pb-2 font-semibold text-gray-700 text-sm">Unpaid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="py-3 font-bold text-gray-800 text-sm">12</td>
                                <td className="py-3 font-bold text-gray-800 text-sm">12</td>
                                <td className="py-3 font-bold text-gray-800 text-sm">07</td>
                                <td className="py-3 font-bold text-gray-800 text-sm">05</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Link>

            {/* Calendar Section */}
            <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-gray-600 font-medium text-sm flex items-center">
                        <FaCalendar className="mr-1" size={14} /> calender
                    </h2>
                    <p className="text-gray-800 font-semibold text-sm">August 2025</p>
                </div>
                <div className="h-px bg-gray-300"></div>
            </div>

            {/* Paid and Unpaid Owners */}
            <div className="grid grid-cols-1 gap-4 mb-6">
                {/* Paid Owner */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-base font-semibold text-gray-800 mb-3">Paid owner</h3>
                    <ul className="space-y-1">
                        <li className="text-gray-700 text-sm">
                            <span className="font-bold">3</span>
                        </li>
                        <li className="text-gray-700 text-sm">
                            <span className="font-bold">8</span>
                        </li>
                        <li className="text-gray-700 text-sm">
                            <span className="font-bold">7000xF</span>
                        </li>
                    </ul>
                </div>

                {/* Unpaid Owner */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="text-base font-semibold text-gray-800 mb-3">Unpaid owner</h3>
                    <ul className="space-y-1">
                        <li className="text-gray-700 text-sm">
                            <span className="font-bold">3</span>
                        </li>
                        <li className="text-gray-700 text-sm">
                            <span className="font-bold">8</span>
                        </li>
                        <li className="text-gray-700 text-sm">
                            <span className="font-bold">14000xF</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Request All Button */}
            <div className="mb-6">
                <button className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold text-sm">
                    Request All
                </button>
            </div>
        </div>


    );
};


export default DashBoard;
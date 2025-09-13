import { useState } from 'react';
import { FaHome, FaBuilding, FaUsers, FaCog } from 'react-icons/fa';
import { Link } from 'react-router';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
            <div className="flex justify-around items-center py-2">
                <Link to={'/dashboard/manager'}>
                <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`flex flex-col items-center px-3 py-1 rounded-md ${activeTab === 'dashboard' ? 'text-blue-600' : 'text-gray-600'
                        }`}
                >
                    <FaHome size={18} />
                    <span className="text-xs mt-1">Dashboard</span>
                </button>
                </Link>

                <Link to={'/dashboard/property'}>
                <button
                    onClick={() => setActiveTab('properties')}
                    className={`flex flex-col items-center px-3 py-1 rounded-md ${activeTab === 'properties' ? 'text-blue-600' : 'text-gray-600'
                        }`}
                >
                    <FaBuilding size={18} />
                    <span className="text-xs mt-1">Properties</span>
                </button>
                </Link>

                <Link to={'/dashboard/owners'}>
                <button
                    onClick={() => setActiveTab('owners')}
                    className={`flex flex-col items-center px-3 py-1 rounded-md ${activeTab === 'owners' ? 'text-blue-600' : 'text-gray-600'
                        }`}
                >
                    <FaUsers size={18} />
                    <span className="text-xs mt-1">Owners</span>
                </button>
                </Link>

                <Link to={'/dashboard/settings'}>
                 <button
                    onClick={() => setActiveTab('settings')}
                    className={`flex flex-col items-center px-3 py-1 rounded-md ${activeTab === 'settings' ? 'text-blue-600' : 'text-gray-600'
                        }`}
                >
                    <FaCog size={18} />
                    <span className="text-xs mt-1">Settings</span>
                </button>
                </Link>




            </div>
        </div>
    );
};

export default NavBar
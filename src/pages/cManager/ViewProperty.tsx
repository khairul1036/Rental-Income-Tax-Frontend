const ViewProperty = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Price right</h1>
                <h1 className="text-2xl font-bold text-gray-800">Price wrong</h1>
            </div>

            {/* Property Cards */}
            <div className="space-y-4">
                {/* First Property Card */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">140000xor</h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">Rent payment date 05th /month</p>
                        <p className="text-gray-700">owner ID 11xx09811</p>
                        <p className="text-gray-700">Tenant ID 758578758</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700">Current status <span className="text-green-600 font-medium">Paid</span></p>
                            <button className="text-blue-600 font-medium">History</button>
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-700 font-semibold">Benin Republic</p>
                            <p className="text-gray-700">Litoral</p>
                            <p className="text-gray-700">Cotonou</p>
                            <p className="text-gray-700">Sainte RITA, Maison X, 274 CC</p>
                        </div>
                    </div>
                </div>

                {/* Second Property Card */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">140000xor</h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">Rent payment date 05th /month</p>
                        <p className="text-gray-700">owner ID 11xx09811</p>
                        <p className="text-gray-700">Tenant ID 758578758</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700">Current status <span className="text-green-600 font-medium">Paid</span></p>
                            <button className="text-blue-600 font-medium">History</button>
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-700 font-semibold">Benin Republic</p>
                            <p className="text-gray-700">Litoral</p>
                            <p className="text-gray-700">Cotonou</p>
                            <p className="text-gray-700">Sainte RITA, Maison X, 274 CC</p>
                        </div>
                    </div>
                </div>

                {/* Third Property Card */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h2 className="text-xl font-bold text-gray-800 mb-3">140000xor</h2>
                    <div className="space-y-2">
                        <p className="text-gray-700">Rent cost 1</p>
                        <p className="text-gray-700">payment date 05th /month</p>
                        <p className="text-gray-700">owner ID 11xx09811</p>
                        <p className="text-gray-700">Tenant ID 758578758</p>
                        <div className="flex justify-between items-center">
                            <p className="text-gray-700">Current status <span className="text-green-600 font-medium">Paid</span></p>
                            <button className="text-blue-600 font-medium">History</button>
                        </div>
                        <div className="mt-3">
                            <p className="text-gray-700 font-semibold">Benin Republic</p>
                            <p className="text-gray-700">Litoral</p>
                            <p className="text-gray-700">Cotonou</p>
                            <p className="text-gray-700">Sainte RITA, Maison X, 274 CC</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProperty;
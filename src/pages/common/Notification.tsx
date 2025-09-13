const Notification = () => {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Notifications Title */}
            <div className="p-4 mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                <p className="text-gray-600 text-sm">community manager</p>
            </div>

            {/* Notifications List */}
            <div className="space-y-1">
                {/* Notification 1 */}
                <div className="bg-white p-4 border-b border-gray-100">
                    <p className="text-gray-800">
                        Room 8563364 checked in successful
                    </p>
                </div>

                {/* Notification 2 */}
                <div className="bg-white p-4 border-b border-gray-100">
                    <p className="text-gray-800">
                        Room 8775522 requesting to check out
                    </p>
                </div>

                {/* Notification 3 */}
                <div className="bg-white p-4 border-b border-gray-100">
                    <p className="text-gray-800">
                        Room 1256328 checked in successful
                    </p>
                </div>

                {/* Notification 4 */}
                <div className="bg-white p-4 border-b border-gray-100">
                    <p className="text-gray-800">
                        Congrats you've paid July rent
                    </p>
                </div>

                {/* Notification 5 */}
                <div className="bg-white p-4 border-b border-gray-100">
                    <p className="text-gray-800">
                        Congrats you've paid June rent
                    </p>
                </div>

                {/* Notification 6 */}
                <div className="bg-white p-4 border-b border-gray-100">
                    <p className="text-gray-800">
                        Congrats you've paid May rent
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Notification;
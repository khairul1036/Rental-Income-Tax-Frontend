const History = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-gray-800">username</h1>
      </div>

      {/* Title */}
      <div className="bg-white p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">History</h2>
          <p className="text-gray-600 text-sm">Frequency of Zoom</p>
        </div>
      </div>

      {/* Number Grid */}
      <div className="bg-white p-4">
        <div className="grid grid-cols-5 gap-3">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
            <div
              key={number}
              className="aspect-square flex items-center justify-center bg-gray-100 rounded-md"
            >
              <span className="text-gray-800 font-medium">{number}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
const ALMetricItem = ({ item }) => {
  const handleClicked = () => {};
  return (
    <div className="flex items-center gap-3 text-white hover:cursor-pointer">
      <span className="leading-tight w-1/2">{item.name}</span>
      <button className="hover:bg-gray-700 w-1/2 px-2 py-1 text-nowrap text-custom-green rounded">
        View Report
      </button>
    </div>
  );
};

export default ALMetricItem;

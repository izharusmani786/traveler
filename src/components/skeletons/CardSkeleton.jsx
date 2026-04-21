const CardSkeleton = () => {
  return (
    <div className="animate-pulse p-4 bg-gray-200 dark:bg-gray-800 rounded-xl">
      <div className="h-40 bg-gray-300 dark:bg-gray-700 rounded mb-3" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/2" />
    </div>
  );
};

export default CardSkeleton
const SortCategoryItem = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-5 mb-2 bg-white text-gray-400 font-semibold rounded-full hover:bg-violet-500 hover:text-white transition ${
        isActive ? "activeCategory" : ""
      }`}
    >
      {category}
    </button>
  );
};

export default SortCategoryItem;

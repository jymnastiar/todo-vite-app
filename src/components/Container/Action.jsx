import Filter from "../Filter";

export default function Action({
  lengthItems,
  onClearComplete,
  handleFilterAll,
  handleFilterActive,
  handleFilterComplete,
}) {
  return (
    <section className="mt-auto flex items-center pl-4.5 pr-4 h-12.5 text-[12px] sm:text-[14px]">
      <button className="text-Gray-600 mr-auto">
        {lengthItems} items left
      </button>
      <div className="hidden sm:block">
        <Filter
          All={handleFilterAll}
          Active={handleFilterActive}
          Complete={handleFilterComplete}
        />
      </div>
      <button
        onClick={() => onClearComplete()}
        className="text-Gray-600 hover:text-Navy-850 ml-auto cursor-pointer"
      >
        Clear Completed
      </button>
    </section>
  );
}

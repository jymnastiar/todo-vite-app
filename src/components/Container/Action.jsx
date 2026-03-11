import Filter from "../Filter";

export default function Action({
  onClearComplete,
  handleFilterAll,
  handleFilterActive,
  handleFilterComplete,
  filter,
  itemActive,
}) {
  return (
    <section className="mt-auto flex items-center pl-4.5 pr-4 h-12.5 text-[12px] sm:text-[14px]">
      <button className="text-Gray-600 mr-auto dark:text-Purple-600">
        {itemActive} items left
      </button>
      <div className="hidden sm:block">
        <Filter
          All={handleFilterAll}
          Active={handleFilterActive}
          Complete={handleFilterComplete}
          filter={filter}
        />
      </div>
      <button
        onClick={() => onClearComplete()}
        className="text-Gray-600 hover:text-Navy-850 ml-auto dark:text-Purple-600 dark:hover:text-Purple-100 cursor-pointer"
      >
        Clear Completed
      </button>
    </section>
  );
}

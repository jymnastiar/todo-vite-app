export default function Filter({ All, Active, Complete, filter }) {
  return (
    <section className="flex items-center justify-center gap-6 w-full h-12 mt-4 rounded-sm font-bold text-[14px] bg-Gray-50 shadow-[0_10px_34.5px_0px_rgba(0,0,0,0.25)] dark:bg-Navy-900 transition-colors sm:w-40.5 sm:h-0 sm:justify-between sm:mt-0 sm:shadow-none">
      <button
        onClick={() => All()}
        className={` ${filter === "all" ? "text-Blue-500" : "text-Gray-600 dark:text-Purple-700"} hover:text-Navy-850 dark:hover:text-Purple-100 cursor-pointer`}
      >
        All
      </button>
      <button
        onClick={() => Active()}
        className={` ${filter === "active" ? "text-Blue-500" : "text-Gray-600 dark:text-Purple-700"} hover:text-Navy-850 dark:hover:text-Purple-100 cursor-pointer`}
      >
        Active
      </button>
      <button
        onClick={() => Complete()}
        className={`${filter === "complete" ? "text-Blue-500" : "text-Gray-600 dark:text-Purple-700"} hover:text-Navy-850 dark:hover:text-Purple-100 cursor-pointer`}
      >
        Complete
      </button>
    </section>
  );
}

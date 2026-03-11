export default function Filter({ All, Active, Complete }) {
  return (
    <section className="flex items-center justify-center gap-6 w-full h-12 mt-4 rounded-sm font-bold text-[14px] bg-Gray-50 shadow-[0_10px_34.5px_0px_rgba(0,0,0,0.25)] dark:bg-Navy-900 transition-colors sm:w-40.5 sm:h-0 sm:justify-between sm:mt-0 sm:shadow-none">
      <button onClick={() => All()} className="text-Blue-500 cursor-pointer">
        All
      </button>
      <button
        onClick={() => Active()}
        className="text-Gray-600 hover:text-Navy-850 dark:text-Purple-700 dark:hover:text-Purple-100 cursor-pointer"
      >
        Active
      </button>
      <button
        onClick={() => Complete()}
        className="text-Gray-600 hover:text-Navy-850 dark:text-Purple-700 dark:hover:text-Purple-100 cursor-pointer"
      >
        Complete
      </button>
    </section>
  );
}

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Form({ onAddItem }) {
  const [item, setItem] = useState("");

  function handleForm(e) {
    e.preventDefault();
    if (!item) return;
    onAddItem({
      id: uuidv4(),
      task: item,
      checked: false,
    });
    setItem("");
  }

  return (
    <form
      onSubmit={handleForm}
      className="mt-8.5 z-0 shadow-[0_5px_34.5px_0px_rgba(0,0,0,0.25)] flex gap-2.5 items-center transition-colors text-Navy-850 text-[12px] h-12 w-full rounded-sm bg-Gray-50 placeholder:text-Purple-600 dark:bg-Navy-900 dark:text-Purple-300 sm:text-[18px] sm:h-16.25 sm:gap-6.75"
    >
      <div className="rounded-full ml-4.75 border border-Gray-300 dark:border-Purple-800 size-5.5 sm:size-6.5 sm:border-2"></div>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="flex-1 h-full w-full outline-none pr-8"
        type="text"
        placeholder="Creat a new todo..."
        maxLength={120}
      />
    </form>
  );
}

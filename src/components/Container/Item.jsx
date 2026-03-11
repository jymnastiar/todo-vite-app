import { iconCheck, iconCross } from "../icons";
export default function Item({ value, toogleCheck, onDeleteItem }) {
  return (
    <li className="h-13.25 pl-4.75 flex items-center border-b border-Purple-300 dark:border-Navy-850 px-2 py-2 transition-colors sm:h-16.25">
      <label className="group flex items-center cursor-pointer gap-2.5 w-full sm:gap-6.75">
        {/* Checkbox circle */}
        <div className="relative size-5.5 flex items-center justify-center shrink-0 sm:size-6.5">
          <input
            type="checkbox"
            checked={value.checked}
            onChange={() => toogleCheck(value.id)}
            className="peer sr-only"
            id={value.id}
          />

          <div
            className="
            absolute inset-0 rounded-full 
            bg-gray-300 dark:bg-Purple-800
            group-hover:bg-linear-to-r group-hover:from-[#57DDFF] group-hover:to-[#C058F3] 
            transition-all duration-300 
            peer-checked:opacity-0
          "
          />

          <div
            className="
            absolute inset-px sm:inset-0.5 rounded-full 
            bg-white dark:bg-Navy-900
            transition-all duration-300 
            peer-checked:opacity-0
          "
          />

          <div
            className="
            absolute inset-0 rounded-full 
            bg-linear-to-r from-[#57DDFF] to-[#C058F3] 
            opacity-0 peer-checked:opacity-100 
            flex items-center justify-center 
            transition-all duration-300
          "
          >
            {iconCheck}
          </div>
        </div>

        {/* Task label */}
        <span
          className={`text-[12px] sm:text-[18px] w-auto h-12 flex items-center break-all overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]
          ${
            value.checked
              ? "text-Gray-300 dark:text-Purple-700 line-through"
              : "text-Navy-850 dark:text-Purple-300"
          }`}
        >
          {value.task}
        </span>

        {/* X button — push to far right */}
        <button
          type="button"
          className="cursor-pointer ml-auto flex items-center justify-center p-0.5 shrink-0"
          tabIndex={-1}
          onClick={() => onDeleteItem(value.id)}
        >
          {iconCross}
        </button>
      </label>
    </li>
  );
}

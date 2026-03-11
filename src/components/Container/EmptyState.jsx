export default function EmptyState({ icon, message }) {
  return (
    <div className="flex flex-col items-center justify-center pt-10 px-6 gap-6">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div
          className="absolute inset-0 rounded-full opacity-20 dark:opacity-30 blur-md"
          style={{
            background:
              "linear-gradient(to right, hsl(192,100%,67%), hsl(280,87%,65%))",
          }}
        />

        <div
          className="absolute inset-0 rounded-full p-0.5"
          style={{
            background:
              "linear-gradient(to right, hsl(192,100%,67%), hsl(280,87%,65%))",
          }}
        >
          <div className="w-full h-full rounded-full bg-gray-50 dark:bg-Navy-900 flex items-center justify-center">
            {icon}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-base font-semibold text-Navy-850 dark:text-Purple-300 tracking-wide">
          {message}
        </h3>

        <p className="text-sm text-Gray-600 dark:text-Purple-600 max-w-55 leading-relaxed">
          Add a new todo above to get started
        </p>
      </div>
      <div className="flex gap-2 items-center opacity-40 dark:opacity-30">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i === 1 ? "8px" : "5px",
              height: i === 1 ? "8px" : "5px",
              background:
                "linear-gradient(to right, hsl(192,100%,67%), hsl(280,87%,65%))",
            }}
          />
        ))}
      </div>
    </div>
  );
}

import Item from "./Item";
import Action from "./Action";
import EmptyState from "./EmptyState";

export default function Container({
  items,
  toogleCheck,
  lengthItems,
  onDeleteItem,
  onClearComplete,
  All,
  Active,
  Complete,
  isEmptyFilter,
  emptyMessage,
  emptyIcon,
  filter,
  itemActive,
}) {
  return (
    <div className="w-full flex flex-col h-91.75 mt-4.25 bg-Gray-50 shadow-[0_5px_34.5px_0px_rgba(0,0,0,0.25)] rounded-sm dark:bg-Navy-900 transition-colors">
      <ul className="overflow-auto max-h-79.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {items.map((value) => (
          <Item
            key={value.id}
            value={value}
            toogleCheck={toogleCheck}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
      {(lengthItems === 0 || isEmptyFilter) && (
        <EmptyState message={emptyMessage} icon={emptyIcon} />
      )}
      <Action
        lengthItems={lengthItems}
        onClearComplete={onClearComplete}
        handleFilterAll={All}
        handleFilterActive={Active}
        handleFilterComplete={Complete}
        filter={filter}
        itemActive={itemActive}
      />
    </div>
  );
}

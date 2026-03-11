import { useState, useEffect } from "react";
import {
  iconEmptyAll,
  iconNoActive,
  iconNoCompleted,
} from "../components/icons";

export default function useTodos() {
  const [filter, setFilter] = useState("all");
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(items));
  }, [items]);

  function toogleCheck(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function handleAddItem(value) {
    setItems((prev) => [...prev, value]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearComplete() {
    setItems((items) => items.filter((item) => !item.checked));
  }

  function handleFilterAll() {
    setFilter("all");
  }
  function handleFilterActive() {
    setFilter("active");
  }
  function handleFilterComplete() {
    setFilter("complete");
  }

  const filteredItems = items.filter((item) => {
    if (filter === "active") return !item.checked;
    if (filter === "complete") return item.checked;
    return true;
  });

  const itemActive = items.filter((item) => !item.checked).length;

  const isEmptyFilter = filteredItems.length === 0;

  let emptyMessage = "No tasks yet";
  let emptyIcon = iconEmptyAll;

  if (isEmptyFilter && filter === "active") {
    emptyMessage = "No active tasks";
    emptyIcon = iconNoActive;
  }

  if (isEmptyFilter && filter === "complete") {
    emptyMessage = "No completed tasks";
    emptyIcon = iconNoCompleted;
  }

  return {
    items,
    filteredItems,
    isEmptyFilter,
    emptyMessage,
    emptyIcon,
    filter,
    itemActive,
    toogleCheck,
    handleAddItem,
    handleDeleteItem,
    handleClearComplete,
    handleFilterAll,
    handleFilterActive,
    handleFilterComplete,
  };
}

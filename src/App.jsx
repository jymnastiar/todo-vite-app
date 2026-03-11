import { Header, Footer, Container, Filter, Form } from "./components";
import { useTheme, useTodos } from "./hooks";

export default function App() {
  const [theme, setTheme] = useTheme();
  const {
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
  } = useTodos();

  return (
    <div className="leading-none bg-Gray-50 dark:bg-Navy-950 ">
      <div
        className="font-main flex justify-center px-6
                  bg-[url('/src/assets/images/bg-mobile-light.jpg')] dark:bg-[url('/src/assets/images/bg-mobile-dark.jpg')]
                  sm:bg-[url('/src/assets/images/bg-desktop-light.jpg')] sm:dark:bg-[url('/src/assets/images/bg-desktop-dark.jpg')]
                  bg-no-repeat bg-contain min-h-screen"
      >
        <div className="max-w-135.5 min-w-70 sm:w-135.5">
          <Header theme={theme} setTheme={setTheme} />
          <Form onAddItem={handleAddItem} />
          <Container
            items={filteredItems}
            toogleCheck={toogleCheck}
            onDeleteItem={handleDeleteItem}
            onClearComplete={handleClearComplete}
            All={handleFilterAll}
            Active={handleFilterActive}
            Complete={handleFilterComplete}
            isEmptyFilter={isEmptyFilter}
            emptyMessage={emptyMessage}
            emptyIcon={emptyIcon}
            filter={filter}
            itemActive={itemActive}
          />
          <div className="sm:hidden">
            <Filter
              All={handleFilterAll}
              Active={handleFilterActive}
              Complete={handleFilterComplete}
              filter={filter}
            />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

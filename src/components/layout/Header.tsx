import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <h1 className="text-xl font-bold text-primary-primary">Posts App</h1>
        <SearchBar />
      </div>
    </header>
  );
}

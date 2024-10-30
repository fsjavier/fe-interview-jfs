import { useStore } from "../store/useStore";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="w-full sm:w-64 md:w-80">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search posts"
        className="p-2 border rounded-md w-full focus:outline-none focus:ring-1 focus:border-transparent"
      />
    </div>
  );
}

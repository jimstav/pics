function SearchBar({ onSubmit }) {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit("cars");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" />
      </form>
    </div>
  );
}

export default SearchBar;

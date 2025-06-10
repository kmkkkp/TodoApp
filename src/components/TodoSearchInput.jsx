export function TodoSearchInput({ searchText, setSearchText }) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
    >
      <input
        placeholder="검색어를 입력하세요"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ width: "200px" }}
      />
    </div>
  );
}

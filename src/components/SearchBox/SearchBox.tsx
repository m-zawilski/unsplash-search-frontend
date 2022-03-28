import { Dispatch, KeyboardEvent, SetStateAction } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./SearchBox.scss";

export interface SearchBoxProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  onSearch: () => Promise<void>;
}

function SearchBox(props: SearchBoxProps) {
  const { query, setQuery, onSearch } = props;

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-box-container">
      <InputGroup className="py-5 search-box-input-group">
        <FormControl
          placeholder="Search images"
          value={query}
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(e)}
        />
        <Button
          aria-label="search for images"
          onClick={() => onSearch()}
          className="search-box-button"
        >
          Search
        </Button>
      </InputGroup>
    </div>
  );
}

export default SearchBox;

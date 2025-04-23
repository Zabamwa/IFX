import { FlexContainer } from "../Card/Card.styles";

interface ISearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: ISearchProps) => (
  <FlexContainer $justify="center" $gap="12px">
    <label htmlFor="search">Search</label>
    <input type="text" id="search" value={value} onChange={onChange} />
  </FlexContainer>
);

export default SearchInput;

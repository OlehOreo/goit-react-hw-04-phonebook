import { Search } from './Filter.styled';
export const Filter = ({ filter, onSearchContact }) => {
  return (
    <>
      <Search
        type="text"
        value={filter}
        onChange={evt => onSearchContact(evt.target.value)}
        placeholder="Search contact"
      />
    </>
  );
};

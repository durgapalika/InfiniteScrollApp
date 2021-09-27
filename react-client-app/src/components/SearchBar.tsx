import React, { useState } from 'react';
import { SearchContainer } from '../App.styles';
import { Button, TextField } from '@material-ui/core';

interface SearchBarProps {
	handleSearch: (searchString: string) => void;
}

const SearchBar = ({ handleSearch }: SearchBarProps) => {
	const [searchString, setSearchString] = useState<string>('');

	const handleButtonClick = () => {
		handleSearch(searchString);
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{ setSearchString(event.target.value)};
	return (
		<SearchContainer>
			<TextField variant="outlined" onChange={handleChange} data-testid="txtSearch" value={searchString}></TextField>
			<Button variant="contained" onClick={handleButtonClick} data-testid="btnSearch">
				Search
			</Button>
		</SearchContainer>
	);
};

export default SearchBar;

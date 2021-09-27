import React, { useEffect, useState } from 'react';
import './App.css';
import { TrackItem } from './entities/trackitem';
import { Container, TracksContainer } from './App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTracks } from './actions/actions';
import { RootStore } from './store';
import LoadingSpinner from './components/LoadingSpinner';
import SearchBar from './components/SearchBar';
import TracksList from './components/TracksList';

function App() {
	const allTracks = useSelector<RootStore, TrackItem[]>((state: RootStore) => state.tracks.tracks);
	const isLoading = useSelector<RootStore, boolean>((state: RootStore) => state.tracks.loading);
	const [displayTracks, setDisplayTracks] = useState<TrackItem[]>([]);

	// lastIndex is the index of the last item being displayed in view
	const [lastIndex, setLastIndex] = useState<number>(0);

	// hold the user entered search string in state
	//const [searchString, setSearchString] = useState<string>('');

	const dispatch = useDispatch();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {};

	// Clear the display list
	// dispatch the fetchTracks event on search button click
	const handleSearch = (searchString: string) =>
	{
		setDisplayTracks([]);
		dispatch(fetchTracks(searchString));
	} 

	// This efffect runs after tracks had data from state.
	// Initially display first 10 items from state
	useEffect(() => {
		if (allTracks && allTracks.length > 0) {
			displayTracks.push(...allTracks.slice(lastIndex, lastIndex + 10));
			setLastIndex(lastIndex + 10);
		}
	}, [allTracks]);

	// This effect was run only once in initial component load
	useEffect(() => {
		window.addEventListener('scroll', loadMore);
		return () => {
			// unsubscribe the event to avoid memory leaks
			window.removeEventListener('scroll', loadMore);
		};
	}, []);

	// Load 10 more items when user scrolls to the end of page
	const loadMore = () => {
		if (document && document.scrollingElement && document.scrollingElement.scrollHeight) {
			if (window.innerHeight + document.documentElement.scrollTop + 5 >= document.scrollingElement?.scrollHeight) {
				// fetch next 10 items from state and push to display array
				displayTracks.push(...allTracks.slice(lastIndex, lastIndex + 10));
				setDisplayTracks([...displayTracks]);
				//update the last visible index
				setLastIndex(lastIndex + 10);
			}
		}
	};

	return (
		<Container>
			<SearchBar handleSearch={handleSearch} />
			{isLoading ? (
			<LoadingSpinner />) : (displayTracks.length > 0 ? <TracksList tracks={displayTracks} /> : 'No data found')}
		</Container>
	);
}

export default App;

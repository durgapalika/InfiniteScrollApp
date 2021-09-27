import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootStore } from './store';
import { ITracksState } from './reducers/tracksReducer';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { act } from 'react-dom/test-utils';

afterEach(cleanup);

const initialState: RootStore = {
	tracks: {
		loading: false,
		tracks: [],
	},
};

const tracksResponse: ITracksState = {
	loading: true,
	tracks: [
		{
			artistName: 'Artist 1',
			country: 'USA',
			kind: 'Song',
			previewUrl: 'http://abc.com',
			primaryGenreName: 'Rocking',
			releaseDate: '12-12-2009',
			trackName: 'Track 1',
			trackPrice: 9.99,
			wrapperType: '',
			trackViewUrl: '',
			artworkUrl60: '',
		},
	],
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

const wrapper = (ui: React.ReactElement) => {
	return <Provider store={store}>{ui}</Provider>;
};

describe('Tracks Test', () => {
	it('Render', async () => {
		render(wrapper(<App />));

		const searchTextBox = await screen.findByTestId('txtSearch');
		searchTextBox.setAttribute('value', 'jack');

		const searchButton = await screen.findByTestId('btnSearch');
		await act(async () => {
			searchButton.click();
		});

		// TODO: Should check the api is actually called once and data is populated
	});
});

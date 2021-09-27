import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import TracksList from '../TracksList';
import { TrackItem } from '../../entities/trackitem';

afterEach(cleanup);

const track: TrackItem = {
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
};
const tracks: TrackItem[] = [{ ...track }];

describe('Tracks List', () => {
	it('It renders properly with single track', async () => {
		render(<TracksList tracks={tracks} />);

		expect(await screen.findByTestId('trackContainer')).toBeVisible();
		expect(await screen.findAllByTestId('trackDetails')).toHaveLength(1);
	});

	it('It renders properly with 2 tracks', async () => {
		tracks.push({ ...track, artistName: 'Artist 2' });
		render(<TracksList tracks={tracks} />);

		expect(await screen.findByTestId('trackContainer')).toBeVisible();
		expect(await screen.findAllByTestId('trackDetails')).toHaveLength(2);
	});

	it('It renders properly with 10 tracks', async () => {
		tracks.length = 0;
		tracks.push(
			{ ...track },
			{ ...track, artistName: 'Artist 2' },
			{ ...track, artistName: 'Artist 3' },
			{ ...track, artistName: 'Artist 4' },
			{ ...track, artistName: 'Artist 5' },
			{ ...track, artistName: 'Artist 6' },
			{ ...track, artistName: 'Artist 7' },
			{ ...track, artistName: 'Artist 8' },
			{ ...track, artistName: 'Artist 9' },
			{ ...track, artistName: 'Artist 10' }
		);
		render(<TracksList tracks={tracks} />);

		expect(await screen.findByTestId('trackContainer')).toBeVisible();
		expect(await screen.findAllByTestId('trackDetails')).toHaveLength(10);
	});
});

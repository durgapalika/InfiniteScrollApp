import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { TrackItem } from '../../entities/trackitem';
import SingleTrack from '../SingleTrack';

afterEach(cleanup);

const track: TrackItem = {
	artistName: 'Artist 1',
	country: 'USA',
	kind: 'Song',
	previewUrl: 'http://abc.com/z.png',
	primaryGenreName: 'Rock',
	releaseDate: '12-12-2009',
	trackName: 'Track 1',
	trackPrice: 9.99,
	wrapperType: '',
	trackViewUrl: '',
	artworkUrl60: 'http://abc.com/z.png',
};

describe('Single Track', () => {
	it('It renders the view properly', async () => {
		const { artistName, country, kind, previewUrl, artworkUrl60, primaryGenreName, trackViewUrl, releaseDate, trackName, trackPrice } = track;
		render(
			<SingleTrack
				trackName={trackName}
				artistName={artistName}
				country={country}
				previewUrl={previewUrl}
				trackPrice={trackPrice}
				primaryGenreName={primaryGenreName}
				index={0}
				trackViewUrl={trackViewUrl}
				artworkUrl60={artworkUrl60}
				releaseDate={releaseDate}
			/>
		);

		expect(await screen.findByTestId('trackDetails')).toBeVisible();
		expect(await screen.findByTestId('imgPreview-0')).toBeVisible();
		expect(await screen.findByTestId('track-details-0')).toBeVisible();
		expect(await screen.findByTestId('h4TrackName-0')).toBeVisible();
		expect(await screen.findByTestId('spanArtist-0')).toBeVisible();
		expect(await screen.findByTestId('spanGenre-0')).toBeVisible();
		expect(await screen.findByTestId('spanCountry-0')).toBeVisible();
		expect(await screen.findByTestId('spanPrice-0')).toBeVisible();
	});

	it('It renders the view with correct content', async () => {
		const { artistName, country, kind, previewUrl, artworkUrl60, primaryGenreName, trackViewUrl, releaseDate, trackName, trackPrice } = track;
		render(
			<SingleTrack
				trackName={trackName}
				artistName={artistName}
				country={country}
				previewUrl={previewUrl}
				trackPrice={trackPrice}
				primaryGenreName={primaryGenreName}
				index={0}
				trackViewUrl={trackViewUrl}
				artworkUrl60={artworkUrl60}
				releaseDate={releaseDate}
			/>
		);

		//expect((await screen.findByTestId('imgPreview-0')).attributes.getNamedItem('src')?.value).toBe('http://abc.com/z.png');
		expect((await screen.findByTestId('h4TrackName-0')).textContent).toBe('Track: Track 1');
		expect((await screen.findByTestId('spanArtist-0')).textContent).toBe('Artist: Artist 1');
		expect((await screen.findByTestId('spanGenre-0')).textContent).toBe('Genre: Rock');
		expect((await screen.findByTestId('spanCountry-0')).textContent).toBe('Country: USA');
		expect((await screen.findByTestId('spanPrice-0')).textContent).toBe('Price: 9.99');
	});
});

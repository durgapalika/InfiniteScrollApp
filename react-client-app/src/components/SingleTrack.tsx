import React from 'react';
import { ArtistName, PrimaryGenre, Track, TrackCountry, TrackDetails, TrackName, TrackPreviewImage, TrackPrice } from '../App.styles';

interface SingleTrackprops {
	trackName: string;
	artistName: string;
	primaryGenreName: string;
	trackViewUrl: string;
	previewUrl: string;
	trackPrice: number;
	releaseDate: string;
	country: string;
	artworkUrl60: string;
	index: number;
}

const SingleTrack = ({
	trackName,
	artistName,
	primaryGenreName,
	country,
	releaseDate,
	artworkUrl60,
	previewUrl,
	trackViewUrl,
	trackPrice,
	index,
}: SingleTrackprops) => {
	return (
		<Track data-testid="trackDetails">
			<TrackPreviewImage data-testid={`imgPreview-${index}`}>
				<img src={artworkUrl60}  data-testid={`img-${index}`}/>
			</TrackPreviewImage>
			<TrackDetails data-testid={`track-details-${index}`}>
				<TrackName data-testid={`h4TrackName-${index}`}>{`Track: ${trackName}`}</TrackName>
				<ArtistName data-testid={`spanArtist-${index}`}>{`Artist: ${artistName}`}</ArtistName>
				<PrimaryGenre data-testid={`spanGenre-${index}`}>{`Genre: ${primaryGenreName}`}</PrimaryGenre>
				<TrackCountry data-testid={`spanCountry-${index}`}>{`Country: ${country}`}</TrackCountry>
				<TrackPrice data-testid={`spanPrice-${index}`}>{`Price: ${trackPrice}`}</TrackPrice>
			</TrackDetails>
		</Track>
	);
};

export default SingleTrack;

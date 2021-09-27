import React from 'react';
import { TracksContainer } from '../App.styles';
import { TrackItem } from '../entities/trackitem';
import SingleTrack from './SingleTrack';

interface TracksListProps {
	tracks: TrackItem[];
}

const TracksList = ({ tracks }: TracksListProps) => {
	return (
		<TracksContainer data-testid="trackContainer">
			{tracks &&
				tracks.map((item, index) => {
					return (
						<SingleTrack
							key={index}
							trackName={item.trackName}
							artistName={item.artistName}
							primaryGenreName={item.primaryGenreName}
							previewUrl={item.previewUrl}
							trackPrice={item.trackPrice}
							country={item.country}
							releaseDate={item.releaseDate}
							trackViewUrl={item.trackViewUrl}
							artworkUrl60={item.artworkUrl60}
                            index={index}
						/>
					);
				})}
		</TracksContainer>
	);
};

export default TracksList;

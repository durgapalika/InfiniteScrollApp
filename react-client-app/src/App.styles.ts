import styled from 'styled-components';

export const Container = styled.div`
display:flex;
flex-direction:column;
`;

export const SearchContainer = styled.div`
display:flex;
flex-direction:row
padding:10px`;

export const TracksContainer = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
`;

export const Track = styled.div`
display:flex;
flex-direction:row;
border: 1px;
`

export const TrackDetails = styled.div`
display:flex;
flex-direction:column;

`
export const TrackPreviewImage = styled.div`
height:120px;
width:160px;
text-align:center;
`

export const TrackName = styled.h5`
line-height:0
`

export const ArtistName = styled.span`
line-height:0;
padding: 10px 0 10px 0;
`
export const PrimaryGenre = styled.span`
line-height:0;
padding: 10px 0 10px 0;
`

export const TrackCountry = styled.span`
line-height:0;
padding: 10px 0 10px 0;
`

export const TrackPrice = styled.span`
line-height:0;
padding: 10px 0 10px 0;
`
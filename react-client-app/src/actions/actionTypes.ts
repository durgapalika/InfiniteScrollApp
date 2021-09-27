import { TrackItem } from '../entities/trackitem';

export const FETCH_TRACKS_LOADING = "FETCH_TRACKS_LOADING";
export const FETCH_TRACKS_SUCCESS = "FETCH_TRACKS_SUCCESS"

interface FetchTracksLoading {
    type: typeof FETCH_TRACKS_LOADING,
    payload: string;
}

interface FetchTracksSuccess {
    type: typeof FETCH_TRACKS_SUCCESS,
    payload: TrackItem[];
}

export type fetchTrackDispathcTypes = FetchTracksLoading | FetchTracksSuccess
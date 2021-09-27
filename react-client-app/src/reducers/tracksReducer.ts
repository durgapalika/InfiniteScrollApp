import { fetchTrackDispathcTypes, FETCH_TRACKS_LOADING, FETCH_TRACKS_SUCCESS } from '../actions/actionTypes';
import { TrackItem } from '../entities/trackitem';

export interface ITracksState {
    loading: boolean;
    tracks: TrackItem[];
}

const initialState: ITracksState = {
    loading: false,
    tracks: []
}

export const tracksReducer = (state: ITracksState = initialState, action: fetchTrackDispathcTypes): ITracksState => {
    switch (action.type) {
        case FETCH_TRACKS_LOADING: {
            return { ...state, loading: true, tracks: [] }
        }
        case FETCH_TRACKS_SUCCESS: {
            return {...state, loading: false, tracks: action.payload }
        }
        default:
            return state;
    }

}
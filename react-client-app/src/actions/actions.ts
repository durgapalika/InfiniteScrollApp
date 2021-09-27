import axios from 'axios';
import { Dispatch } from 'redux';
import { fetchTrackDispathcTypes, FETCH_TRACKS_LOADING, FETCH_TRACKS_SUCCESS } from './actionTypes'

export const fetchTracks = (searchTerm: string) => async (dispatch: Dispatch<fetchTrackDispathcTypes>) => {
    try {
        dispatch({
            type: FETCH_TRACKS_LOADING,
            payload: searchTerm
        })

        // TODO: baseurl should go into utility file
        const res = await axios.get(`http://localhost:3005/search/${searchTerm}`);
        dispatch({
            type: FETCH_TRACKS_SUCCESS,
            payload: res.data.results
        })

    } catch (e) {

    }
}

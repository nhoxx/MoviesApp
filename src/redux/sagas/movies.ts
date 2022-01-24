import axios from "axios";
import { Alert } from "react-native";
import { put, takeLatest } from "redux-saga/effects";
import { MoviePayload } from "../actions";
import Types from "../types";

function* getList(action: any) {
    const payload = action.payload as MoviePayload;
  
    try {
        const respone = yield axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=26763d7bf2e94098192e629eb975dab0&page=${payload.page}`);
        console.log('respone', respone)
        if(respone.status == 200)
        {
            const res = {
                PageIndex: payload.page,
                data: respone.data.results,
                totalPage: respone.data.total_pages
            }
            yield put({type: Types.GET_LIST_MOVIES_SUCCESS, payload: res})
        } else {
            Alert.alert(respone.message)
        }
    } catch (error: any) {
        Alert.alert(error.message)
    } finally {
        payload?.callBack?.();
    }
};
function* moviesSagas() {
    yield takeLatest(Types.GET_LIST_MOVIES, getList);
}

export default moviesSagas;
import Types from "../types";
export type MoviePayload = {
    page: number,
    callBack: () => void,
}
const getListMovie = (payload: MoviePayload) => ({
    type: Types.GET_LIST_MOVIES,
    payload
});
export {
    getListMovie
}
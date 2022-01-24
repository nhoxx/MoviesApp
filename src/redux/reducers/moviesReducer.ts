import Types from "../types";

export type MovieType = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: Array<Number>,
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
};
type actionType = {
  type: string;
  payload: any;
};

const initState = {
  data: Array<MovieType>(),
  totalPage: 0,
};

export type MovicesReducer = typeof initState;
export const moviesReducerSelector = (state: any) => state.moviesReducer as MovicesReducer;

const moviesReducer = (state = initState, action: actionType) => {
  const { type, payload } = action;
  switch (type) {
    case Types.GET_LIST_MOVIES_SUCCESS:
      return {
        ...state,
        data: payload.PageIndex != 1 ? [...state.data as any, ...payload.data] : payload.data,
        totalPage: payload.totalPage ?? 0,
      };
    default:
      return state;
  }
};

export { moviesReducer };

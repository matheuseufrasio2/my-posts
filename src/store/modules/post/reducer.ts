import { Reducer } from "redux";
import produce from "immer";
import { IPostState } from "./types";

const INITIAL_STATE: IPostState = {
  items: [],
};

const posts: Reducer<IPostState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "UPDATE_POSTS": {
      const { posts } = action.payload;

      return produce(state, (draft) => {
        draft.items = posts;
      });
    }
    default: {
      return state;
    }
  }
};

export default posts;

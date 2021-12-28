import { createStore } from "redux";
import { IPostState } from "./modules/post/types";
import rootReducer from "./modules/rootReducer";

export interface IState {
  posts: IPostState;
}

const store = createStore(rootReducer);

export default store;

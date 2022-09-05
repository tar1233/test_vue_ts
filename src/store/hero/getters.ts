import { HeroStateType } from "@/store/hero/state";

const getters = {
    heroes: (state: HeroStateType) => {
        return state.heroes;
    },
    post_code: (state: HeroStateType) => {
        return state.post_code;
    },
    payload: (state: HeroStateType) => {
        return state.payload;
    },
    loading: (state: HeroStateType) => state.loading,

};
export default getters;

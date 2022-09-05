import * as types from "./types";
import { HeroStateType } from "@/store/hero/state";
import { HeroModel } from "@/models/heroModel";
import { PostCodeModel } from "@/models/heroModel";
import { PayloadModel } from "@/models/heroModel";

const mutations = {
    [types.GET_HEROES](state: HeroStateType, heroes: HeroModel[]) {
        state.heroes = heroes;
    },

    [types.GET_HEROES_POST](state: HeroStateType, post_code: PostCodeModel[]) {
        state.post_code = post_code;
    },
    [types.GET_HEROES_POST_ID](state: HeroStateType, payload: PayloadModel) {
        state.payload = payload;
    },

    [types.LOADING_HERO](state: HeroStateType, toggle: boolean) {
        state.loading = toggle;
    },

    //   [types.REMOVE_HERO](state: HeroStateType, id: string) {
    //     state.heroes = state.heroes.filter((h) => h.id !== id);
    //   },

    [types.ADD_HERO](state: HeroStateType, createdHero: HeroModel) {
        state.heroes.push(createdHero);
    },

    [types.UPDATE_HERO](state: HeroStateType, updatedHero: HeroModel) {
        // const index = state.heroes.findIndex((h) => h.id === updatedHero.id);
        state.heroes[updatedHero.id]= updatedHero;
    },
};

export default mutations;

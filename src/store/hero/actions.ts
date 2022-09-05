import * as types from "./types";
import {
    deleteHeroAxios,
    getHeroesAxios,
    postHeroAxios,
    putHeroAxios,
    getHeroesPostCodeAxios,
    getHeroesPayloadAxios,
} from "@/services/heroService";
import { HeroModel } from "@/models/heroModel";

//export get
export function getHeroesAction({ commit }: any, payload: string) {
    commit(types.LOADING_HERO, true);
    return getHeroesAxios(payload)
        .then(({ data }) => commit(types.GET_HEROES, data))
        .catch((e) => console.log(e.message))
        .finally(() => commit(types.LOADING_HERO, false));
}

//export get
export function getHeroesPayloadAction({ commit }: any, payload: string) {
    commit(types.LOADING_HERO, true);
    return getHeroesPayloadAxios(payload)
        .then(({ data }) => commit(types.GET_HEROES_POST_ID, data))
        .catch((e) => console.log(e.message))
        .finally(() => commit(types.LOADING_HERO, false));
}

//export get
export function getHeroesPostCodesAction({ commit }: any) {
    commit(types.LOADING_HERO, true);
    return getHeroesPostCodeAxios()
        .then(({ data }) => commit(types.GET_HEROES_POST, data))
        .catch((e) => console.log(e.message))
        .finally(() => commit(types.LOADING_HERO, false));
}


//export remote
export function removeHeroAction({ commit }: any, payload: string) {
    commit(types.LOADING_HERO, true);
    return deleteHeroAxios(payload)
        .then(() => commit(types.REMOVE_HERO, payload))
        .catch((e) => console.log(e.message))
        .finally(() => commit(types.LOADING_HERO, false));
}

//export add
export function addHeroAction({ commit }: any, createdHero: HeroModel) {
    commit(types.LOADING_HERO, true);
    return postHeroAxios(createdHero)
        .then(({ data }) => commit(types.ADD_HERO, data))
        .catch((e) => console.log(e.message))
        .finally(() => commit(types.LOADING_HERO, false));
}

//export update
export function updateHeroAction({ commit }: any, updatedHero: HeroModel) {
    commit(types.LOADING_HERO, true);
    return putHeroAxios(updatedHero)
        .then(() => commit(types.UPDATE_HERO, updatedHero))
        .catch((e) => console.log(e.message))
        .finally(() => commit(types.LOADING_HERO, false));
}

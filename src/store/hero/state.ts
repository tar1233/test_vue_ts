import { HeroModel, PostCodeModel, PayloadModel } from "@/models/heroModel";

export type HeroStateType = {
    [x: string]: any;
    heroes: HeroModel[];
    hero: HeroModel;
    loading: boolean;
    post_code: PostCodeModel[];
    payload: PayloadModel;
};

const state: HeroStateType = {
    heroes: [],
    hero: {
        id: 0,
        name: "",
        desc: "",
        price: "",
        post_code: "",
    },
    payload: {
        average: "",
        median: ""
    },
    loading: false,
    post_code: []
};

export default state;

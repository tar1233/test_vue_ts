import { createStore, createLogger } from "vuex";
import heroModule from "./hero";

export const store = createStore({
    modules: {
        heroModule,
    },
    plugins: [createLogger()],
});

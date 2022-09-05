import { api  } from "@/api/axios";
import { HeroModel } from "../models/heroModel";


//get axios
// https://test-backend.baania.dev/home?skip=1&take=10
export async function getHeroesAxios(mid:string ) {
    // console.log("GET_HEROES_AXIOS:");
    return await api.get<HeroModel[]>(`/home?skip=1&take=${mid}`);
  }

//get axios
// https://test-backend.baania.dev/postCode
export async function getHeroesPostCodeAxios() {
    // console.log("GET_HEROES_AXIOS:");
    return await api.get<HeroModel[]>(`/postCode`);
  }

//get axios
//https://test-backend.baania.dev/postCode/1
export async function getHeroesPayloadAxios(mid:string ) {
    // console.log("GET_HEROES_AXIOS:");
    return await api.get<HeroModel[]>(`/postCode/${mid}`);
  }

//del axios
// https://test-backend.baania.devhome/9
export async function deleteHeroAxios(id: string) {
    return await api.delete<void>(`/home/${id}`);
  }
  
 //create axios  payload 400
//  https://test-backend.baania.dev/home
export async function postHeroAxios(hero: HeroModel) {
    return await api.post<HeroModel>(`/home`, hero);
  }
  
 //update axios
//  https://test-backend.baania.dev/home/9
export async function putHeroAxios(hero: HeroModel) {
    return await api.patch<void>(`/home/${hero.id}`, hero);
  }
  

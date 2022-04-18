import { useQuery } from "react-query"
import axios from 'axios'

export default function useSuperHeroData(heroId) {
 return useQuery(['rq-super',heroId ],()=>{
    return axios.get(`http://localhost:4000/superheroes/${heroId}`) 
   },{
    //  cacheTime:
    // staleTime
    //  refetchOnMount:'always',
    //  refetchOnWindowFocus:'true',
    // refetchInterval:3000,
    // enabled:enabled,
   }
   )
}



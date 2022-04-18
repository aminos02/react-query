import { useQuery } from "react-query"
import axios from 'axios'

export default function useSuperHeroesData(onSuccess,onEchec) {
 return useQuery('rq-super',()=>{
    return axios.get('http://localhost:4000/superheroes') 
   },{
    //  cacheTime:
    // staleTime
    //  refetchOnMount:'always',
    //  refetchOnWindowFocus:'true',
    // refetchInterval:3000,
    // enabled:enabled,
    onSuccess:onSuccess,
    onError:onEchec,
   
   }
   )
}



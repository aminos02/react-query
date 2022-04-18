import { useQuery } from "react-query"
import axios from 'axios'

export default function useSuperHeroData(heroId) {
return useQuery(['rq-super',heroId ],({queryKey})=>{
   //  console.log(queryKey)  // ['rq-super',heroId ]
    return axios.get(`http://localhost:4000/superheroes/${queryKey[1]}`) 
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



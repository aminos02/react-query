import { useQuery } from "react-query"
import axios from 'axios'
export const RQSuperHeroesPage = () => {
  const onSuccess=()=>{
    console.log('success')
  }
  const onEchec=()=>{
    console.log('success')
  }

  const {data,isError,error,isLoading,isFetching,refetch} =useQuery('rq-super',()=>{
    return axios.get('http://localhost:4000/superheroes') 
   },{
    //  cacheTime:
    // staleTime
    //  refetchOnMount:'always',
    //  refetchOnWindowFocus:'true'
    enabled:false,
    onSuccess:onSuccess,
    onError:onEchec
   }
   )
  
   if(isLoading || isFetching) return <h4>... Loading</h4>

   if(isError) return <h4>Error :: {error.message}</h4>

  
  return (
    <div>

  <h2>React Query Super Heroes Page</h2>
    <button onClick={refetch}>Fetch</button>

    {data && <ul>
      {data.data.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>}
    </div>
  )
}

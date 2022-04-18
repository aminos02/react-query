import { Link } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroesData";


export const RQSuperHeroesPage = () => {
  const onSuccess=(data)=>{
    console.log('success',data)
  }
  const onEchec=(err)=>{
    console.log('success',err)
  }
  
  const {data,isError,error,isLoading,isFetching,refetch}=useSuperHeroData(onSuccess,onEchec)
  // 
  
   if(isLoading || isFetching) return <h4>... Loading</h4>

   if(isError) return <h4>Error :: {error.message}</h4>

  
  return (
    <div>

  <h2>React Query Super Heroes Page</h2>
    <button onClick={refetch}>Fetch</button>

    {data && <ul>
      {data.data.map(item=>
      <Link to={`/super-heroes/${item.id}`} key={item.id}>
      <li >{item.name}</li>
      </Link>
      )
      }
      </ul>}
    </div>
  )
}

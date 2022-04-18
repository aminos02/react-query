import { Link, useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";


export const RQSuperHeroPage = () => {

  const {heroId}=useParams()
  
  const {data,isError,error,isLoading,isFetching,refetch}=useSuperHeroData(heroId)
  // 
  
   if(isLoading || isFetching) return <h4>... Loading</h4>

   if(isError) return <h4>Error :: {error.message}</h4>

  
  return (
    <div>
      {data?.data.name}  ::: {data?.data.alterEgo}
    </div>
  )
}

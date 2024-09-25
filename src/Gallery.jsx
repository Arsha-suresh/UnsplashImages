import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import { useGlobalContext } from './context';

const url ='https://api.unsplash.com/photos/?client_id=8E71VCEOTSaSUEM5goPsbtOMCAO3yjbIBfq1DRV9Of8'

 const Gallery = () => {
  const { searchTerm } = useGlobalContext();
    const response = useQuery({
        queryKey:['images', searchTerm],
        queryFn :async()=>{
            const result = await axios.get(`${url}&query=${searchTerm}`);
            return result.data;
        }
    });
    console.log(response);
    if(response.isLoading){
      return <section>
        <h4>...LOading</h4>
      </section>
    }
    if(response.isError){
      return (
        <section>
          <h4>Threre was an error</h4>
        </section>

      );
    }
     console.log(response);
       const results = response.data;
       if(results?.length<1){
        return (
          <section>
            <h4>No results found</h4>
          </section>
        );
       }
    
  return (
    <div>{
       results?.map((item)=>{
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} alt={item?.alt?.description}/>
       })
      }</div>
  )
}
export default Gallery;
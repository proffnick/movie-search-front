import React from "react";
import { MainAppContainer } from "./HOC/MainAppContainer";
import { MovieDetails } from "./layouts/MovieDetails";
import { useParams } from 'react-router-dom';
import { useMovieApi } from "./Api/movieApi";

export const FullMovieDetails = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = React.useState({});
  const [isLoading, setIsloading] = React.useState(true);
  const { api } = useMovieApi();

  // search movie when component mounts
  const searchMovie = React.useCallback(async () => {
    // seach for the move
    if(id && id !== (movieDetails?.id)){
      try {
        setIsloading(true);
        const getMovie = await api.get(`/search?id=${id}`);
        setIsloading(false);
        if(getMovie.ok){
          const movi = (getMovie.data?.data) ? (getMovie.data?.data): {};
          setMovieDetails({...movi}); 
        }
      } catch (error) {
        console.log(error);
        setIsloading(false);
      }
    }
    // set is loading to false
    
  }, [id]);

  React.useEffect(() => {
    searchMovie();
  }, []);

  return (
    <MainAppContainer>
      {
      isLoading&&<>
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
      }
      {
      (!isLoading)&&
        <MovieDetails movie={movieDetails} />
      }
    </MainAppContainer>
  )

}


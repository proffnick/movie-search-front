import React from "react";


export const MovieResults = ({ movie = {}}) => {
  return(
    <>
    {(movie?.title)&&
      <div className="card mb-3 border-0 shadow-sm">
        <div className="row g-0 align-items-center">
          <div className="col-3 ">
            <img src={movie.poster} style={{maxHeight: '80Px'}} className="img-fluid img-thumbnail rounded-start d-block mx-auto rounded" alt={movie.title} />
          </div>
          <div className="col-9">
            <div className="card-body">
              <h5 className="card-title text-muted">{movie.title}</h5>
              <p className="card-text text-muted">{movie.actors}</p>
              <p className="card-text">
                <small 
                  className="text-body-secondary">Realease in {movie.year}
                </small>
                <a data-testid="view-more" href={`/movie-details/${movie.imdbID}`} className="btn btn-sm btn-outline-secondary float-end">
                  <i className="bi bi-eye align-middle" /> more
                </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    }
    {!(movie?.title)&&
      <div className="text-center">
        <h5 className="text-secondary">No result</h5>
      </div>
    }
    </>
  );
}
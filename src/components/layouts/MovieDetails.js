import React from "react";
import useSettings from "../../hooks/useSettings";
import image from '../../media/default.png';


export const MovieDetails = ({ movie = {} }) => {
  const { constants } = useSettings();
  return (
    <div className="w-100">
      {(movie.title)&&<>
        <div className="mb-2">
          <a href="/" className="btn btn-outline-primary btn-sm border-0"> <i className="bi bi-arrow-left align-middle"/> back</a>
        </div>
        <div className="card mb-3 border-0">
        <div className="row g-0">
          <div className="col-12 col-lg-4 mb-3 mb-lg-0">
            <img src={(movie.poster && movie.poster !== 'N/A') ? movie.poster: image} className="img-fluid d-block mx-auto" alt={movie.title} />
          </div>
          <div className="col-12 col-lg-8">
            <div className="card-body bg-body-secondary">
              <h3 className="card-title text-muted">{movie.title}</h3>
              <div className="my-2 d-flex justify-content-between mb-3">
                <div className="me-2" title="box office">
                  <i className="bi bi-xbox align-middle text-muted me-2"></i>
                  <span className="align-middle text-muted">{movie.boxOffice}</span>
                </div>
                <div className="me-2" title="imdb votes">
                  <i className="bi bi-hand-thumbs-up align-middle text-muted me-2"></i>
                  <span className="align-middle text-muted">{movie.imdbVotes}</span>
                </div>
                <div className="me-2" title="imdb Rating">
                  <i className="bi bi-heart align-middle text-muted me-2"></i>
                  <span className="align-middle text-muted">{movie.imdbRating}</span>
                </div>
                <div className="" title="meta score">
                  <i className="bi bi-bar-chart align-middle text-muted me-2"></i>
                  <span className="align-middle text-muted">{movie.metascore}</span>
                </div>
              </div>
              <h4 className="card-title text-muted">{constants.desc}</h4>
              <p className="mb-3">{movie.plot}</p>
              <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Year:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.year}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Type:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.type}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">DVD:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.dvd}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Genre:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.genre}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Rated:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.rated}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Released:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.released}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Run Time:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.runtime}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Language:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.language}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Country:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.country}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Awards:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.awards}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Writer:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.writer}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Director:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.director}
                </small>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 bg-transparent px-0">
                <strong className="me-2">Actors:</strong>
                <small 
                  style={{fontSize: "0.9em"}} 
                  className="text-muted">
                    {movie.actors}
                </small>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </>}
      {!(movie.title)&&<>
        <div className="text-center">
          <p className="fw-bolder mb-2">{constants.errors.nomovie}</p>
          <a href="/" className="btn btn-outline-primary btn-sm border-0">Go back</a>
        </div>
      </>}
    </div>
  )
}
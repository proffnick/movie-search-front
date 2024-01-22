import React, { useRef, useState, useEffect, useMemo } from "react";
import { useMovieApi }  from "../Api/movieApi";
import { MovieResults } from "./MovieResult";
import useValidate      from "../helpers/useValidate";
import useSettings      from "../../hooks/useSettings";
import dayjs            from "dayjs";

export const SearchModule = () => {
  const { api }           = useMovieApi();
  const { constants }     = useSettings();
  const searchInputRef    = useRef();
  const searchButtonRef   = useRef();
  const searchPrevRef     = useRef();
  const [result, setResult] = useState({});
  const { doValidation, error, setError }   = useValidate();
  const vObject = {"maxLength": 150, "required": true, "type": 'search'};
  const [isLoading, setIsloading] = useState(false);
  const [recents, setRecents]     = useState([]);

  // update if any error

  // if error remove after 6 seconds
  useEffect(() => {
    if(error){
      setTimeout(() => {
        setError("");
      }, constants.errorTimer);
    }
  }, [error, constants]);

  
  // get previous searches on launch
  useEffect(() => { getPreviusSearches(); }, []); 

  // listen to when usre is typing in the input box
  const performSearch = async (title = "") => {
    try {
      setIsloading(true);
      const response = await api.get(`/search?title=${encodeURIComponent(title)}`);
      setIsloading(false);
      if(response.ok){
        // parse data
        if((response.data?.data)){
          setResult({...response.data?.data});
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // filter list while typing
  const filterRecentList = (e) => {
    try {
      const value = e.target.value;
      if(value.trim().length === 3 && recents.length === 0){
        getPreviusSearches();
      }
      if(value.trim().length >= 3){
        setRecents([...recents.filter(m => m.query.includes(value))]);
      }
    } catch (error) {
      console.log(error);
    }

  }

  // get results of the most recent searches
  const getPreviusSearches = async () => {
    try {
      setIsloading(true);
      api.get(`/recent-searches`).then(response => {
        setIsloading(false);
        if(response.ok){
          // parse data
          if((response.data?.data)){
            toggleRecents();
            setRecents([...response.data?.data]);
          }
        }
      }).catch(error => {
        setIsloading(false);
        console.log(error);
      });

    } catch (error) {
      console.log(error.message);
    }
  }

  // when any of the recent search results is clicked
  const onSelect = (m) => {      
    const event = new Event("click", { bubbles: true, cancelable: false })
    searchInputRef.current.value = m.query;
    searchButtonRef.current.dispatchEvent(event);
  }

  // print recent searches
  const printPreviousSearches = useMemo(() => {
    if(recents.length){
      return recents.map( m => (
          <li onClick={() => onSelect(m)} key={m.id} className="list-group-item d-flex justify-content-between align-items-center recent border-0 py-2 my-1 px-0">
            {m.query}
            <small style={{fontSize: "0.7em"}} className="text-muted">{dayjs(m.timestamp).format("DD/MM/YYYY")}</small>
          </li>
      ) )
    }
  }, [recents]);


  // clear recent searches
  const clearRecentSearches = async () => {
    try {
      setIsloading(true);
      api.get(`/clear-searches`).then(response => {
        console.log(response, " delete response");
        setRecents([...[]]);
        setIsloading(false);
        toggleRecents("off");
      }).catch(error => {
        setIsloading(false);
        console.log(error, "delete failure error");
      });
    } catch (error) {
      setIsloading(false);
      console.log(error, " error claring");
    }
  }
  
  
  // do search
  const doSearch = async () => {
    try {
      // hide previous search results
      toggleRecents('off');

      const validate = doValidation(vObject, searchInputRef.current.value);
      if(validate){
        performSearch(searchInputRef.current.value);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  // toggle recent results
  const toggleRecents = (to = "on") => {
    try {
      if(to === "on"){
        if(recents.length) searchPrevRef.current.style.display = "block";
      }else{
        searchPrevRef.current.style.display = "none";
      }
    } catch (error) {
      
    }
  }
  
  return(
    <div data-testid="searchModule" className="position-relative w-100">
      <div 
        onMouseLeave={() => toggleRecents('off')}
        className="search-main rounded-3 border p-2 bg-white">
        <div className="input-group search-input">
          <input
            onMouseEnter={() => toggleRecents()}
            onKeyUp={filterRecentList}
            ref={searchInputRef}
            type="text" 
            className="form-control border-0 text-black-50 fw-bold" 
            placeholder="Search movie title e.g. Rush Hour" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2" 
          />
          <button
            data-testid="search-button" 
            disabled={ isLoading? true: false }
            onClick={doSearch}
            ref={searchButtonRef}
            className="btn btn-primary border-0 px-3 " 
            type="button" 
            id="button-addon2">
              {!isLoading&&<i className="bi bi-search"/>}
              {isLoading&&<>
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>}
          </button>
        </div>
        {error&&<>
          <div className="alert alert-danger alert-dismissible fade show my-4 border-0 py-2" role="alert">
            <strong>Error:</strong> {error}
          </div>
        </>}
        {(recents.length !== 0)&&<div 
        ref={searchPrevRef} 
        className="search-prev-searches p-2 p-lg-4" 
        style={{display: 'none'}}>
          {(recents.length !== 0)&&<h6 className="text-muted">
            Recent Searches
            <button
              title="Clear recent searches"
              disabled={isLoading} 
              onClick={clearRecentSearches} 
              className="btn btn-sm btn-outline-danger float-end border-0">
              <i className="bi bi-trash align-middle fs-6"/>
            </button>
            </h6>}
          <ul className="list-group">
          {printPreviousSearches}
          </ul>
        </div>}
      </div>
      <div className="search-results">
        {(Object.keys(result).length > 0)&&<MovieResults movie={result} />}
      </div>
    </div>
  )
}
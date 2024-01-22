import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
  } from "react-router-dom";
import { FullMovieDetails } from "../FullMovieDetails";
import { MovieSearchModule } from "../MovieSearchModule";


  export const AppRouterHOC = ({ children }) => {
    
    return <Router>
      <Routes>
        <Route 
          exact 
          path='/movie-details/:id' 
          element={<FullMovieDetails />} 
        />
        <Route 
          path="*" 
          element={<MovieSearchModule />} 
        />
      </Routes>
      {children}
    </Router>
  }
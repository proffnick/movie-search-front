import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import App from './App';
import { MovieDetails } from './components/layouts/MovieDetails';
import { MovieResults } from './components/layouts/MovieResult';
import { SearchModule } from './components/layouts/SeachModule';


describe("Testing for app functionality", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
  
  it('renders search bar on launch', () => {
    render(<App />);
    const searchModuleComponent = screen.getByTestId("searchModule");
    expect(searchModuleComponent).toBeInTheDocument();
  });
  
  it('Render Movie Details if details provided', () => {
    render(<MovieDetails movie={{
          "title": "White House Down",
          "year": "2013",
          "rated": "PG-13",
          "released": "28 Jun 2013",
          "runtime": "131 min",
          "genre": "Action, Drama, Thriller",
          "director": "Roland Emmerich",
          "writer": "James Vanderbilt",
          "actors": "Channing Tatum, Jamie Foxx, Maggie Gyllenhaal",
          "plot": "While on a tour of the White House with his young daughter, a Capitol policeman springs into action to save his child and protect the president from a heavily armed group of paramilitary invaders.",
          "language": "English",
          "country": "United States",
          "awards": "3 wins & 9 nominations",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmI5ZGIxOGMtMjcwMS00Yzk3LWE0YWUtMzc5YTFhNGQ4OWZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
          "ratings": [
              {
                  "source": "Internet Movie Database",
                  "value": "6.3/10"
              },
              {
                  "source": "Rotten Tomatoes",
                  "value": "51%"
              },
              {
                  "source": "Metacritic",
                  "value": "52/100"
              }
          ],
          "metascore": "52",
          "imdbRating": "6.3",
          "imdbVotes": "233,620",
          "imdbID": "tt2334879",
          "type": "movie",
          "dvd": "22 Oct 2013",
          "boxOffice": "$73,103,784",
          "production": "N/A",
          "website": "N/A",
          "response": "True"
      }} />);
    const searchModuleComponent = screen.getByRole("img");
    expect(searchModuleComponent).toBeInTheDocument();
  });
  
  it('Render view more button if movie found ', () => {
    render(<MovieResults movie={{
          "title": "White House Down",
          "year": "2013",
          "rated": "PG-13",
          "released": "28 Jun 2013",
          "runtime": "131 min",
          "genre": "Action, Drama, Thriller",
          "director": "Roland Emmerich",
          "writer": "James Vanderbilt",
          "actors": "Channing Tatum, Jamie Foxx, Maggie Gyllenhaal",
          "plot": "While on a tour of the White House with his young daughter, a Capitol policeman springs into action to save his child and protect the president from a heavily armed group of paramilitary invaders.",
          "language": "English",
          "country": "United States",
          "awards": "3 wins & 9 nominations",
          "poster": "https://m.media-amazon.com/images/M/MV5BYmI5ZGIxOGMtMjcwMS00Yzk3LWE0YWUtMzc5YTFhNGQ4OWZmXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
          "ratings": [
              {
                  "source": "Internet Movie Database",
                  "value": "6.3/10"
              },
              {
                  "source": "Rotten Tomatoes",
                  "value": "51%"
              },
              {
                  "source": "Metacritic",
                  "value": "52/100"
              }
          ],
          "metascore": "52",
          "imdbRating": "6.3",
          "imdbVotes": "233,620",
          "imdbID": "tt2334879",
          "type": "movie",
          "dvd": "22 Oct 2013",
          "boxOffice": "$73,103,784",
          "production": "N/A",
          "website": "N/A",
          "response": "True"
      }} />);
    const searchModuleComponent = screen.getByTestId("view-more");
    expect(searchModuleComponent).toBeInTheDocument();
  });
  
  it('If no input and search button clicked ', () => {
    render(<SearchModule />);
    fireEvent.click(screen.getByTestId('search-button'));
    setTimeout(() => {
      expect(screen.getByText('Error:')).toBeInTheDocument();
    }, 1000);
    
  });
})
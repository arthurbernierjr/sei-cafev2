export default function MovieDisplay(props) {
     return(
          <>
          {props.movie && props.movie.Title ? (
               <div>
                    <h2>{props.movie.Title}</h2>
                    <img src={props.movie.Poster} alt={props.movie.Title} />
                    <p> Earning {props.movie.BoxOffice}</p>
               </div>
          ) : (
               <h1>You gonna pick a movie? If the totle is more than a single word, use an underscore, instead of a space</h1>
          )}
          
          
          </>
     )
}
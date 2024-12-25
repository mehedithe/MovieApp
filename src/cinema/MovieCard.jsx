import { useContext, useState } from "react";
import { getImgUrl } from "../utils/cinema-utility";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../context";
import { toast } from "react-toastify";
const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
 const handleMovieSelection =() => {
    setSelectedMovie(movie);
    setShowModal(true);
 }

  const {cartData, setCartData} = useContext(MovieContext);

 const handleAddToCart = ( event, movie) => {
  event.stopPropagation();
  const found = cartData.find((item) => {
    return item.id === movie.id;
  })
  if(!found){
    setCartData([...cartData, movie])
    toast.success(`Movie ${movie.title} added successfully`, {
      position: "top-center",
     })
  } else {
    toast.error(`Movie ${movie.title} has been added to the cart already `, {
      position: "top-center",
  
     })
  }
  
 }
  return (
    <>
      {showModal && (
        <MovieDetailsModal 
        movie={selectedMovie} 
        onClose={handleModalClose}
        onCartAdd={handleAddToCart} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e,movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;

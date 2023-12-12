import ReactStars from 'react-stars'
const Filter=({setInput,setRating,movies})=>{
  const handleSelectChange = (event) => {
    setInput(event.target.value);
  };

    return (
        <div>
      
      <input onChange={(event) => setInput(event.target.value)} />

      
      <ReactStars
        count={5}
        size={24}
        color2={'#ffd700'}
        onChange={(newRating) => setRating(newRating)}
      />
      <select onChange={handleSelectChange}>
        <option value="">Select a movie</option>
        {movies.map((movie) => (
          <option key={movie.id} value={movie.title}>
            {movie.title}
          </option>
        ))}
      </select>
    </div>
    )
}
export default Filter
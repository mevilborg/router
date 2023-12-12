import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';

const Moviecard = ({ el }) => {
  return (
    <Card style={{ width: '18rem' }} className="card">
      {/* Link to the movie details page */}
      <Link to={`/movies/${el.id}`}>
        <Card.Img variant="top" src={el.img} />
      </Link>
      <Card.Body className="card-body">
        {/* Link to the movie details page */}
        <Link to={`/movies/${el.id}`}>
          <Card.Title className="card-title">{el.title}</Card.Title>
        </Link>
        <ReactStars count={5} size={24} value={el.rating} color2={'#ffd700'} edit={false} />

        {/* Include the movie description */}
        <Card.Text className="card-text">{el.desc}</Card.Text>

        {/* Add a button or link to navigate to the movie details page */}
        <Link to={`/movies/${el.id}`}>
          <button>See Details</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Moviecard;

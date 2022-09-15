import PropTypes from 'prop-types';
import './Cat.css';

const Cat = ( { cat } ) => {
    return (
    <div className="cat">
        <img className="cat-image" src={window.location.origin + '/cats/' + cat.image } alt="" />
        <h5>{cat.name}</h5>
    </div>
    );
}

Cat.propTypes = {
  cat: PropTypes.object
};

export default Cat;

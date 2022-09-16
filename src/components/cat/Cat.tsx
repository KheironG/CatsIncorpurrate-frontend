import PropTypes from 'prop-types';
import './Cat.scss';


interface CatObject {
    name: string;
    image: string;
    cutenessLevel: number;
    allergyInducingFur: boolean;
    livesLeft: number;
}

interface CatProps {
    cat: CatObject;
}

const Cat = ( { cat }: CatProps ) => {
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

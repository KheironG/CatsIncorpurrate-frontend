import './Cat.css';

export default function Cat( { cat } ) {
    return (
    <div className="cat">
        <img className="cat-image" src={window.location.origin + '/cats/' + cat.image } alt="" />
        <h5>{cat.name}</h5>
    </div>
    );
}

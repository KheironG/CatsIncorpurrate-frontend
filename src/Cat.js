
export default function Cat( { name, src } ) {

  return (
    <div className="cat">
        <img className="cat-image" src={window.location.origin + '/cats/' + src } />
        <h5>{name}</h5>
    </div>
  );

}

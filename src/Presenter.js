import { useState, useEffect } from 'react';
import Triggers from './Triggers.js';
import Cat from './Cat.js';

export default function Presenter( { model } ) {

    const [ sort, sortBy] = useState("none");
    const [ cats, sortCats ] = useState(model);

    useEffect(() => {
        switch ( sort ) {
            case 'none':
                sortCats(model);
                break;
            case 'lives':
                sortCats( model.slice(0).sort((a,b) => a.livesLeft - b.livesLeft) );
                break;
            case 'cutest':
                sortCats( model.slice(0).sort((a,b) => b.cutenessLevel - a.cutenessLevel ) )
                break;
            case 'uncute':
                sortCats( model.slice(0).sort((a,b) => a.cutenessLevel - b.cutenessLevel ) );
                break;
            case 'allergy':
                sortCats( model.slice(0).filter( item => !toString(item.allergyInducingFur).includes('false') ) );
                break;
            default:
                sortCats(model);
                break;
        }
    }, [ sort, model ]);

    return (
      <div className="UI">
            <Triggers sort={sort} sortBy={sortBy} />
            <div className="content">
                {cats.map(function(cat, i){
                    return(
                        <Cat cat={cat} />
                    )
                })}
            </div>
      </div>
    );

}

import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Triggers from '../triggers/Triggers.js';
import Cat from '../cat/Cat.js';

import './Presenter.css';

const Presenter = ( { model } ) => {

    const [ sortState, setSortState ] = useState("none");

    const calculateSortingOrder = ( sortState, model ) => {
        const copy = model.slice();
        switch ( sortState ) {
            case 'none':
                return copy;
                break;
            case 'lives left':
                return copy.sort((a,b) => a.livesLeft - b.livesLeft);
                break;
            case 'cute':
                return copy.sort((a,b) => b.cutenessLevel - a.cutenessLevel );
                break;
            case 'not cute':
                return copy.sort((a,b) => a.cutenessLevel - b.cutenessLevel );
                break;
            case 'atchooo':
                return copy.filter( ( {allergyInducingFur} ) => allergyInducingFur !== false );
                break;
            default:
                return copy;
                break;
        }
    };

    const sortingOrder = useMemo(() => calculateSortingOrder( sortState, model ), [ sortState, model ]);

    return (
      <div className="view">
            <Triggers sortState={sortState} setSortState={setSortState} />
            <div className="cats">
                {sortingOrder.map(function(cat){
                    return(
                        <Cat key={cat.name} cat={cat} />
                    )
                })}
            </div>
      </div>
    );

}

Presenter.propTypes = {
    model: PropTypes.array
};

export default Presenter;

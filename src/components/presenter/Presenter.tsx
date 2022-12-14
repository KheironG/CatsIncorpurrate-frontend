import { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Triggers from '../triggers/Triggers';
import Cat from '../cat/Cat';

import './Presenter.scss';


interface Prop {
    model: Array<any>;
}

const Presenter = ( { model }: Prop ) => {

    const [ sortState, setSortState ] = useState("none");

    const calculateSortingOrder = ( sortState:string, model:Array<any> ): Array<any> => {
        const copy = model.slice();
        switch ( sortState ) {
            case 'none':
                return copy;
            case 'lives left':
                return copy.sort((a,b) => a.livesLeft - b.livesLeft);
            case 'cute':
                return copy.sort((a,b) => b.cutenessLevel - a.cutenessLevel );
            case 'not cute':
                return copy.sort((a,b) => a.cutenessLevel - b.cutenessLevel );
            case 'atchooo':
                return copy.filter( ( {allergyInducingFur} ) => allergyInducingFur !== false );
            default:
                return copy;
        }
    };

    const sortingOrder = useMemo(() => calculateSortingOrder( sortState, model ), [ sortState, model ]);

    return (
      <div className="view">
            <Triggers sortState={sortState} setSortState={setSortState} />
            <div className="cats">
                {sortingOrder.map( (cat) => {
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

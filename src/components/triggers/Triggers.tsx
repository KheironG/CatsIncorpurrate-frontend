import Trigger from '../trigger/Trigger';
import PropTypes from 'prop-types';
import './Triggers.scss';

const Triggers = ( { sortState, setSortState } ) => {

    const triggers = [
        { label: 'none' },
        { label: 'cute' },
        { label: 'not cute' },
        { label: 'lives left' },
        { label: 'atchooo' },
    ];

  return (
        <div className="trigger-container">
            <b className="sorting">sorting:</b>
            <div className="triggers">
                {triggers.map( (trigger) => {
                    const triggerClass = trigger.label === sortState ? ('trigger-active') : ('trigger');
                    return(
                        <Trigger key={trigger.label} label={trigger.label} triggerClass={triggerClass} setSortState={setSortState} />
                    )
                })}
            </div>
        </div>
  );

}

Triggers.propTypes = {
    sortState: PropTypes.string,
    setSortState: PropTypes.func
}

export default Triggers;

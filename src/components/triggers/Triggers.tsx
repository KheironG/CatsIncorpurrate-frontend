import Trigger from '../trigger/Trigger';
import PropTypes from 'prop-types';
import './Triggers.scss';

interface Props {
    sortState: string;
    setSortState: ( active: string ) => void;
}

const Triggers = ( { sortState, setSortState }: Props ) => {

    const triggers: string[] = [ 'none', 'cute', 'not cute', 'lives left', 'atchooo' ];

  return (
        <div className="trigger-container">
            <b className="sorting">sorting:</b>
            <div className="triggers">
                {triggers.map( (trigger) => {
                    const triggerClass = trigger === sortState ? ('trigger-active') : ('trigger');
                    return(
                        <Trigger key={trigger} label={trigger}  triggerClass={triggerClass} setSortState={setSortState} />
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

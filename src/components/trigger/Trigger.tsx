import PropTypes from 'prop-types';
import './Trigger.scss';

const Trigger = ( { label, triggerClass, setSortState } ) => {
  return (
    <div className={triggerClass} onClick={() => setSortState(label)} >
        {label}
    </div>
  );
}

Trigger.propTypes = {
    label: PropTypes.string,
    triggerClass: PropTypes.string,
    setSortState: PropTypes.func
};

export default Trigger;

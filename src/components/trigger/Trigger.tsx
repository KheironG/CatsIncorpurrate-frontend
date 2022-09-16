import PropTypes from 'prop-types';
import './Trigger.scss';


interface Props {
    label: string;
    triggerClass: string;
    setSortState: ( active: string ) => void;
}

const Trigger = ( { label, triggerClass, setSortState }: Props ) => {
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

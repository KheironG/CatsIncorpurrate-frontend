import PropTypes from 'prop-types';
import './Trigger.css';

const Trigger = ( { args, sort, sortBy } ) => {
  return (
    <div className={ args.arg === sort ? ('trigger-active') : ('trigger')  }
        onClick={() => sortBy(args.arg)} >
        {args.label}
    </div>
  );
}

Trigger.propTypes = {
    args: PropTypes.object,
    sort: PropTypes.string,
    sortBy: PropTypes.func
};

export default Trigger;

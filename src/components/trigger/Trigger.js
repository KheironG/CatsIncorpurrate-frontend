import './Trigger.css';

export default function Trigger( { args, sort, sortBy } ) {
  return (
    <div className={ args.arg === sort ? ('trigger-active') : ('trigger')  }
        onClick={() => sortBy(args.arg)} >
        {args.label}
    </div>
  );

}

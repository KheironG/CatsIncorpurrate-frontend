
export default function Trigger( { args } ) {

  return (
    <div className={ args.arg === args.sort ? ('trigger-active') : ('trigger')  }
        onClick={() => args.sortBy(args.arg)} >
        {args.label}
    </div>
  );

}

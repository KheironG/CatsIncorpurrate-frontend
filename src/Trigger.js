
export default function Trigger( { args } ) {

  return (
    <div className={ args.label === args.state ? ('trigger-active') : ('trigger')  }
        onClick={() => args.setState(args.label)} >
        {args.label}
    </div>
  );

}

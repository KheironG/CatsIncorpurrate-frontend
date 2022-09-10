import Trigger from './Trigger.js';

export default function Triggers( { sort, sortBy } ) {

    const triggers = [
        { label: 'none' , arg: 'none'},
        { label: 'cute' , arg: 'cutest' },
        { label: 'not cute' , arg: 'uncute' },
        { label: 'lives left' , arg: 'lives' },
        { label: 'atchooo' , arg: 'allergy' },
    ];

  return (
        <div className="trigger-container">
            <b className="sorting">sorting:</b>
            <div className="triggers">
            {triggers.map(function(trigger){
                return(
                    <Trigger key={trigger.arg} args={trigger} sort={sort} sortBy={sortBy} />
                )
            })}
            </div>
        </div>
  );

}

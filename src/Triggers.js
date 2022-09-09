import Trigger from './Trigger.js';

export default function Triggers( { sort, sortBy } ) {

    const triggers = [
        { label: 'none' , arg: 'none', sort: sort, sortBy: sortBy },
        { label: 'cute' , arg: 'cutest', sort: sort, sortBy: sortBy },
        { label: 'not cute' , arg: 'uncute', sort: sort, sortBy: sortBy  },
        { label: 'lives left' , arg: 'lives', sort: sort, sortBy: sortBy  },
        { label: 'atchooo' , arg: 'allergy', sort: sort, sortBy: sortBy  },
    ];

  return (
        <div className="triggers">
            <b className="sorting">sorting:</b>
            {triggers.map(function(trigger){
                return(
                    <Trigger args={trigger} />
                )
            })}
        </div>
  );

}

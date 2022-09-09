import { useState } from 'react';
import Trigger from './Trigger.js';

export default function Triggers( ) {

    const [ state, setState] = useState("none");

    const triggers = [
        { label: 'none' , arg: 'test', state: state, setState: setState },
        { label: 'cutest' , arg: 'test', state: state, setState: setState },
        { label: 'not cute' , arg: 'test', state: state, setState: setState  },
        { label: 'lives left' , arg: 'test', state: state, setState: setState  },
    ];

  return (
    <div className="triggers">
        {triggers.map(function(trigger){
            return(
                <Trigger args={trigger} />
            )
        })}
    </div>
  );

}

import React, { useContext, useEffect } from 'react';
import ISSContext from '../context/ISSContext';
import useTimer from '../effects/useTimer';


const PeopleInSpace = () => {

  const { getPeopleInSpace, peopleInSpace } = useContext(ISSContext)

  useTimer(getPeopleInSpace, 5000)
  
  return (
    <div className="people-in-space">
      <span>{`Number of people in space now: ${peopleInSpace.length}`}</span>
      <ul className="people-list">
        {peopleInSpace.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PeopleInSpace;
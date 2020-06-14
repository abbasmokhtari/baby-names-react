import React from 'react';

const NameBlock = (props) => {
  let sortedData = props.allName.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return (
    <div className='container'>
      {sortedData.map((e) => {
        return (
          <span key={e.id} className={e.sex}>
            {e.name}
          </span>
        );
      })}
    </div>
  );
};

export default NameBlock;

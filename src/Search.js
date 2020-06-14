import React, { useState } from 'react';
import NameBlock from './NameBlock';
import babyNameData from './babyNameData.json';

function Search() {
  const [keyword, setKeyword] = useState('');

  const onChange = (e) => setKeyword(e.target.value);

  const filteredData = babyNameData.filter((e) => {
    let lowerKeyword = keyword.toLowerCase();
    let arrayName = e.name.toLowerCase();
    return  arrayName.includes(lowerKeyword);
  });

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Seach a name'
          name='keyword'
          value={keyword}
          onChange={onChange}
        />
      </form>
      <NameBlock allName={filteredData} />
    </div>
  );
}

export default Search;

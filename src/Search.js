import React, { useState } from 'react';
import NameBlock from './NameBlock';
import babyNameData from './babyNameData.json';

function Search() {

  const [keyword, setKeyword] = useState('');

  const onChange = (e) => setKeyword(e.target.value);

  const filteredData = babyNameData.filter((e) =>
    e.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div>
      <form>
        <input
          type='text'
          placeholder='Seach a name ...'
          name='keyword'
          value={keyword}
          onChange={onChange}
          className='input'
        />
      </form>
      <NameBlock allName={filteredData} />
    </div>
  );
}

export default Search;

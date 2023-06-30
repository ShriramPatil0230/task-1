import React, { useState } from 'react';
import './App.css';

function App() {
  const [listA, setListA] = useState('');
  const [listB, setListB] = useState('');
  const [results, setResults] = useState({
    onlyInA: [],
    onlyInB: [],
    inBoth: [],
    combined: []
  });

  const computeDifferences = () => {
    const itemsA = listA.split('\n').map(item => item.trim());
    const itemsB = listB.split('\n').map(item => item.trim());

    const onlyInA = itemsA.filter(item => !itemsB.includes(item));
    const onlyInB = itemsB.filter(item => !itemsA.includes(item));
    const inBoth = itemsA.filter(item => itemsB.includes(item));
    const combined = [...new Set([...itemsA, ...itemsB])];

    setResults({
      onlyInA,
      onlyInB,
      inBoth,
      combined
    });
  };

  return (
    <div className='container'>
      <div className='container'>
        <h3>List A</h3>
        <textarea className='list-container'
          value={listA}
          onChange={e => setListA(e.target.value)}
          placeholder="Enter items for List A."
          rows={5}
          cols={30}
        />
      </div>
      <div className='container'>
   
        <h3>List B</h3>
        <textarea className='list-container'
          value={listB}
          onChange={e => setListB(e.target.value)}
          placeholder="Enter items for List B."
          rows={5}
          cols={30}
        />
      </div>

      <button onClick={computeDifferences}>Compute</button>

      <div >
        <h3>Results:</h3>
        <div>
          <strong>Items present only in A:</strong>
          <ul>
            {results.onlyInA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Items present only in B:</strong>
          <ul>
            {results.onlyInB.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Items present in both A and B:</strong>
          <ul>
            {results.inBoth.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>Items combining both A and B (unique):</strong>
          <ul>
            {results.combined.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

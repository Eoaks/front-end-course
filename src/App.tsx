import React from 'react';

import {
  filterOdds,
  filterOddsReduce,
  findLast,
  findLastReduce,
  JSXFromArray,
  JSXFromArrayReduce,
  multiplyThenFilter,
  multiplyThenFilterReduce,
  searchForAName,
  searchForANameReduce,
  transformNames,
  transformNamesReduce,
} from './utils/functions';

function App() {
  return (
    <>
      <div className="map-exercises">
        <h1>Map exercises</h1>
        <h3>Transform names</h3>
        <pre>
          <code>{JSON.stringify(transformNames(), null, '  ')}</code>
        </pre>

        <h3>Generate jsx from array</h3>
        {JSXFromArray()}
      </div>

      <div className="filter-exercises">
        <h1>Filter Exercises</h1>
        <h3>Filter odds</h3>
        <pre>
          <code>{JSON.stringify(filterOdds())}</code>
        </pre>
        <h3>Multiply before filtering odds</h3>
        <pre>
          <code>{JSON.stringify(multiplyThenFilter())}</code>
        </pre>
        <h3>Filter names</h3>
        <pre>
          <code>{JSON.stringify(searchForAName())}</code>
        </pre>
      </div>
      <div className="find-exercises">
        <h1>Find Exercises</h1>
        <h3>Find a name</h3>
        <pre>
          <code>{JSON.stringify(findLast())}</code>
        </pre>
      </div>

      <div className="Reduce-exercises">
        <h1>Reduce Exercises</h1>
        <h3>Transform names</h3>
        <pre>
          <code>{JSON.stringify(transformNamesReduce(), null, '  ')}</code>
        </pre>

        <h3>Generate jsx from array</h3>
        {JSXFromArrayReduce()}

        <h3>Filter odds</h3>
        <pre>
          <code>{JSON.stringify(filterOddsReduce())}</code>
        </pre>
        <h3>Multiply before filtering odds</h3>
        <pre>
          <code>{JSON.stringify(multiplyThenFilterReduce())}</code>
        </pre>
        <h3>Filter names</h3>
        <pre>
          <code>{JSON.stringify(searchForANameReduce())}</code>
        </pre>

        <h3>Find a name</h3>
        <pre>
          <code>{JSON.stringify(findLastReduce())}</code>
        </pre>
      </div>
    </>
  );
}

export default App;

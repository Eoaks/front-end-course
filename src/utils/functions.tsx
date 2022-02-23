import React from 'react';

import { names, oneToTen, pokes } from './data';
import { Person } from './interfaces';

// map exercises
export function transformNames(): Person[] {
  return names.map(name => {
    const [first, last] = name.split(' ');
    const res: Person = {
      id: first,
      firstname: first,
    };
    if (last) res.lastname = last;
    return res;
  });
}

export const JSXFromArray = () => (
  <ul>
    {pokes.map(poke => (
      <li key={poke.id}>{poke.name}</li>
    ))}
  </ul>
);

// filter exercises

export const filterOdds = () => {
  return oneToTen.filter(n => n % 2 == 0);
};

export const multiplyThenFilter = () => {
  return oneToTen.map(n => n * 3).filter(n => n % 2 == 0);
};

export const searchForAName = () => {
  return names.filter(name => name.includes('a'));
};

//find exercises

export const findLast = () => {
  return [...names].reverse().find(name => name.includes('a'));
};

// reduce exercises
export function transformNamesReduce(): Person[] {
  return names.reduce((prev: Person[], curr) => {
    const [first, last] = curr.split(' ');
    const res: Person = {
      id: first,
      firstname: first,
    };
    if (last) res.lastname = last;
    prev.push(res);
    return prev;
  }, []);
}

export const JSXFromArrayReduce = () => (
  <ul>
    {pokes.reduce((prev: JSX.Element[], poke) => {
      prev.push(<li key={poke.id}>{poke.name}</li>);
      return prev;
    }, [])}
  </ul>
);

export const filterOddsReduce = () => {
  return oneToTen.reduce((prev: number[], n) => {
    if (n % 2 == 0) prev.push(n);
    return prev;
  }, []);
};

export const multiplyThenFilterReduce = () => {
  return oneToTen.reduce((prev: number[], n) => {
    if ((n * 3) % 2 == 0) prev.push(n);
    return prev;
  }, []);
};

export const searchForANameReduce = () => {
  return names.reduce((prev: string[], name) => {
    if (name.includes('a')) prev.push(name);
    return prev;
  }, []);
};

export const findLastReduce = () => {
  return [...names].reverse().reduce((prev, name) => {
    if (name.includes('a') && prev === '') return name;
    return prev;
  }, '');
};

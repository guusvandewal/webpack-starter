import React from 'react';
const Arrow = () => {
  console.log('Test for babel')
  return <div>🏹</div>;
};

const Tiles = ({ ...props }) => {
    return <div>{props.message}</div>
};

export default function App() {
  return (
    <div>
      <h1> Webpack + React setup!!!</h1>
      <Arrow />

      <Tiles message="Error message" />
    </div>
  );
}

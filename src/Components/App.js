import React from 'react';
const Arrow = () => {
  console.log('Test for babel');
  return <div>🏹</div>;
};

const Tiles = ({ ...props }) => {
  return <div>{props.message}</div>;
};

const Circle = () => {
  return (
    <svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="circle-small" transform-origin="50 50"
        d="M54.448 79.134c13.98-2.007 24.727-14.074 24.727-28.66 0-15.99-12.916-28.954-28.848-28.954-15.933 0-28.849 12.963-28.849 28.954 0 14.586 10.747 26.653 24.727 28.66v5.216c-16.834-2.042-29.878-16.43-29.878-33.876 0-18.846 15.222-34.124 34-34.124 18.777 0 34 15.278 34 34.124 0 17.446-13.045 31.834-29.88 33.876v-5.216z"
        fill="#EEAACF"
      />

      <path className="circle-large" transform-origin="50 50"
        d="M45.918 0C20.213 2.08 0 23.635 0 49.918 0 77.578 22.386 100 50 100s50-22.423 50-50.082C100 23.635 79.787 2.08 54.082 0v5.13c22.883 2.065 40.816 21.329 40.816 44.788C94.898 74.755 74.796 94.89 50 94.89c-24.797 0-44.898-20.135-44.898-44.972 0-23.46 17.933-42.723 40.816-44.789V0z"
        fill="#D33289"
      />
    </svg>
  );
};

export default function App() {
  return (
    <div className="svg-container">
      <Circle />
    </div>
  );
}

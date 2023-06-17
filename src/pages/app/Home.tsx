import React, { memo } from "react";
import { Link } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>React Typescript Template Webpack</p>
        <span>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          {" | "}
          <a
            className='App-link'
            href='https://www.typescriptlang.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Typescript
          </a>
        </span>
        <Link to='/design-system'>Design System</Link>
        <a href=''>See Repos</a>
      </header>
    </div>
  );
};

export default Home;

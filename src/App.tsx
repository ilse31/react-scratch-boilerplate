import React from "react";
type Props = {};

const App = (props: Props) => {
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
            Learn Reacts
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
      </header>
    </div>
  );
};

export default App;

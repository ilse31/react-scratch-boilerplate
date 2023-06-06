import React from "react";
import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DragDrop } from "./components";
type Props = {};

const App = (props: Props) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {/* <div className='App'>
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
        </header>
      </div> */}
      <div className='App'>
        <DragDrop />
      </div>
    </DndProvider>
  );
};

export default App;

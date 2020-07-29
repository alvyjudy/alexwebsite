import React, {useState} from 'react';
import NavBar from "./NavBar.js";
import CategoriesView from "./CategoriesView.js";
import ItemsView from "./ItemsView";

import StateContext from "./StateContext.js";



const App = (props) => {
  //routing logic
  const loadPath=window.location.pathname.split("/").slice(1);
  const [currentPath, setPathFn] = useState(loadPath);
  window.onpopstate = (e) => {setPathFn(window.location);};

  const stateManagement = (state, action) => {
    return action.type === "changePath" ?
      setPathFn : undefined;
  }
  const [currentState, dispatch] = useReducer(stateManagement);

  const main =
    currentPath[0] === "items" ?
      <ItemsView category={currentPath[1]}
        pathUpdator={setPathFn}/>
    : <CategoriesView pathUpdator={setPathFn}/> ;


  //store logic
  


  //app entry

  React.createContext()
  return (
    <StateContext.Provider value={dispatch}>
      <NavBar pathUpdator={setPathFn} />
      {main}
    </StateContext.Provider>
  );
}



export default App;

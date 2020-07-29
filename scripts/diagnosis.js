/*This script serves as a diagnosis tool for individual function
component written for the front end UI. Drop in individual
function component into the "Patient" variable and switch
webpack config entry to this script. Then run
`npx webpack-dev-server` to see it render in the browser.

This should further encourage encapsulation of a component
during development.
*/

import React, { useState, useEffect } from 'react';
import ReactDom from'react-dom';

import { BrowserRouter } from "react-router-dom";
import GenericContainer from "../src/components/GenericContainer.js";
import OneItem from "../src/components/OneItem.js";
import itemsMeta from "../src/itemsInfo.json";
import OneItemStyles from "../src/stylesheets/OneItemStyles.module.css";


var PATIENT =
  <BrowserRouter>
    <GenericContainer
      itemsSuper={itemsMeta}
      filterField={"category"}
      filterValue={"Keychain"}
      styles={OneItemStyles}
      render={(item, i) => {return <OneItem
                                    item={item}
                                    styles={OneItemStyles}
                                    key={i}/>}
      }
    />
  </BrowserRouter>
;

ReactDom.render(PATIENT, document.getElementById("root"));

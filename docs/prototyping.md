# Turns out not as useful

Turns out this hack involves too much trickery and I end up spending way
more time making things work than getting stuff done. First it involves
two react instance which is not supported and hooks don't work. It seems
When coming up with this I only had a shallow understanding of the inner
workings of these libraries. 

# Prototyping workflow

This trick allows me to create individual page for React component
with minimal efforts. But it is just a hack and may not work in the
long run. The idea is to have a single HTML file to import an individual
React component and render it in the browser, meanwhile having all the
syntax transpiling and assets management taken care of by ParcelJS.

# Background 

When invoking parcel on a javascript file, a global flag can
be used to make its `module.exports` or `export content` 
global when being referenced in HTML `<script>` tag. 

When invoked on an HTML file that links to other javascript
file, the same behavior occurs but the global flag is only
applied to the last javascript file, excluding ones that
are not bundled by Parcel (i.e. URL link). 

ES6 module works a bit differently since it has the default 
mode. The following two are equivalent:

  ```
  //animal.js
  const cat = 'Milka';
  export default cat;
  export const dog = 'dog';

  //animal.js
  module.exports = {
    default: 'Milka',
    dog: 'dog'
  }
  ```

and when either is linked in the html: 

```
  <!DOCTYPE html>
  <html>
    <script src='otherJSfile.js'></script>
    <script src='animal.js'></script>
  </html>
```

and processed by:
```
$ parcel theHTML.html --global animal
```

The `animal` global variable becomes available in the browser console

# Usage

helloworld.js
```javascript
  import React, {useState} from "react";

  const Hello = (props) => {
    return <div>Hello world</div>
  }

  export default Hello;
```

testComponent.html
```html
 
  <!DOCTYPE html>
  <html>
    <body>
      <div id='root'></div>
    </body>

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="./samplecomponent.js"></script>
    <script>
      ReactDOM.render(React.createElement(component.default), document.getElementById('root'))
    </script>

  </html>
```

and then invoke Parcel (directly or `yarn run` or `npm run`): 

```bash
  $ parcel testComponent.html --global component
```

*Note*: the `component` in commandline must match the `component` in 
`ReactDOM.render(React.createElement(component.default), document.getElementById('root'))`
in the html script.
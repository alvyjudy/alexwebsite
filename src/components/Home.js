import React from 'react';
import ReactDom from'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
class Home extends React.Component {
  render(){
    return(
      <div>
      <Link to=""><button>
        category 1
      </button>
      </Link>
            <Link to=""><button>
              category 2
            </button>
            </Link>
            <Link to=""><button>
              category 3
            </button>
            </Link>
            <Link to=""><button>
              category 4
            </button>
            </Link>
          </div>
    )

  }
}


export default Home;

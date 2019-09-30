import React, { Fragment } from 'react';

import { listImg, default as imageService } from 'api';

class Home extends React.Component {
  state = {
    listUrl: [

    ]
  }

  componentWillMount() {
  }

  componentDidMount() {
    const imgService = imageService(10);
    imgService.next();

    const imageGetter = imgService.next().value;

    setTimeout(() => {
      console.log(listImg);
    }, 3000);
    
    this.setState((state, prop) => ({
      ...state,
      listUrl: [
        ...state.listUrl,
      ]
    }));
  }

  render() {
    const listUrl = this.state.listUrl;
    return (
      <Fragment>
        <h1> List random image </h1>
        <ul>
          {
            listUrl.map((url, key) => (
              <img alt="Loading..." src={url} key={key} />
            ))
          }
        </ul>
      </Fragment>
    );
  } 
}

export default Home;
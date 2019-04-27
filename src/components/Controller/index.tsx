import * as React from 'react';
import {IGameController} from '../../controllers';

import "./style.css";

export class ControlPanel extends React.Component<{controller? : IGameController}, {}> {

  do_up = () => {
    console.log("up");
    this.props.controller.do_up().then();
  }

  do_down = () => {
    console.log("down");
    this.props.controller.do_down().then();
  }

  render() {
    const c = this.props.controller;
    return <div className="controller">
        <figure className="d-block figure">
          <img className="button w-100 img-fluid rounded-circle" 
            src="img/red_up_arrow.png" onClick={this.do_up}/>
        </figure>
        <figure className="d-block figure">
          <img className="button w-100 img-fluid rounded-circle" 
            src="img/blue_down_arrow.png" onClick={this.do_down}/>
        </figure>
    </div>;
  }

}

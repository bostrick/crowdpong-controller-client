import * as React from 'react';
import {IGameController} from '../../controllers';
import {observer} from 'mobx-react';

import "./style.css";

@observer
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
    if (!c.team) {
        return "<div>Loading...</div>";
    }

    const up_img = `img/${c.team}_up_arrow.png`;
    const down_img = `img/${c.team}_down_arrow.png`;

    return <div className="controller">
        <figure className="d-block figure">
          <img className="button w-100 img-fluid rounded-circle" 
            src={up_img} onClick={this.do_up}/>
        </figure>
        <figure className="d-block figure">
          <img className="button w-100 img-fluid rounded-circle" 
            src={down_img} onClick={this.do_down}/>
        </figure>
    </div>;
  }

}

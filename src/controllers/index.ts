
import axios from 'axios';
import {observable, action} from 'mobx';

export interface IGameController {
    team: string;
    do_up(): any;
    do_down(): any;
}

export class GameController {

    private base_url = "http://localhost:6543"
    private url = null;

    @observable team = null;

    constructor(base_url : string) {
        this.base_url = base_url;
        this.url = `${this.base_url}/controller`;
        this.get_team();
    }

    @action
    get_team() {
        return axios.get(this.url).then((resp) => {
            console.log(resp);
            console.log(`joining team ${resp.data.team}`);
            this.team = resp.data.team;
        });
    }

    do_up() {
        return axios.post(this.url, {'command': 'up'})
            .then((resp) => console.log(resp.data.team));
    }

    do_down() {
        return axios.post(this.url, {'command': 'down'})
            .then((resp) => console.log(resp.data.team));
    }
}


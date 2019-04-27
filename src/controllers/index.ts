
import axios from 'axios';

export interface IGameController {
    do_up(): any;
    do_down(): any;
}

export class GameController {

    private base_url = "http://localhost:6543"

    constructor(base_url : string) {
        this.base_url = base_url;
    }

    do_up() {
        const url = `${this.base_url}/controller`;
        return axios.post(url, {'comamnd': 'up'}).then((data) => console.log(data));
    }

    do_down() {
        const url = `${this.base_url}/controller`;
        return axios.post(url, {'comamnd': 'down'}).then((data) => console.log(data));
    }
}


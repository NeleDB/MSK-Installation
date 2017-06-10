import {observable, action, computed} from 'mobx';
import data from '../../assets/data/questions.json';
import io from 'socket.io-client';


class Store {

  @observable
  players = 0;

  @observable
  pictures = {a: 0, b: 0, c: 0}

  @observable
  playersLeft = 0

  @observable
  currentQuestion = 0;

  @computed
  get totalSelected() {
    const array = [];
    for (const key in this.pictures) {
      array.push(this.pictures[key]);
    }
    return array.reduce((a, v) => a + v);
  }

  @action
  nextQuestion = () => {
    if (this.currentQuestion + 1 === data.questions.length) {
      window.location.pathname = `/end`;
      return;
    } else {
      this.currentQuestion += 1;
      for (const key in this.pictures) {
        this.pictures[key] = 0;
      }
      this.playersLeft = this.players;
    }
  }

  constructor() {
    const socket = io(`/`);

    this.checkURL(socket);
    socket.on(`leave`, id => {this.players--;console.log(id);});
    socket.on(`handleAnswer`, answer => console.log(answer));
    socket.on(`handleTotal`, console.log(`total`));
    socket.on(`join`, client => console.log(client));
    // console.log(socket);
  }

  checkURL = socket => {
    const url = window.location.pathname;
    if (url === `/`) {
      socket.on(`usersAmount`, clients => this.setPlayers(clients));
    } else if (url === `/vote`) {
      socket.emit(`newUser`);
      socket.on(`join`, client => console.log(client));
      socket.on(`usersAmount`, clients => this.setPlayers(clients));
    }
  }

  @action
  addAnswer = art => {
    if (this.totalSelected === this.players) return;
    this.pictures[art] ++;
    this.playersLeft--;
  }

  @action
  setPlayers = number => {
    this.players = parseInt(number);
    this.playersLeft = parseInt(number);
  }

  @action
  handleJoin = () => {
    // this.socket = io(window.location.host);
    this.players += 1;
    this.checkURL();
  }



  @action
  handleAnswer = answer => {
    this.socket.emit(`userAnswer`, answer);
    this.socket.emit(`checkTotalAnswers`);
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

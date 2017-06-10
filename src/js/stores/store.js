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

  @observable
  socket;

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
    if (this.playersLeft === 0) {
      if (this.currentQuestion + 1 === data.questions.length) {
        window.location.pathname = `/end`;
        this.player = 0;
        return;
      } else {
        this.currentQuestion += 1;
        for (const key in this.pictures) {
          this.pictures[key] = 0;
        }
        this.playersLeft = this.players;
      }
    }

  }

  constructor() {
    this.socket = io(`/`);

    this._checkURL();

    this.socket.on(`leave`, id => {if (this.players !== 0) this.players--;console.log(id);});
    this.socket.on(`handleAnswer`, answer => this._addAnswer(answer));
    this.socket.on(`handleTotal`, this._handleTotal);
  }

  _checkURL = () => {
    const url = window.location.pathname;
    if (url === `/` || url === `/questions`) {

      this._totalPlayers();
      if (url === `/questions`) this.socket.emit(`checkTotalAnswers`);

    } else if (url === `/vote`) {
      this.socket.emit(`newUser`);
      this._totalPlayers();
    }
  }

  _addAnswer = answer => {
    if (this.totalSelected === this.players) return;
    this.pictures[answer] ++;
    this.playersLeft--;
    this.nextQuestion();
  }

  @action
  handleAnswer = answer => {
    this.socket.emit(`userAnswer`, answer);
  }

  @action
  setPlayers = number => {
    this.players = parseInt(number);
    this.playersLeft = parseInt(number);
  }

  _totalPlayers = () => {
    this.socket.on(`usersAmount`, clients => this.setPlayers(clients));
  }

  @action
  handleJoin = () => {
    this.players += 1;
    this.socket.emit(`newUser`);
    this._totalPlayers();
  }

  _handleTotal = () => {
    if (this.playersLeft === 0) this.nextQuestion;
  }

  @action
  handleAgain = () => {
    this.socket.emit(`again`);
  }
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

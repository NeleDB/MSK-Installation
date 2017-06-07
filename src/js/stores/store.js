import {observable, action, computed} from 'mobx';
import data from '../../assets/data/questions.json';

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
      return;
    } else {
      this.currentQuestion += 1;
      for (const key in this.pictures) {
        this.pictures[key] = 0;
      }
      this.playersLeft = this.players;
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
}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

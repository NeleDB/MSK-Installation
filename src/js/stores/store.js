import {observable, action} from 'mobx';

class Store {

  @observable
  currentQuestion = 1;

  @action
  nextQuestion = () => {
    return this.currentQuestion += 1;
  }



}

const store = new Store();

if (process.env.NODE_ENV !== `production`) {
  window.store = store;
}

export default store;

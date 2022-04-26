import AccountRepository from '../Repository';

  export default class extends AccountRepository {

    dataAsArray() {
      return Object.keys(this.data).map(key => this.data[key]);
    }

    constructor() {
      super();
      this.index = 1;
      this.data = {};
    }

    persist(accountEntity) {
      const row = Object.assign({}, accountEntity);
      const rowId = this.index++;
      row.id = rowId;
      this.data[rowId] = row;
      return row;
    }

    merge(accountEntity) {
      let row = this.data[accountEntity.id];
      Object.assign(row, accountEntity);
      return Promise.resolve(row);
    }

    remove(userId) {
      delete this.data[userId];
      return Promise.resolve();
    }

    get(userId) {
      return Promise.resolve(this.data[userId]);
    }

    getByEmail(userEmail) {
      const users = this._dataAsArray();
      return Promise.resolve(users.find(user => user.email === userEmail));
    }

    find() {
      return Promise.resolve(this.dataAsArray());
    }

  }
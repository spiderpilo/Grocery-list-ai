const { contextBridge } = require('electron');
const Store = require('electron-store');

const store = new Store();

contextBridge.exposeInMainWorld('api', {
  getList: () => store.get('groceryList', []),
  setList: (list) => store.set('groceryList', list)
});
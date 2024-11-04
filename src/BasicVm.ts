import {makeAutoObservable} from 'mobx';
import {BasicStore} from './BasicStore';

export class BasicVm {
  private store: BasicStore;
  filter = '';

  constructor(store: BasicStore) {
    this.store = store;
    makeAutoObservable(this);
  }

  // GETTERS
  get getFilter(): string {
    return this.filter;
  }

  get data(): string[] {
    return this.store.storeData;
  }

  get formattedData(): string[] {
    return this.store.storeData.map(item => item.toUpperCase());
  }

  get filteredData(): string[] {
    return this.store.storeData.filter(item => item.includes(this.filter));
  }

  // SETTERS
  setFilter = (value: string): void => {
    this.filter = value;
  };

  updateData = (newData: string[]): void => {
    this.store.setStoreData(newData);
  };
}

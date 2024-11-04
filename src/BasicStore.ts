import {makeAutoObservable} from 'mobx';

export class BasicStore {
  private _storeData = ['a', 'b'];

  constructor() {
    makeAutoObservable(this);
  }

  get storeData(): string[] {
    return this._storeData;
  }

  setStoreData(data: string[]): void {
    this._storeData = data;
  }
}

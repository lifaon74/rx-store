import { IStore } from './store.type';
import { IObservable } from '@lifaon/rx-js-light';

export function getStoreSubscribe<GState>(
  store: IStore<GState>,
): IObservable<GState> {
  return store.subscribe;
}

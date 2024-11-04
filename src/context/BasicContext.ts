import createVmContext from '../utils/createContext.ts';
import {BasicVm} from '../BasicVm.ts';

const {context: BasicContext, useVmContext: useBasicVm} =
  createVmContext<BasicVm>({} as BasicVm);

export {BasicContext, useBasicVm};

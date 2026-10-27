import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('appInfo', {
  name: 'BlaBlaBla',
  version: '0.1.0',
});

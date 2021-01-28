import { SnowpackPluginFactory } from 'snowpack';

declare module './fela.cjs' {
  const pluginFela: SnowpackPluginFactory;

  export = pluginFela;
}

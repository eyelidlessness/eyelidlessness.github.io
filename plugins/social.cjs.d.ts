import { SnowpackPluginFactory } from 'snowpack';

declare module './social.cjs' {
  const pluginSocial: SnowpackPluginFactory;

  export = pluginSocial;
}

import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1640363976380_3597';

  // add your config here
  config.middleware = [];

  config.midwayFeature = {
    // true 代表使用 midway logger
    // false 或者为空代表使用 egg-logger
    replaceEggLogger: true,
  };

  config.security = {
    csrf: false,
  };
  config.mysql = {
    client: {
      host: 'localhost', // 自己的数据库host
      port: '3306', // 自己的连接端口
      user: 'root', // 可以使用root
      password: '12345678' +
        '', // 数据库密码
      database: '',     // 要连接的数据库名称
    },
    app: true,
    agent: false,
  };


  return config;
};
/**
 * 单数据库实例
 */
export const orm = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '12345678',
  database: 'lidan',
  synchronize: false,		// 如果第一次使用，不存在表，有同步的需求可以写 true
  logging: false,
};

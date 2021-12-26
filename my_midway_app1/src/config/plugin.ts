import { EggPlugin } from 'egg';
export default {
  logrotator: false, // disable when use @midwayjs/logger
  static: false,
} as EggPlugin;
// mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};

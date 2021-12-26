// configuration.ts
import { Configuration } from '@midwayjs/decorator';
import * as orm from '@midwayjs/orm';
import { join } from 'path';

@Configuration({
  imports: [
    orm  														// 加载 orm 组件
  ],
  importConfigs: [
    join(__dirname, './config')
  ]
})
export class ContainerConfiguratin {

}

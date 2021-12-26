#运行
```
npm run dev
```
# 部署
1.将ts编译成js
```
npm run build
npm start
```
# docker
```

npm run docker
```



#Todo list note接口文档以及单元测试

- 表结构设计
```
  -- auto-generated definition
  create table Notes
  (
  id            int auto_increment
  primary key,
  msg           varchar(255)  not null,
  finish_status int default 0 not null,
  time          varchar(255)  not null
  );
```
## 新建提醒事项
接口url：
http://127.0.0.1:7001/POST/notes?msg="明天早上6点送孩子上学"&finish_status=0

### 传入参数：
```
{ msg="今天6点要去看牙医"，finish_status="0"}
```
- finish_status 是0，没有完成，1:代表完成状态
  返回数据：
  {"success":true,"message":"OK","id":6,"code":200}

## 我的列表（展示所有，包括已完成和没完成，按时间排序，最新在前面）
### 接口url：
http://127.0.0.1:7001/GET/notes
传入参数：
{ }

### 返回数据：
{"success":true,"message":"OK","data":"[{\"id\":6,\"msg\":\"\\\"完成监测预警项目优化\\\"\",\"finish_status\":0,\"time\":\"1640496728562\"},{\"id\":5,\"msg\":\"\\\"今天6点要去看牙医\\\"\",\"finish_status\":0,\"time\":\"1640496707078\"},{\"id\":4,\"msg\":\"\\\"今天6点要去看牙医\\\"\",\"finish_status\":0,\"time\":\"1640496704990\"},{\"id\":3,\"msg\":\"\\\"今天6点要去看牙医\\\"\",\"finish_status\":0,\"time\":\"1640496612224\"},{\"id\":2,\"msg\":\"kkkk\",\"finish_status\":1,\"time\":\"1640489417758\"}]","code":200}

## 展示我的todo list （没完成/或者没完成，按时间排序）
接口url：
http://127.0.0.1:7001/GET/notes/finished?finish=1
- finish_status 是0，没有完成，1:代表完成状态
  传入参数：
  {
  finish = 1//　　　显示完成的todo。 如果finish=0 ，那么显示没有完成的
  }

返回参数：
{"success":true,"message":"OK","data":"[{\"id\":2,\"msg\":\"kkkk\",\"finish_status\":1,\"time\":\"1640489417758\"}]","code":200}

## 更新修改todo list（更新标记完成状态，更新文本内容）
接口url：
http://172.20.10.9:7001/PUT/notes?id=3&msg="明天早上7点出门看牙医"&finish=0
http://172.20.10.9:7001/PUT/notes?id=6&finish=1
传入参数：
{
id = 3// note的id，
msg="明天早上7点出门看牙医"，
finish = 0

}

返回参数(成功)：
{"success":true,"message":"OK","id":3,"code":200}

返回参数(失败)：
{"data":"{\"success\":false,\"message\":\"erro\",\"id\":\"67\",\"code\":400}"}

删除todo
接口url：
http://127.0.0.1:7001/DELETE/notes?id=2
传入参数：
{
id = 3
}

返回参数：

{"data":"{\"success\":true,\"message\":\"OK\",\"id\":\"7\",\"code\":200}"}

失败：
{"data":"{\"success\":false,\"message\":\"erro\",\"id\":\"23\",\"code\":400}"}

## 测试
controller层的单元测试
分别对创建，删除，修改，展示的内容做了单元测测试，其中展示（包括已完成和未完成状态的区分）
所以测试的案例有5个，用断言的方式对，返回码以及返回的消息进行判断。以下是测试的报告
```
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.712 s, estimated 3 s
Ran all test suites matching /\/test\/.*\.test\.ts$|test/i.

```

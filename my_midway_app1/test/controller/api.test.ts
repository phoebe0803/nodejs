import { createApp, close, createHttpRequest } from "@midwayjs/mock";
import { Framework } from "@midwayjs/web";
import { Application } from "egg";

describe("test/controller/api.test.ts", () => {
  let app: Application;

  beforeAll(async () => {
    // create app
    app = await createApp<Framework>();
  });

  afterAll(async () => {
    await close(app);
  });
  //修改
  it("should GET /", async () => {
    // make reques
    const res = await createHttpRequest(app).get("/PUT/notes").query({id:11,finish:1,msg:"明天7点定机票"});
    expect(res.status).toBe(200);
    expect(res.body.data).toContain('"message":"OK"')
  });
  //创建
  it("should GET /", async () => {
    // make reques
    const res = await createHttpRequest(app)
      .get("/POST/notes").query({msg:'明天下午5点去买菜',finish:'0'});
    expect(res.status).toBe(200);
    expect(res.body.data).toContain('"message":"OK"')
  });
  //展示全部
  it("should GET /", async () => {
    // make request
    const result = await createHttpRequest(app).get("/GET/notes")
    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.data).toContain('"message":"OK"')
  });
  it("should GET /", async () => {
    // make request
    const result = await createHttpRequest(app).get("/GET/notes").query({finish:1})
    // use expect by jest
    expect(result.status).toBe(200);
    expect(result.body.data).toContain('"message":"OK"')
  });
  //删除
  it("should GET /", async () => {
    // make reques
    const res = await createHttpRequest(app).get("/DELETE/notes").query({id:11});
    expect(res.status).toBe(200);
    expect(res.body.data).toContain('"message":"OK"')
  });


});

import {Inject, Controller, Provide, Get, Query} from '@midwayjs/decorator';

import {TodoService} from "../service/TodoService";

@Provide()
@Controller('/')
export class APIController {
  @Inject()
  todoService: TodoService;

  //创建todo list
  @Get('/POST/notes')
  async addNote(@Query() msg: string,@Query() finish: number) {
    // const msg =msg;
    // const finish = note.finish_status;
    const data = await this.todoService.saveTodo(msg,finish);
    return {data:JSON.stringify(data)};
  }
  // 删除todolist
  @Get('/DELETE/notes')
  async deleteNote(@Query() id: number) {
    const data= await this.todoService.deleteTodo(id);
    return {data:JSON.stringify(data)};
  }
  //更新修改我的todolist
  @Get('/PUT/notes')
  async fixNote(@Query() msg: string,@Query() finish: number,@Query() id: number) {
    const data  = await this.todoService.fixTodo(id,msg,finish);
    return {data:JSON.stringify(data)};
  }
  //展示我的所有todolist
  @Get('/GET/notes')
  async getAllTodo() {
    const data = await this.todoService.getAllTodo();
    return {data:JSON.stringify(data)};
  }
  //展示我的所有todolist完成或者没完成
  @Get('/GET/notes/finished/')
  async getNoteStatus(@Query() finish: number) {
    // // const msg =msg;
    const data = await this.todoService.getTodoStatus(finish);
    return {data:JSON.stringify(data)};
    }

}


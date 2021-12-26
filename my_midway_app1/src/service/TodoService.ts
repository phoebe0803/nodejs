import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import {Notes} from "../entity/todonote";

@Provide()
export class TodoService {

  @InjectEntityModel(Notes)
  todoNotes: Repository<Notes>;
  //展示已完成或者没完成的，时间排序
  async getTodoStatus(finish_status){
    console.log("get");
    const all =   await this.todoNotes.find({
      order: {
        time: "ASC",
      },
      where: {
        finish_status: finish_status,
      },
    });
    if (!all){
      return {success: false, message: 'erro',data:all ,code:400}
    }else {
      return  {success: true, message: 'OK',data:all ,code:200};
    }
  }
  //展示所有的todolist
  async getAllTodo(){
    console.log("get");
    const all =   await this.todoNotes.find({order: {time: "DESC"}});
    if (!all){
      return {success: false, message: 'erro',data:all ,code:400}
    }else {
      return  {success: true, message: 'OK',data:all ,code:200};
    }

  }
  //delete
  async deleteTodo(id){
    console.log("delete");
    const re = await this.todoNotes.delete(id);
    if (re.affected == 0){
      return {success: false, message: 'erro',id:id ,code:400}
    }else {
     return  {success: true, message: 'OK',id:id ,code:200};
    }

  }
  //fix
  async fixTodo(id,msg,finish){
    console.log("ewre")
    // // save entity
    let note = await this.todoNotes.findOne(id);
    if (!note) {
      return {success: false, message: 'erro', id: id, code: 400}
    }
    note.msg = msg;
    note.finish_status = finish;
    note.time= JSON.stringify(Date.now());
    const re = await this.todoNotes.save(note);
    if (!re){
      return {success: false, message: 'erro',id:id ,code:400}
    }else {
      return  {success: true, message: 'OK',id:id ,code:200};
    }

  }

  // save
  async saveTodo(msg,finish) {
    console.log("1231231")
    let todo = new Notes();
    todo.msg = msg;
    todo.finish_status = finish;
    todo.time= JSON.stringify(Date.now());
    // save entity
    const re = await this.todoNotes.save(todo);
    // save success
    if (!re){
      return {success: false, message: 'erro',data:re ,code:400}
    }else {
      return  {success: true, message: 'OK',data:re.id ,code:200};
    }
  }
}

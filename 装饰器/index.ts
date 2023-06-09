
// 类装饰器
// const doc:ClassDecorator = (target:any)=>{
//   console.log(target);
//   target.prototype.name = 'json'

// }

// 属性装饰器
// const doc:PropertyDecorator = (target:any, key:string | symbol)=>{
//   console.log(target, key);
// }

// 方法装饰器
// const doc:MethodDecorator = (target:any, key:string | symbol, descriptor:any)=>{
//   console.log(target, key, descriptor);
// }

// 参数装饰器
const doc:ParameterDecorator = (target:any, key:string | symbol, index:any)=>{
  // console.log(target, key, index);
}

// @doc// 类装饰器
class Xiaoman {
  // @doc // 属性装饰器
  public name: string
  constructor() {
    this.name = 'Ian'
  }
  // @doc // 方法装饰器
  getName(name:string, @doc age:number) {

  }
}

import axios from "axios";

const Get = (url:string)=>{
  return (target:any, key:any, descriptor: PropertyDescriptor)=>{
    const func = descriptor.value
    axios.get(url).then(res=>{
      func(res,{
        status: 200,
        success: true
      })
    }).catch(e=>{
      func(e, {
        status: 500,
        success: false
      })
    })
  }
}

class Controller {
  constructor() {

  }

  @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
  getList(res:any, status: any) {
    console.log(res.data.result.list, status);
  }

  create(){
    
  }
}

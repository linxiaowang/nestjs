
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
  console.log(target, key, index);
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



class Controller {
  constructor() {

  }

  getList() {
    
  }
}

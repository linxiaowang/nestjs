class A {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

class C {
  a: any
  constructor(name) {
    this.a = name
  }
}

class Container {
  module:any
  constructor() {
    this.module = {}
  }

  provide (key:string, module:any){
    this.module[key] = module
  }

  get(key:string) {
    return this.module[key]
  }
}

const module = new Container()

module.provide('a', new A('SHAWN'))

module.provide('c', new A('jack'))


class B {
  a: any
  c:any
  constructor(module: Container) {
    this.a = module.get('a')
    this.c = module.get('c')
  }
}

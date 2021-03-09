import { emitter } from "./emitter"

export const State = new Proxy<{ [key: string]: any }>(
  {},
  {
    get(target, key: string, receiver: any) {
      if (!Reflect.has(target, key)) {
        return undefined
      }
      return Reflect.get(target, key, receiver)
    },
    set(target, key: string, value: any, receiver: any) {
      const cur = Reflect.get(target, key, receiver)
      const set = Reflect.set(target, key, value, receiver)
      if (cur !== undefined) {
        if (cur !== value) {
          emitter.emit(key, { key, value })
        }
      } else {
        emitter.emit(key, { key, value })
      }
      return set
    },
  }
)

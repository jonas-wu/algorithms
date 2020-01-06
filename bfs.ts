// 广度优先查找
import { data as arr, Node } from './data'

function bfs(arr: Node[], targetId: number) {
  const queue = [...arr]

  while (queue.length) {
    const cur = queue.shift() as Node
    console.log(cur.id)
    if (cur.id === targetId) {
      return cur
    }

    if (cur.children) {
      queue.push(...cur.children)
    }
  }

  return undefined
}

const ret = bfs(arr, 1121)

console.log(ret)
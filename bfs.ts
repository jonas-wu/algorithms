// 广度优先查找
import { dfs as arr, Node } from './data'

function bfs(arr: Node[], targetId: number) {
  const queue = [...arr]

  while (queue.length) {
    const cur = queue.shift() as Node
    console.log(cur.id)
    if (cur.id === targetId) {
      return cur
    }

    if (cur.children) {
      queue.push(...cur.children.map(x => {
        return {
          ...x,
          path: (cur.path || cur.id) + '->' + x.id,
        }
      }))
    }
  }

  return undefined
}

const ret = bfs(arr, 112)

console.log(ret)
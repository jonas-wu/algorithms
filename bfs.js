// 广度优先查找

const arr = require('./data').dfs

function bfs(arr, targetId) {
  const queue = [...arr]

  while (queue.length) {
    const cur = queue.shift()
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
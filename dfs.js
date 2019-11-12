// 深度优先查找

const arr = require('./data').dfs

function dfs(arr, targetId) {
  const stack = [...arr].reverse()

  while (stack.length) {
    const cur = stack.pop()
    console.log(cur.id)
    if (cur.id === targetId) {
      return cur
    }

    if (cur.children) {
      stack.push(...cur.children.map(x => {
        return {
          ...x,
          path: (cur.path || cur.id) + '->' + x.id,
        }
      }))
    }
  }

  return undefined
}

const ret = dfs(arr, 112)

console.log(ret)
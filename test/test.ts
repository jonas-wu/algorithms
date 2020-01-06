import { Node, data } from "../data";

function dfs(arr: Node[], target: number) {
  const stack: Node[] = []
  stack.push(...arr.reverse())

  while (stack.length) {
    const n = stack.pop() as Node
    console.log(n.id)
    if (n.id === target) return;

    if (n.children) {
      stack.push(...n.children.reverse())
    }    
  }
}

function bfs(arr: Node[], target: number) {
  const queue: Node[] = []
  queue.push(...arr)

  while (queue.length) {
    const n = queue.shift() as Node
    console.log(n.id)
    if (n.id === target) return;

    if (n.children) {
      queue.push(...n.children)
    }    
  }
}

bfs(data, 1234)
// 深度优先查找

import { data as arr, Node } from "./data";

function dfs(arr: Node[], targetId: number) {
  const stack = [...arr].reverse();

  while (stack.length) {
    const cur = stack.pop() as Node;
    console.log(cur.id)
    if (cur.id === targetId) {
      return cur;
    }

    if (cur.children) {
      stack.push(  ...cur.children.reverse());
    }
  }

  return undefined;
}

console.log(arr);

const ret = dfs(arr, 1111);

console.log(ret);

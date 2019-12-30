// 深度优先查找

import { dfs as arr, Node } from "./data";

function dfs(arr: Node[], targetId: number) {
  const stack = [...arr].reverse();

  while (stack.length) {
    const cur = stack.pop() as Node;
    // console.log(cur.id)
    if (cur.id === targetId) {
      return cur;
    }

    if (cur.children) {
      stack.push(
        ...cur.children.map(x => {
          return {
            ...x,
            path: (cur.path || cur.id) + "->" + x.id
          };
        })
      );
    }
  }

  return undefined;
}

console.log(arr);

const ret = dfs(arr, 112);

console.log(ret);

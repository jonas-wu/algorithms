export interface Node {
  id: number;
  children?: Node[];
  path?: string;
}

const dfsData: Node[] = [{
  id: 1,
  children: [{
    id: 11,
    children: [{
        id: 111,
      }, {
        id: 112
      }
    ]
  }]
}, {
  id: 2,
  children: [{
      id: 21,
      children: [{
        id: 211
      }],
    }, {
      id: 22,
    }]
},];

export {dfsData as dfs}

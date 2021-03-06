export default class Graph {
  constructor() {
    this.nodes = {};
  }

  addEdge(node, edge) {
    if (!this.nodes[node]) return "node does not exist";
    else if (this.nodes[node][edge])
      return `edge ${node}-${edge} already exists`;
    else this.nodes[node][edge] = true;
  }

  addNode(value) {
    if (this.nodes[value]) return `node of value ${value} already exists`;
    else this.nodes[value] = {};
  }

  findEdges(node) {
    if (!this.nodes[node]) return "node does not exist";
    else return this.nodes[node];
  }

  removeEdge(node, edge) {
    if (!this.nodes[node]) return "node does not exist";
    else delete this.nodes[node][edge];
  }

  removeNode(node) {
    if (!this.nodes[node]) return "node does not exist";
    else {
      delete this.nodes[node];
      for (var currNode in this.nodes) {
        if (this.nodes[currNode][node] !== undefined)
          delete this.nodes[currNode][node];
      }
    }
  }
}

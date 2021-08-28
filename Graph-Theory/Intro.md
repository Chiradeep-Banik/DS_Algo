# Graphs - Theory
Graphs are a collection of nodes and edges G(v.e) where v is the set of vertices and e is the set of edges.

# Types of graph :
- Undirected graph --- there is no direction between two vertices,that is no orientation of the edges. e(a,b) == e(b,a)
- Directed graph or Digraph --- there is a direction between two vertices, that is orientation of the edges. e(a,b) -> means from a to b
- Weighted graph --- edges can have weights that represent distance,cpst or any other information about the edge. 

        General Convension - G(v,e) and e(v1,v2,w) where v is the set of vertices and e is the set of edges. and w is the weight of the edge.

# Some Special graphs :
- Trees --- A tree is a graph that has no cycles.
    - Rooted Tree -- it has one node that every other node either points to or from the root node.
        - Arborescence Tree(out-tree) -- every node points away from the root node.
        - Anti-Arborescence Tree(in-tree) -- every node points towards the root node.
- Directed Acrylic Graphs(DAG) --- A graph that has no cycles. Only points in one direction. Genrally used for representing dependencies.

        All Arborescence(out-tree) trees are DAGs but not all DAGS are arborescence(out-tree) trees. 
- Bipartite Graph --- A graph that has vertices such that they can be divided into two groups, such that every edge connects two vertices from different groups. It also means there is no edge that connects two vertices from the same group.

# Ways to represent a graph :
- Adjacency Matrix --- A matrix that represents the edges of the graph in a 2D VxV matrix.
- Adjacency List --- A list in which each node keep track of its out-going edges and wights.
- Edge List --- A list of edges in the graph. It is stored in triplet form e(a,b,w) where a and b are the vertices of the edge and w is the weight of the edge.
- Incidence Matrix --- A matrix that represents the edges of the graph in a 2D VxE matrix.

## Some Terms :
- Bridges --- A bridge is an edge,upon whose removal the number of components in the graph increases.
- Articulation Points --- A vertex when removed increases the number of components in the graph.
- Walks --- A series of edges that can be traversed from one node to another,i.e. every edge is incident on the node that we previaously traversed.
    - Open-Walk --- starting and ending nodes are diffrent.
    - Closed-Walk --- starting and ending nodes are same.
- Trails --- A walk in which no edge is repeated but node can be repeated. It can be both open and closed.
- Paths --- A trail in which no nodes are repeated.
- Circuit --- A closed trail.
- Disconnected Graph --- If there is <b>no path between any two nodes</b>. Each graph of a disconnected graph is called component.
- Eulerian Graph ---If a graph has <b>a closed walk where every edge is passed only once</b>, the path is called a Eulerian Path, and the graph is the Eulerian Graph, i.e. <b> A graph that has an even number of edges and even dgree for every node and no cycles</b>.
    - Open-Eulerian Graph(Uni-cursal) --- A graph that has different starting and ending nodes. So the starting and ending vertex can have odd degree.
    - Closed-Eulerian Graph --- A graph that has same starting and ending nodes.
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
- Directed Acrylic Graphs(DAG) --- A graph that has no cycles. Genrally used for representing dependencies.

        All Arborescence(out-tree) trees are DAGs but not all DAGS are arborescence(out-tree) trees. 
- Bipartite Graph --- A graph that has vertices such that they can be divided into two groups, such that every edge connects two vertices from different groups. It also means there is no edge that connects two vertices from the same group.

# Ways to represent a graph :
- Adjacency Matrix --- A matrix that represents the edges of the graph in a 2D VxV matrix.
- Adjacency List --- A list in which each node keep track of its out-going edges and wights.
- Edge List --- A list of edges in the graph. It is stored in triplet form e(a,b,w) where a and b are the vertices of the edge and w is the weight of the edge.
- Incidence Matrix --- A matrix that represents the edges of the graph in a 2D VxE matrix.
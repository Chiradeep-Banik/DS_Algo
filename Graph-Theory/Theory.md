# Hamiltonian Graph : 
- If a graph has a closed walk such that every vertex except the starting vertex is traversed exactly once without repeating any edges, then it is called a Hamiltonian graph.
- A graph is Hamiltonian if and only if it is a complete graph.

# Complete Graph :
- If a all the vertices of a graph are connected, then it is called a complete graph, i.e. each edge is adjecent to the other.

# Region Graph :
- If every vertex hasd the same degree, then it is called a region graph.

# Wheel Graph :
- If there is a vertex in the graph xuch that all the other vertices are connected to this vertex, then it is called a wheel graph.

# N-cube Graph :
- In a N-cube graph two vertices are adjecent if they are n-bit apart.

# Tree : 
- A tree is a graph in which every vertex has exactly one edge connecting to exactly one other vertex.

# Forest : 
- A collection of disjoint trees is called a forest.

# Various Properties :
- <u>Distance</u> -- d(v1,v2) = |v1-v2| --- shortest path between two vertices
    - d(v1,v2) >= 0
    - d(v1,v2) == d(v2,v1)
    - d(v1,v2) < d(v2,v3) + d(v3,v1) for any v3
- <u>Eccentricity </u> -- E(v) = MAX{ d(v1,v) for any v in the graph }
- <u>Center </u> -- C(G) = the vertex in G with the smallest eccentricity
    - A tree has either on eor two center.
    - A root tree has its center at the root node.
    - <u> Radius </u> -- R(G) = the eccentricity of the center of G C(G)
    - <u>Diameter </u> -- D(G) = the maximum distance between any two vertices in G
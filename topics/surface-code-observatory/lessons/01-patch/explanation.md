# The patch and its three languages

## orient

A surface-code patch uses many physical data qubits to store one encoded qubit. Check measurements ask collective questions about small groups of data qubits. The logical information lives in the remaining degree of freedom, rather than in one distinguished data site.

Select a data qubit, then a check. A check marker names an observable and its support. When the interface shows an ancilla, it represents a readout mechanism; it is not another stored data qubit.

## supports

The selected check acts on exactly its highlighted support. Bulk checks commonly involve four data qubits in this rotated patch; its boundary checks have smaller supports under the chosen convention. A check's matrix row records the same support as ones and zeros.

Count independent constraints, not just decorative faces. The displayed ranks determine how much encoded information remains.

## languages

The lattice shows physical placement. Algebra records supports and parity. Topology records chains and their boundaries.

A data site in the lattice corresponds to a column in the check matrices. In a sector decoding graph it becomes an edge joining checks or an allowed boundary. This graph is not the same object as a Tanner graph, which connects variables to checks.

Switch lenses and select the same object. The experiment has not changed; its description has.

## dimension

Physical qubit count, Hilbert-space dimension and logical qubit count are different quantities. Independent commuting checks restrict the data's Hilbert space to a code subspace. For this ordinary rotated planar patch, that subspace stores one qubit.

Your task: match a check support to its row, match a data qubit to its column/edge, and determine the logical qubit count from the displayed ranks.

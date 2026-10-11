# The patch and its three languages

*Surface Code Observatory · sIIr recall*

## Explanation

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

## Maths

## orient

$$
\mathcal H=(\mathbb C^2)^{\otimes n},\qquad
\dim\mathcal H=2^n.
$$
$$
S=\langle g_1,\ldots,g_r\rangle,\quad
[g_a,g_b]=0,\quad g_a^2=I,\quad -I\notin S.
$$
$$
\mathcal C=\{|\psi\rangle:g_a|\psi\rangle=|\psi\rangle\ \forall a\},
\quad \dim\mathcal C=2^{n-r}.
$$

## supports

$$
H_X\in\mathbb F_2^{m_X\times n},\quad
H_Z\in\mathbb F_2^{m_Z\times n}.
$$
$$
g_a^X=\prod_{q=1}^{n}X_q^{(H_X)_{aq}},
\qquad
g_b^Z=\prod_{q=1}^{n}Z_q^{(H_Z)_{bq}}.
$$
$$
H_XH_Z^\mathsf T=0,\qquad
\operatorname{supp}(g_a^X)=\{q:(H_X)_{aq}=1\}.
$$

## languages

$$
q\ \longleftrightarrow\ H_X[:,q],\,H_Z[:,q]
\ \longleftrightarrow\ e_q^{(Z)},\,e_q^{(X)}.
$$
$$
\partial_1^{(Z)}=H_X,\quad
\partial_2^{(Z)}=H_Z^\mathsf T,\quad
\partial_1^{(Z)}\partial_2^{(Z)}=0.
$$

## dimension

$$
k=n-\operatorname{rank}_{\mathbb F_2}H_X
-\operatorname{rank}_{\mathbb F_2}H_Z.
$$
$$
n=d^2,\quad k=1,\quad
\dim\mathcal C=2
\qquad(d\geq3\text{ odd; supported rotated square family}).
$$
$$
d=3:\quad n=9,\quad
\operatorname{rank}H_X=\operatorname{rank}H_Z=4.
$$

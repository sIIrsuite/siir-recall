# Chains, boundaries and equivalence

*Surface Code Observatory · sIIr recall*

## Explanation

## boundary

Choose one sector. Its graph describes the incidence of that error component with the checks that detect it. Each affected data qubit contributes an edge. Measured endpoints with odd incidence are syndrome defects.

An allowed physical boundary can absorb an endpoint without a measured defect. The graph's boundary terminal represents this convention; it is not another physical check. A path to such a boundary can have only one visible defect.

The names of the absorbing boundaries depend on the code convention. Read the displayed sector-specific labels.

## deformation

Multiply the chain by a same-sector stabilizer. Edges toggle modulo two. The route changes, but the measured boundary stays the same.

This deformation does more than preserve syndrome: it preserves the encoded action. Stabilizers act trivially on the code subspace. Equivalent representatives can look quite different.

## quotient

Zero syndrome means no measured boundary. It does not mean trivial encoded action.

A logical boundary-to-boundary string can be open in the drawing and still be a cycle relative to the absorbing boundaries. A stabilizer boundary can be removed by local stabilizer deformations; a nontrivial logical class cannot.

Algebra makes this distinction precise by taking undetectable operators modulo stabilizer operators. Do not classify a chain by whether its drawing looks like a loop.

## dual

The other sector has its own detecting checks and allowed endpoints. Switch sectors and follow the corresponding chain. A Y event contributes to both sector descriptions.

Your task: identify measured versus unmeasured endpoints, deform one chain without changing its class, and distinguish a stabilizer boundary from a nontrivial relative cycle.

## Maths

## boundary

$$
C_2^{(Z)}
\xrightarrow{\partial_2^{(Z)}=H_Z^\mathsf T}
C_1^{(Z)}
\xrightarrow{\partial_1^{(Z)}=H_X}
C_0^{(Z)}.
$$
$$
C_1^{(Z)}\cong\mathbb F_2^n,\quad
C_0^{(Z)}\cong\mathbb F_2^{m_X},\quad
s_X=\partial_1^{(Z)}z.
$$
$$
C_j(K,B_Z)=C_j(K)/C_j(B_Z),\qquad
\partial z=0\text{ in }C_0(K,B_Z)
\quad\text{for permitted relative cycles}.
$$

## deformation

$$
z'=z+\partial_2^{(Z)}a
=z+H_Z^\mathsf Ta.
$$
$$
\partial_1^{(Z)}z'
=\partial_1^{(Z)}z+
\partial_1^{(Z)}\partial_2^{(Z)}a
=\partial_1^{(Z)}z.
$$
$$
Z(z')|\psi_L\rangle=Z(z)|\psi_L\rangle.
$$

## quotient

$$
Z_1^{(Z)}=\ker\partial_1^{(Z)},\quad
B_1^{(Z)}=\operatorname{im}\partial_2^{(Z)},\quad
B_1^{(Z)}\subseteq Z_1^{(Z)}.
$$
$$
H_1^{(Z)}=Z_1^{(Z)}/B_1^{(Z)}
=\ker H_X/\operatorname{im}H_Z^\mathsf T.
$$
$$
r_z\in\ker H_X:\quad
[r_z]=0
\iff r_z\in\operatorname{im}H_Z^\mathsf T.
$$

## dual

$$
\partial_1^{(X)}=H_Z,\quad
\partial_2^{(X)}=H_X^\mathsf T,\quad
H_1^{(X)}=\ker H_Z/\operatorname{im}H_X^\mathsf T.
$$
$$
Y_q\simeq X_qZ_q
\leftrightarrow(e_q^{(X)},e_q^{(Z)}).
$$

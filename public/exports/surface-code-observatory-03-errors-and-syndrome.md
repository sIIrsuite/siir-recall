# Errors and syndrome

*Surface Code Observatory · sIIr recall*

## Explanation

## pauli

X and Z errors are complementary Pauli components. An X error can reverse Z-type check signs; a Z error can reverse X-type check signs. Y has both components and may affect both families.

The check type names the observable being measured, not the type of error it detects. The syndrome is the list of violated constraints, not a map of which data qubits have errors.

## column

Place one Z on the selected data qubit. The X checks containing it change sign. Algebra records these checks as the ones in that qubit's column of the X-check matrix.

Now place X after reset and inspect the Z-check matrix. In Compare, the lattice support, column entries and incident graph nodes describe the same commutation event.

## cancellation

Build a chain with two edges meeting at a measured check node. Each contributes a sign reversal, so their effects cancel there. The syndrome follows parity rather than the number of affected neighbors.

Extending the chain moves its endpoint symptoms. Quiet interior checks do not imply that the chain's interior contains no error.

## hidden

Different error patterns can yield the same syndrome. A stabilizer deformation preserves it; adding a logical operator preserves it too, while possibly changing the encoded information.

The checks therefore provide incomplete information about the physical event. Decoding must use a noise model to select a correction. It cannot recover hidden truth by inspection.

Your task: predict X/Z/Y symptoms, demonstrate one cancellation, and identify two different errors sharing a syndrome.

## Maths

## pauli

$$
E\simeq X(x)Z(z),\quad x,z\in\mathbb F_2^n,
\quad E_q\leftrightarrow(x_q,z_q).
$$
$$
I\leftrightarrow(0,0),\quad X\leftrightarrow(1,0),\quad
Z\leftrightarrow(0,1),\quad Y\leftrightarrow(1,1).
$$
$$
s_X=H_Xz,\qquad s_Z=H_Zx.
$$
$$
g_a^XE=(-1)^{(s_X)_a}Eg_a^X,\quad
g_b^ZE=(-1)^{(s_Z)_b}Eg_b^Z.
$$

## column

$$
z=e_q\Rightarrow s_X=H_Xe_q=H_X[:,q].
$$
$$
x=e_q\Rightarrow s_Z=H_Ze_q=H_Z[:,q].
$$

## cancellation

$$
z=e_q+e_{q'},\qquad
(s_X)_a=(H_X)_{aq}+(H_X)_{aq'}.
$$
$$
(H_X)_{aq}=(H_X)_{aq'}=1
\Rightarrow(s_X)_a=0.
$$
$$
\partial_1(e_q+e_{q'})
=\partial_1e_q+\partial_1e_{q'}.
$$

## hidden

$$
H_Xz=H_Xz'\iff z+z'\in\ker H_X.
$$
$$
z'=z+H_Z^\mathsf Ta\Rightarrow H_Xz'=H_Xz.
$$
$$
\ell_Z\in\ker H_X\setminus\operatorname{im}H_Z^\mathsf T,
\quad z''=z+\ell_Z\Rightarrow H_Xz''=H_Xz.
$$
$$
z+z'\in\ker H_X
\ \not\Rightarrow\
z+z'\in\operatorname{im}H_Z^\mathsf T.
$$

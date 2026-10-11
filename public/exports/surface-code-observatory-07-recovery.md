# Recovering information

*Surface Code Observatory · sIIr recall*

## Explanation

## residual

A correction combines with the error. The resulting operator is the residual. In the binary model its support is the modulo-two sum of error and correction components.

First check whether the residual still violates constraints. If it does, correction is incomplete. Only after syndrome cancellation does the simple logical-class test apply.

A Pauli frame may record a correction virtually instead of applying it physically. The effective residual still determines the interpretation, but the interface must distinguish the physical ledger from the virtual frame.

## identity

If the correction exactly matches the Pauli error, the residual is identity up to an irrelevant global phase. This restores every encoded state.

Exact support recovery is sufficient, but not necessary.

## stabilizer

A nonidentity stabilizer residual also acts trivially on the code subspace. The qubit labels may not all return to zero in the ledger, yet the encoded information has been recovered.

A simulator can demonstrate this because it knows the sampled error. An experimental decoder generally cannot inspect that hidden truth.

## logical

A nontrivial logical residual can commute with all checks and therefore produce no syndrome. The state has returned to the code subspace but the encoded information may have changed.

A logical Z can leave the particular logical-zero state unchanged. That does not make it a successful correction of arbitrary encoded information.

For an intended logical gate, evaluate against the intended target rather than identity. Intentional logical X and accidental logical X have different success references even when their supports coincide.

Your task: classify identity, nonidentity stabilizer, logical and syndrome-remaining residuals, and supply the algebraic evidence for each verdict.

## Maths

## residual

$$
E\simeq X(x)Z(z),\quad C\simeq X(c_x)Z(c_z),\quad
R=CE\simeq X(r_x)Z(r_z).
$$
$$
r_x=x+c_x,\quad r_z=z+c_z,\quad
s_X(R)=H_Xr_z,\quad s_Z(R)=H_Zr_x.
$$

## identity

$$
c_x=x,\quad c_z=z
\Rightarrow r_x=r_z=0
\Rightarrow R\simeq I.
$$
$$
R|\psi_L\rangle=e^{i\phi}|\psi_L\rangle
\qquad\forall|\psi_L\rangle\in\mathcal C.
$$

## stabilizer

$$
R\simeq S_0,\quad S_0\in S
\Rightarrow R|\psi_L\rangle=e^{i\phi}|\psi_L\rangle.
$$
$$
\mathrm{success}
\iff r_x\in\operatorname{im}H_X^\mathsf T
\ \land\ r_z\in\operatorname{im}H_Z^\mathsf T.
$$
$$
c_z=z+H_Z^\mathsf Ta
\Rightarrow r_z=H_Z^\mathsf Ta.
$$

## logical

$$
s_X(R)=s_Z(R)=0,\quad
R\not\simeq S_0\ \forall S_0\in S
\Rightarrow [R]\ne[I].
$$
$$
a=r_x\cdot\ell_Z,\quad b=r_z\cdot\ell_X,\quad
[R]=[\bar X^a\bar Z^b].
$$
$$
(a,b)=
\begin{cases}
(0,0)&I_L,\\
(1,0)&X_L,\\
(0,1)&Z_L,\\
(1,1)&Y_L\text{ up to phase}.
\end{cases}
$$
$$
\bar Z|0_L\rangle=|0_L\rangle,\qquad
\bar Z|+_L\rangle=|-_L\rangle.
$$
$$
T_L^\dagger CE\simeq S_0,\ S_0\in S
\iff\mathrm{success\ relative\ to\ target}\ T_L.
$$

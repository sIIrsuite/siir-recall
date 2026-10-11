# Acting on the encoded qubit

*Surface Code Observatory · sIIr recall*

## Explanation

## pauli

A logical operation acts on information encoded across the patch. An ideal logical X or Z can be represented by a product of physical Pauli operations along a suitable nontrivial support.

These products commute with all checks yet act nontrivially within the code subspace. Thus checks can remain quiet while the encoded state changes. Logical X exchanges the logical basis states; logical Z changes their relative phase.

The same physical support can represent an intended gate or an accidental logical error. Intent belongs to the experiment's reference action, not to the geometry alone.

## representative

Multiplying a logical Pauli by a stabilizer changes its physical representative but preserves its encoded action. Choose the deformed support and compare it with the original.

Opposite logical X and Z representatives have odd overlap parity. This is how their physical products reproduce the anticommutation of one encoded qubit.

## gates

General logical operations are not all Pauli strings. A logical Hadamard exchanges logical X and Z roles. Applying physical Hadamards exchanges X/Z checks and boundary roles; restoring the desired fixed patch encoding requires a suitable protocol or relabeling/deformation.

This panel illustrates encoded operator transformations. It does not claim that the single-patch Pauli ledger executes a fault-tolerant Hadamard circuit.

## protocols

Lattice surgery uses controlled changes in measured checks to obtain joint logical parity information across patches. Joint parity measurement is not itself an ordinary unitary gate, though parity measurements combined with ancilla preparation, feedforward and frame updates can implement entangling gates such as CNOT.

A universal gate set also needs a non-Clifford resource, such as magic-state injection/distillation in standard surface-code architectures. A T gate is not obtained simply by drawing another long Pauli string.

Your task: apply an ideal logical Pauli, demonstrate an equivalent support, predict Hadamard's operator exchange, and identify which examples are ideal actions versus physical protocols.

## Maths

## pauli

$$
P_{\mathcal C}=\prod_{a=1}^r\frac{I+g_a}{2},\qquad
UP_{\mathcal C}U^\dagger=P_{\mathcal C}.
$$
$$
C_{\mathcal P}(S)=\{P\in\mathcal P_n:[P,g]=0\ \forall g\in S\},
\quad \mathcal L\simeq C_{\mathcal P}(S)/S
\quad\text{(global phases factored out)}.
$$
$$
\bar X=X(\ell_X),\quad \bar Z=Z(\ell_Z),\quad
H_Z\ell_X=0,\ H_X\ell_Z=0,\ \ell_X\cdot\ell_Z=1.
$$
$$
|\psi_L\rangle=\alpha|0_L\rangle+\beta|1_L\rangle.
$$
$$
\bar X|\psi_L\rangle=\beta|0_L\rangle+\alpha|1_L\rangle,\qquad
\bar Z|\psi_L\rangle=\alpha|0_L\rangle-\beta|1_L\rangle.
$$

## representative

$$
\bar X'=X(\ell_X+H_X^\mathsf Ta),\qquad
\bar Z'=Z(\ell_Z+H_Z^\mathsf Tb).
$$
$$
\bar X'|_{\mathcal C}=\bar X|_{\mathcal C},\quad
\bar Z'|_{\mathcal C}=\bar Z|_{\mathcal C},\quad
\bar X\bar Z=-\bar Z\bar X.
$$

## gates

$$
\bar H\bar X\bar H^\dagger=\bar Z,\qquad
\bar H\bar Z\bar H^\dagger=\bar X.
$$
$$
H^{\otimes n}S(H^{\otimes n})^\dagger=S',
\qquad S'\ \text{need not equal }S.
$$
$$
S'\xrightarrow{\text{encoding restoration protocol}}S.
$$

## protocols

$$
P_b^{ZZ}=\frac{I+(-1)^b\bar Z_A\bar Z_B}{2},\quad
P_b^{XX}=\frac{I+(-1)^b\bar X_A\bar X_B}{2}.
$$
$$
\overline{\mathrm{CNOT}}:
\begin{cases}
\bar X_A\mapsto\bar X_A\bar X_B,\\
\bar Z_A\mapsto\bar Z_A,\\
\bar X_B\mapsto\bar X_B,\\
\bar Z_B\mapsto\bar Z_A\bar Z_B.
\end{cases}
$$
$$
\bar T=\operatorname{diag}(1,e^{i\pi/4})_{\mathcal C},\quad
\bar T\bar X\bar T^\dagger=(\bar X+\bar Y)/\sqrt2,
\quad \bar Y=i\bar X\bar Z.
$$
$$
|\bar A\rangle=\bar T|+_L\rangle,\qquad
\bar T\notin\text{Clifford group}.
$$

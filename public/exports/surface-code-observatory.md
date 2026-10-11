# Surface Code Observatory

*sIIr recall · 8 notes*

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

---

# Measuring without reading the qubit

*Surface Code Observatory · sIIr recall*

## Explanation

## observable

A stabilizer check measures one collective Pauli observable. Its result is a sign. It does not report each physical qubit's value, and it is not the same operation as applying the stabilizer as a gate.

For an ideal encoded state, every stabilizer has the prescribed positive sign. Measuring it confirms the constraint while leaving the encoded state unchanged. The logical amplitudes are not learned from this result.

## circuit

To measure a Z-type product, prepare an ancilla in zero, use each supported data qubit as a CNOT control with the ancilla as target, then measure the ancilla in Z. The ancilla collects the parity.

To measure an X-type product, prepare the ancilla in plus, use it as control with the supported data qubits as targets, and read the ancilla in X. Show the selected check's actual support on the circuit wires.

These are ideal check circuits. In hardware their gates can introduce faults; ordering the interactions matters for fault tolerance. The illustration does not claim a verified noisy schedule.

## projection

Measurement can change the data state. It projects onto an eigenspace of the measured observable. Within an eigenspace it does not resolve every remaining degree of freedom.

For example, an even Z-parity measurement preserves a superposition of both-zero and both-one states. Measuring the individual qubits distinguishes those alternatives and destroys that coherence when outcomes are discarded. Preserving a parity sector is less revealing than reading its members separately.

An arbitrary state spanning different syndrome sectors can be disturbed by measurement. “Checks never change a quantum state” would therefore be false.

## disturbance

A Pauli error that anticommutes with a check changes its sign. An ideal check measurement then reports the negative sector. For a fixed Pauli error on a code state, the result is determined by the error/check commutation, independently of the unknown logical amplitudes.

The measurement has revealed an error symptom; it has not repaired the qubits. The same check remains negative until a suitable correction changes the effective syndrome.

Your task: predict the sign before and after an anticommuting error, identify the ancilla circuit, and distinguish syndrome measurement from recovery.

## Maths

## observable

$$
g=g^\dagger,\quad g^2=I,\quad b\in\{0,1\},
\quad \lambda_b=(-1)^b.
$$
$$
P_b=\frac{I+(-1)^b g}{2},\qquad
P_0+P_1=I,\quad P_0P_1=0.
$$
$$
p_b=\operatorname{Tr}(P_b\rho),\qquad
\rho_b=\frac{P_b\rho P_b}{p_b}\quad(p_b>0).
$$
$$
g|\psi_L\rangle=|\psi_L\rangle
\Rightarrow P_0|\psi_L\rangle=|\psi_L\rangle,\ p_0=1.
$$

## circuit

$$
g_Z=\prod_{q\in A}Z_q,\quad
|0\rangle_a
\xrightarrow{\prod_{q\in A}\mathrm{CNOT}_{q\to a}}
\xrightarrow{M_Z(a)} b.
$$
$$
K_b^{(Z)}={}_a\langle b|
\left(\prod_{q\in A}\mathrm{CNOT}_{q\to a}\right)|0\rangle_a
=\frac{I+(-1)^b g_Z}{2}.
$$
$$
g_X=\prod_{q\in A}X_q,\quad
|+\rangle_a
\xrightarrow{\prod_{q\in A}\mathrm{CNOT}_{a\to q}}
\xrightarrow{M_X(a)} b.
$$
$$
K_b^{(X)}=\frac{I+(-1)^b g_X}{2}.
$$

## projection

$$
g=Z_1Z_2,\quad
P_0=|00\rangle\langle00|+|11\rangle\langle11|.
$$
$$
|\phi\rangle=\alpha|00\rangle+\beta|11\rangle,\quad
|\alpha|^2+|\beta|^2=1,\quad P_0|\phi\rangle=|\phi\rangle.
$$
$$
\mathcal M_g(\rho)=\sum_bP_b\rho P_b,\qquad
\mathcal M_g(|\phi\rangle\langle\phi|)=|\phi\rangle\langle\phi|.
$$
$$
\mathcal M_{Z_1,Z_2}(|\phi\rangle\langle\phi|)
=|\alpha|^2|00\rangle\langle00|
+|\beta|^2|11\rangle\langle11|.
$$

## disturbance

$$
g_aE=(-1)^{s_a(E)}Eg_a
\Rightarrow
g_aE|\psi_L\rangle=(-1)^{s_a(E)}E|\psi_L\rangle.
$$
$$
P_{\mathbf s}=\prod_a
\frac{I+(-1)^{s_a}g_a}{2},\qquad
P_{\mathbf s(E)}E|\psi_L\rangle=E|\psi_L\rangle.
$$
$$
\mathcal H=\bigoplus_{\mathbf s}\mathcal H_{\mathbf s},\qquad
|\phi\rangle=\sum_{\mathbf s}|\phi_{\mathbf s}\rangle,\qquad
P_{\mathbf s}|\phi\rangle=|\phi_{\mathbf s}\rangle.
$$

---

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

---

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

---

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

---

# Decoding from incomplete information

*Surface Code Observatory · sIIr recall*

## Explanation

## input

The decoder receives syndrome information and a noise model. It does not know the actual error support. Construct a candidate chain whose measured endpoints match the visible defects, using allowed boundaries where appropriate.

There can be many valid candidates. Syndrome compatibility is the first requirement, not proof that the chosen candidate restores information.

## costs

Under an independent graphlike error model, each edge receives a likelihood cost. Rare error mechanisms cost more than likely ones. The relevant path length is weighted cost, not necessarily Euclidean distance or the number of drawn edges.

For independent bit and phase components, the two sector problems can be decoded separately. Depolarizing noise contains correlations between these components through Y; independent sector decoding may discard useful information.

## matching

Minimum-weight matching resolves compatible defect pairings, including boundaries, by minimizing total cost. A nearest-neighbor greedy pairing is not the same optimization.

Inspect the actual solution's pairings and paths. Combine overlapping path contributions modulo two. The walkthrough shows the decoder's real result and assumptions; it does not invent inaccessible internal steps.

## candidate

A minimum-weight compatible error estimate need not be the true physical error. The eventual success depends on whether its difference from the true error is a stabilizer or a logical operator.

An ideal maximum-likelihood logical-class decoder sums probabilities over stabilizer-equivalent alternatives. Choosing the single most likely pattern is a different objective. Matching is exact for its specified graph optimization, not automatically optimal for every quantum noise model or logical-class probability.

Submit the candidate before revealing the true error. Then inspect the residual in the next module.

## Maths

## input

$$
\hat z=D_Z(s_X;\mathcal N),\quad
\hat x=D_X(s_Z;\mathcal N).
$$
$$
H_X\hat z=s_X,\qquad H_Z\hat x=s_Z.
$$
$$
\mathcal E_s=\{e:He=s\},\qquad
e_{\mathrm{true}}\notin\operatorname{inputs}(D).
$$

## costs

$$
P(e)=\prod_q p_q^{e_q}(1-p_q)^{1-e_q},
\qquad 0<p_q<\tfrac12.
$$
$$
-\log P(e)
=\text{constant}+\sum_q e_qw_q,\qquad
w_q=\log\frac{1-p_q}{p_q}.
$$
$$
\hat e\in\arg\min_{e:He=s}\sum_qw_qe_q.
$$
$$
\Pr(X)=\Pr(Y)=\Pr(Z)=p/3
\Rightarrow
\Pr(x_q=1)=\Pr(z_q=1)=2p/3,\quad
\Pr(x_q=z_q=1)=p/3.
$$

## matching

$$
d_w(u,v)=\min_{\gamma:u\to v}\sum_{q\in\gamma}w_q.
$$
$$
M^\star\in\arg\min_{M\in\mathcal M(s,B)}
\sum_{(u,v)\in M}d_w(u,v).
$$
$$
\hat e=\bigoplus_{(u,v)\in M^\star}\gamma_{uv},
\qquad H\hat e=s.
$$

## candidate

$$
C=X(\hat x)Z(\hat z),\quad
CE\simeq X(x+\hat x)Z(z+\hat z).
$$
$$
\Lambda^\star\in\arg\max_{\Lambda}
\sum_{E:\,s(E)=s,\ [C_0E]=\Lambda}P(E\mid s),
\qquad s(C_0)=s.
$$
$$
\arg\max_E P(E\mid s)
\quad\text{and}\quad
\arg\max_\Lambda P(\Lambda\mid s)
\quad\text{need not agree}.
$$

---

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

---

# When larger codes help

*Surface Code Observatory · sIIr recall*

## Explanation

## distance

Distance is the smallest physical Pauli support capable of a nontrivial logical action. It gives a worst-case correction radius under ideal syndrome measurements and an appropriate decoder.

It is not an event-by-event dividing line: some higher-weight errors are stabilizers or are still corrected successfully. Distance alone says neither how frequent failures are nor where the threshold lies.

## ensemble

To measure reliability, repeat a specified memory experiment and count logical failures. The logical error probability belongs to this distribution of trials, not one drawn error chain.

For an explicitly illustrative example, three failed memory trials out of one hundred give an observed failure fraction of three percent. This does not estimate a threshold. A small sample also has statistical uncertainty; observing no failures does not establish zero failure probability.

## scaling

Below a threshold, increasing distance suppresses logical failure under the chosen model and decoding/protocol assumptions. More qubits help because their added redundancy outweighs the additional opportunities for faults.

Near the transition, different finite distances may show crossings and strong finite-size effects. On the high-noise side, increasing size no longer yields the same asymptotic suppression. A schematic displays the concept; real measurements must name their noise and time normalization.

Threshold is about a family of larger codes. A finite-distance crossing suggests its location but does not prove it.

## models

Perfect-check data noise, noisy repeated measurements and faults in a complete measurement circuit are different models. They do not share a universal threshold number.

With noisy measurements, check changes over time provide detection information. One snapshot cannot distinguish a data fault from a bad readout; the relevant decoding structure includes time.

A pseudothreshold compares a fixed code's logical failure rate with a specified physical rate in comparable units. It is distinct from the asymptotic threshold.

Your task: compute a failure fraction, predict the below-threshold distance trend, and explain why a threshold statement must name its model, decoder and time convention. the statistical Experiment Lab will measure these trends using actual repeated trials.

## Maths

## distance

$$
d=\min_{P\in C_{\mathcal P}(S)\setminus S}\operatorname{wt}(P)
\quad\text{(phases factored out)}.
$$
$$
\operatorname{wt}(X(x)Z(z))
=|\operatorname{supp}(x)\cup\operatorname{supp}(z)|.
$$
$$
t=\left\lfloor\frac{d-1}{2}\right\rfloor,\quad
d=3\Rightarrow t=1,\quad d=5\Rightarrow t=2.
$$

## ensemble

$$
F_j=\mathbf1\{[C_jE_j]\ne[I]\},\quad
\hat p_L=\frac1N\sum_{j=1}^NF_j,\quad F_j\in\{0,1\}.
$$
$$
K=3,\ N=100\Rightarrow\hat p_L=0.03.
$$
$$
K\sim\operatorname{Binomial}(N,p_L)
\quad\text{(independent identically distributed trials)}.
$$
$$
\Pr(K=0\mid p_L)=(1-p_L)^N,\quad
K=0\not\Rightarrow p_L=0.
$$
$$
K=0:\quad p_{L,\mathrm{upper}}=1-\alpha^{1/N}
\quad\text{(one-sided confidence }1-\alpha\text{)}.
$$

## scaling

$$
p_L(d,p;T(d))
=\Pr_{E\sim\mathcal N_{p,d,T(d)}}\!
\left[D_{d,T(d)}(s(E))E\not\simeq S_0\ \forall S_0\in S\right].
$$
$$
p_{\mathrm{th}}
=\sup\left\{p_0:
\forall p<p_0,\ 
\lim_{d\to\infty}p_L(d,p;T(d))=0
\right\}.
$$
$$
p<p_{\mathrm{th}}
\Rightarrow p_L(d,p;T(d))\to0
\quad\text{within the specified threshold regime}.
$$
$$
p_L(d_1,p_\times;T(d_1))
=p_L(d_2,p_\times;T(d_2))
\quad\not\Rightarrow\quad p_\times=p_{\mathrm{th}}.
$$

## models

$$
p_{\mathrm{th}}
=p_{\mathrm{th}}(\text{code family},\mathcal N,D,\text{protocol},T).
$$
$$
p_L(d,p_{\mathrm{pseudo}})=p_{\mathrm{pseudo}}
\quad(d\text{ fixed; comparable rate units}).
$$
$$
\delta_a(t)=m_a(t)+m_a(t-1)\pmod2
\quad\text{(static check; interior time rounds)}.
$$
$$
\delta\ne m,\qquad
\text{temporal boundary/changed-check detectors require protocol definitions}.
$$

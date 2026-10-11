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

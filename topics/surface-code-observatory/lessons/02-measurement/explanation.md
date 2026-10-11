# Measuring without reading the qubit

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

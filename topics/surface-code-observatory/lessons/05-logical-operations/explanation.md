# Acting on the encoded qubit

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

# Errors and syndrome

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

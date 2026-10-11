# Recovering information

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

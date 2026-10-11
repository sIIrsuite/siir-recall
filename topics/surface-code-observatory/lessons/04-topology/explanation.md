# Chains, boundaries and equivalence

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

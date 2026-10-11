# Decoding from incomplete information

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

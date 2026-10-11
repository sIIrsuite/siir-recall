# When larger codes help

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

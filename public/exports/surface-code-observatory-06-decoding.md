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

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

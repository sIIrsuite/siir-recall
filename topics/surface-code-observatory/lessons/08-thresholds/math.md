# When larger codes help

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

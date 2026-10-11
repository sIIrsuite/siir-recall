# Decoding from incomplete information

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

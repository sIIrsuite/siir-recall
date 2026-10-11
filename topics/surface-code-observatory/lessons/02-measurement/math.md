# Measuring without reading the qubit

## observable

$$
g=g^\dagger,\quad g^2=I,\quad b\in\{0,1\},
\quad \lambda_b=(-1)^b.
$$
$$
P_b=\frac{I+(-1)^b g}{2},\qquad
P_0+P_1=I,\quad P_0P_1=0.
$$
$$
p_b=\operatorname{Tr}(P_b\rho),\qquad
\rho_b=\frac{P_b\rho P_b}{p_b}\quad(p_b>0).
$$
$$
g|\psi_L\rangle=|\psi_L\rangle
\Rightarrow P_0|\psi_L\rangle=|\psi_L\rangle,\ p_0=1.
$$

## circuit

$$
g_Z=\prod_{q\in A}Z_q,\quad
|0\rangle_a
\xrightarrow{\prod_{q\in A}\mathrm{CNOT}_{q\to a}}
\xrightarrow{M_Z(a)} b.
$$
$$
K_b^{(Z)}={}_a\langle b|
\left(\prod_{q\in A}\mathrm{CNOT}_{q\to a}\right)|0\rangle_a
=\frac{I+(-1)^b g_Z}{2}.
$$
$$
g_X=\prod_{q\in A}X_q,\quad
|+\rangle_a
\xrightarrow{\prod_{q\in A}\mathrm{CNOT}_{a\to q}}
\xrightarrow{M_X(a)} b.
$$
$$
K_b^{(X)}=\frac{I+(-1)^b g_X}{2}.
$$

## projection

$$
g=Z_1Z_2,\quad
P_0=|00\rangle\langle00|+|11\rangle\langle11|.
$$
$$
|\phi\rangle=\alpha|00\rangle+\beta|11\rangle,\quad
|\alpha|^2+|\beta|^2=1,\quad P_0|\phi\rangle=|\phi\rangle.
$$
$$
\mathcal M_g(\rho)=\sum_bP_b\rho P_b,\qquad
\mathcal M_g(|\phi\rangle\langle\phi|)=|\phi\rangle\langle\phi|.
$$
$$
\mathcal M_{Z_1,Z_2}(|\phi\rangle\langle\phi|)
=|\alpha|^2|00\rangle\langle00|
+|\beta|^2|11\rangle\langle11|.
$$

## disturbance

$$
g_aE=(-1)^{s_a(E)}Eg_a
\Rightarrow
g_aE|\psi_L\rangle=(-1)^{s_a(E)}E|\psi_L\rangle.
$$
$$
P_{\mathbf s}=\prod_a
\frac{I+(-1)^{s_a}g_a}{2},\qquad
P_{\mathbf s(E)}E|\psi_L\rangle=E|\psi_L\rangle.
$$
$$
\mathcal H=\bigoplus_{\mathbf s}\mathcal H_{\mathbf s},\qquad
|\phi\rangle=\sum_{\mathbf s}|\phi_{\mathbf s}\rangle,\qquad
P_{\mathbf s}|\phi\rangle=|\phi_{\mathbf s}\rangle.
$$

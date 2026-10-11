# Errors and syndrome

## pauli

$$
E\simeq X(x)Z(z),\quad x,z\in\mathbb F_2^n,
\quad E_q\leftrightarrow(x_q,z_q).
$$
$$
I\leftrightarrow(0,0),\quad X\leftrightarrow(1,0),\quad
Z\leftrightarrow(0,1),\quad Y\leftrightarrow(1,1).
$$
$$
s_X=H_Xz,\qquad s_Z=H_Zx.
$$
$$
g_a^XE=(-1)^{(s_X)_a}Eg_a^X,\quad
g_b^ZE=(-1)^{(s_Z)_b}Eg_b^Z.
$$

## column

$$
z=e_q\Rightarrow s_X=H_Xe_q=H_X[:,q].
$$
$$
x=e_q\Rightarrow s_Z=H_Ze_q=H_Z[:,q].
$$

## cancellation

$$
z=e_q+e_{q'},\qquad
(s_X)_a=(H_X)_{aq}+(H_X)_{aq'}.
$$
$$
(H_X)_{aq}=(H_X)_{aq'}=1
\Rightarrow(s_X)_a=0.
$$
$$
\partial_1(e_q+e_{q'})
=\partial_1e_q+\partial_1e_{q'}.
$$

## hidden

$$
H_Xz=H_Xz'\iff z+z'\in\ker H_X.
$$
$$
z'=z+H_Z^\mathsf Ta\Rightarrow H_Xz'=H_Xz.
$$
$$
\ell_Z\in\ker H_X\setminus\operatorname{im}H_Z^\mathsf T,
\quad z''=z+\ell_Z\Rightarrow H_Xz''=H_Xz.
$$
$$
z+z'\in\ker H_X
\ \not\Rightarrow\
z+z'\in\operatorname{im}H_Z^\mathsf T.
$$

# Recovering information

## residual

$$
E\simeq X(x)Z(z),\quad C\simeq X(c_x)Z(c_z),\quad
R=CE\simeq X(r_x)Z(r_z).
$$
$$
r_x=x+c_x,\quad r_z=z+c_z,\quad
s_X(R)=H_Xr_z,\quad s_Z(R)=H_Zr_x.
$$

## identity

$$
c_x=x,\quad c_z=z
\Rightarrow r_x=r_z=0
\Rightarrow R\simeq I.
$$
$$
R|\psi_L\rangle=e^{i\phi}|\psi_L\rangle
\qquad\forall|\psi_L\rangle\in\mathcal C.
$$

## stabilizer

$$
R\simeq S_0,\quad S_0\in S
\Rightarrow R|\psi_L\rangle=e^{i\phi}|\psi_L\rangle.
$$
$$
\mathrm{success}
\iff r_x\in\operatorname{im}H_X^\mathsf T
\ \land\ r_z\in\operatorname{im}H_Z^\mathsf T.
$$
$$
c_z=z+H_Z^\mathsf Ta
\Rightarrow r_z=H_Z^\mathsf Ta.
$$

## logical

$$
s_X(R)=s_Z(R)=0,\quad
R\not\simeq S_0\ \forall S_0\in S
\Rightarrow [R]\ne[I].
$$
$$
a=r_x\cdot\ell_Z,\quad b=r_z\cdot\ell_X,\quad
[R]=[\bar X^a\bar Z^b].
$$
$$
(a,b)=
\begin{cases}
(0,0)&I_L,\\
(1,0)&X_L,\\
(0,1)&Z_L,\\
(1,1)&Y_L\text{ up to phase}.
\end{cases}
$$
$$
\bar Z|0_L\rangle=|0_L\rangle,\qquad
\bar Z|+_L\rangle=|-_L\rangle.
$$
$$
T_L^\dagger CE\simeq S_0,\ S_0\in S
\iff\mathrm{success\ relative\ to\ target}\ T_L.
$$

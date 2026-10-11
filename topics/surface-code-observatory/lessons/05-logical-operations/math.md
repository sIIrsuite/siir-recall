# Acting on the encoded qubit

## pauli

$$
P_{\mathcal C}=\prod_{a=1}^r\frac{I+g_a}{2},\qquad
UP_{\mathcal C}U^\dagger=P_{\mathcal C}.
$$
$$
C_{\mathcal P}(S)=\{P\in\mathcal P_n:[P,g]=0\ \forall g\in S\},
\quad \mathcal L\simeq C_{\mathcal P}(S)/S
\quad\text{(global phases factored out)}.
$$
$$
\bar X=X(\ell_X),\quad \bar Z=Z(\ell_Z),\quad
H_Z\ell_X=0,\ H_X\ell_Z=0,\ \ell_X\cdot\ell_Z=1.
$$
$$
|\psi_L\rangle=\alpha|0_L\rangle+\beta|1_L\rangle.
$$
$$
\bar X|\psi_L\rangle=\beta|0_L\rangle+\alpha|1_L\rangle,\qquad
\bar Z|\psi_L\rangle=\alpha|0_L\rangle-\beta|1_L\rangle.
$$

## representative

$$
\bar X'=X(\ell_X+H_X^\mathsf Ta),\qquad
\bar Z'=Z(\ell_Z+H_Z^\mathsf Tb).
$$
$$
\bar X'|_{\mathcal C}=\bar X|_{\mathcal C},\quad
\bar Z'|_{\mathcal C}=\bar Z|_{\mathcal C},\quad
\bar X\bar Z=-\bar Z\bar X.
$$

## gates

$$
\bar H\bar X\bar H^\dagger=\bar Z,\qquad
\bar H\bar Z\bar H^\dagger=\bar X.
$$
$$
H^{\otimes n}S(H^{\otimes n})^\dagger=S',
\qquad S'\ \text{need not equal }S.
$$
$$
S'\xrightarrow{\text{encoding restoration protocol}}S.
$$

## protocols

$$
P_b^{ZZ}=\frac{I+(-1)^b\bar Z_A\bar Z_B}{2},\quad
P_b^{XX}=\frac{I+(-1)^b\bar X_A\bar X_B}{2}.
$$
$$
\overline{\mathrm{CNOT}}:
\begin{cases}
\bar X_A\mapsto\bar X_A\bar X_B,\\
\bar Z_A\mapsto\bar Z_A,\\
\bar X_B\mapsto\bar X_B,\\
\bar Z_B\mapsto\bar Z_A\bar Z_B.
\end{cases}
$$
$$
\bar T=\operatorname{diag}(1,e^{i\pi/4})_{\mathcal C},\quad
\bar T\bar X\bar T^\dagger=(\bar X+\bar Y)/\sqrt2,
\quad \bar Y=i\bar X\bar Z.
$$
$$
|\bar A\rangle=\bar T|+_L\rangle,\qquad
\bar T\notin\text{Clifford group}.
$$

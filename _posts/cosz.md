---
title: 'cosz=4 '
excerpt: 'cos z = 4 を満たす複素数'
date: '2021-07-16T05:35:07.322Z'
---
## $\cos z = 4$ 
z は複素数

### 考えたこと

オイラーの公式から
$$ 
e^{i\theta} = \cos\theta + i\sin\theta
$$

変形すると
$$
\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}
$$

より、与式は
$$
 \frac{e^{iz} + e^{-iz}}{2} = 4
$$
$$
e^{iz} + e^{-iz} = 8
$$


$z=a+bi$ ( $a, b \in\mathbb{R}$ ) とすると

$$
e^{2b}\cdot e^{-ai} - 8\cdot e^b + e^{ai} = 0 
$$
$$
e^b = 4 \pm \sqrt{15}
$$ 
よって $b=\log {(4\pm \sqrt{15})}$
（純虚数の場合はこれでOK）

↑ このときの $a$ の値を求めたい


### 解答
$$z = x + iy (x, y \in \mathbb{R}) $$
とおくと、
$$
\cos z = \cos(x+iy) = \cos x \cos (iy) - \sin x \sin (iy) \\
= \cos x \cosh y - i\sin x \sinh y = 4
$$

より、

$$
\cos x\cosh y = 4  \\
$$
また、
$$
\sin x \sinh y = 0
$$

より、 $\sin x = 0 または \sinh y = 0$ となる

求める解は
$$
z = 2n\pi + i\log_e{(4 \pm \sqrt{15})} \\
(n \in\mathbb{N})
$$
<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<script type="text/x-mathjax-config">
MathJax.Hub.Config({ tex2jax: {inlineMath: [['$', '$']]}, messageStyle: "none" });
</script>

## $\\cosz = 4$ 
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

$z=a+bi$ ($a$, $b$は実数) とすると

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
$$z = x + iy (x, y \in \real) $$
とおくと、
$$
\cos z = \cos(x+iy) = \cos x \cos (iy) - \sin x \sin (iy) \\
= \cos x \cosh y - i\sin x \sinh y = 4
$$

より、

$$
\cos x\cosh y = 4  \\
$$
$$
\sin x \sinh y = 0
$$(1)
(1) より、 $\sin x = 0 または \sinh y = 0$ となる

求める解は
$$
z = 2n\pi + i\log_e{(4 \pm \sqrt{15})} \\
(n \in \natnums)
$$

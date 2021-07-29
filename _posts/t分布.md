---
title: 母分散が未知の場合の区間推定
excerpt: t分布
date: '2021-07-29T03:14'
tags:
  - 統計学
  - 基礎
---

## t分布

標準積分布を使って母平均の区間推定を行う場合、

母平均の95%信頼区間を求める式:

$$
\bar{x} - 1.96 \times \sqrt{\frac{\sigma^2}{n}} \le \mu \le \bar{x} + 1.96 \times \sqrt{\frac{\sigma^2}{n}}
$$

これは母分散$\sigma^2$が必要となる


母分散が分からない場合は
**不偏分散**と**t分布**を用いる必要がある。


$$
\left(\begin{aligned}
E[aX+b] &= aE[X]+b \\
V[aX+b] &= a^2V[X]
\end{aligned}
\right.
$$


$U$を不偏分散とすると

正規化して
$$
T = \frac{\bar{x} - \mu}{\sqrt{\frac{U^2}{n}}}
$$
は自由度$n-1$の$t$分布に従う。

$
n \rightarrow \infty
$
のとき、正規分布に従う。



$$
-k \le \frac{\bar{x} - \mu}{\sqrt{\frac{U^2}{n}}} \le k
$$
を$\mu#について解いて、

$$
\bar{X} - k\frac{U}{\sqrt{n}} \le \mu \le \bar{X} + k\frac{U}{\sqrt{n}}
$$


### 下書き
![image](https://res.cloudinary.com/ddaz9etkx/image/upload/v1627571689/math/Untitled_Draft_-3_osgcqw.jpg)
![image](https://res.cloudinary.com/ddaz9etkx/image/upload/v1627491848/math/ttt_x3s4rg.jpg)

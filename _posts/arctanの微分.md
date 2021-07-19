---
title: arctan の微分
excerpt: 逆関数の微分例
date: '2021-07-19'
tags: 
  - 解析学
  - 導出
---

## $\arctan$ の微分

$$\arctan \theta = \tan^{-1} \theta$$
$y = \tan^{-1}x$とする。
$$x = \tan y$$
$$
\frac{dy}{dx} = \frac{1}{\frac{dx}{dy}}
$$
$$
= \frac{1}{\frac{1}{\cos^2{y}}}
$$
$$=\frac{1}{1+x^2}$$

よって $\frac{d}{dx}\arctan x = \frac{1}{1+x^2}$

### 逆関数の導関数について
$y = f(x)$ の逆関数 $x = f^{-1}(y)$ の導関数は
$$\frac{dx}{dy} = \frac{1}{\frac{dy}{dx}}$$
となる


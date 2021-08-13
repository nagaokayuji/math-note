---
title: 信号処理入門２
excerpt: フーリエ変換
date: '2021-08-13T14:35:07'
tags:
  - 信号処理
  - 基礎
  - フーリエ変換
---

## フーリエ変換

時間$t$の関数$f(t)$ について、以下のようにフーリエ変換できる。
フーリエ変換
$$
F(\omega) = \int_{-\infty}^\infty f(t)e^{-j\omega t}dt
$$

これは
$f(t)$ に $e^{-j\omega t}$ をかけ、$-\infty ~ \infty$ の範囲で時間積分したものである。

角周波数$\omega$の関数$F(\omega)$ で表せることになる。

## フーリエ逆変換

角周波数$\omega$の関数$F(\omega)$を時間$t$の関数で表す。
$$F(\omega)$$


![image](https://res.cloudinary.com/ddaz9etkx/image/upload/v1628837413/202108/1_qhwubn.jpg)
![image](https://res.cloudinary.com/ddaz9etkx/image/upload/v1628837419/202108/2_y6tus1.jpg)
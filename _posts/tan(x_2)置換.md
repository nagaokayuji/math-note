---
title: 積分 t=tan(x/2) 置換
excerpt: 
date: '2021-07-25T14:14'
tags:
  - 解析学
---

## $t=\tan(\frac{x}{2})$の置換

### 最終形

$$
\int f(\sin x, \cos x)dx = \int f(\frac{2t}{1+t^2}, \frac{1-t^2}{1+t^2})\frac{2}{1+t^2}dt
$$



### 導出
  
$$t = \tan \frac{x}{2}$$
とすると、

$$
\begin{aligned}
(\tan x)' & = & (\frac{\sin x}{\cos x})' \\
 & = & \frac{1}{\cos^2 x}
\end{aligned}
$$
より、

$$
\begin{aligned}
\frac{dt}{dx} &=& \frac{1}{2}\cdot \frac{1}{\cos^2 \frac{x}{2}} \\
&=& \frac{1+\tan^2\frac{x}{2}}{2}  \\
&=& \frac{1 + t^2}{2}
\end{aligned}
$$

よって、

$$
dx = \frac{2}{1+t^2}dt \tag{1}
$$


#### $\sin x$ を $t$ で表す
$$
\begin{aligned}
\sin x &=& 2\cos\frac{x}{2}\sin\frac{x}{2} \\
&=& 2\tan\frac{x}{2}\cdot\cos^2\frac{x}{2} \\
&=& \frac{2t}{t^2 + 1} \tag{2}

\end{aligned}
$$

#### $\cos x$ を $t$ で表す
$$
\begin{aligned}
\cos x &=& 2\cos^2\frac{x}{2} - 1 \\
&=& \frac{2}{1+t^2} - 1 \\
&=& \frac{-t^2+1}{t^2+1} \tag{3}

\end{aligned}
$$

$(1),(2),(3)$ より
$$
\int f(\sin x, \cos x)dx = \int f(\frac{2t}{1+t^2}, \frac{1-t^2}{1+t^2})\frac{2}{1+t^2}dt
$$
が成り立つ。

<hr>

### 計算用紙

![image](https://res.cloudinary.com/ddaz9etkx/image/upload/v1627191729/math/Untitled_Draft_-1_2_bli6iw.jpg)
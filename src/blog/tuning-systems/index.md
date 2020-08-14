---
title: "Tuning Systems of Indian Classical Music"
date: 2020-08-31
image: "../../../images/icm-blog.png"
description: "I am S. Balachander, an Indian classical musician and a performing artist of Chandraveena. In my long association with music, I have been privileged to have had deep and meaningful discussions on the theory of music with my Ustad, and undertaken further study of scriptures to understand our music better. Here I talk about the tuning systems of India. Read on to find out more!"
---

## Introduction

Indian Classical Music was not always like we know and understand today. In an [earlier post](/blog/grammar-of-music/), we talked about the concept of **Adhara Shadaj** and how it changed Indian Classical music significantly.

![Timeline of Indian Classical Music](icm-timeline.png)
<p align="center"><em>Figure 1. A Timeline of Indian Classical Music</em></p>

In the pre-Adhara Shadaj era, Indian Classical music was based on concepts of **Gram**, **Murchhana** and **Jati**. In the post-Adhara Shadaj era (which is the present era), the core melodic concept in Indian Classical music is that of a **Raga**. We briefly talked about the important intervals (**Pancham**, **Madhyam** and **Gandhar bhav**), the pre-Adhara Shadaj era tuning system of 22 **Srutis** per octave and a reference tuning system of the present era, due to **Ramamatya** and **Venkatamakhin** which specifies how to divide an octave into 12 notes.

In this post, let us look at these tuning systems in some more detail. 

## Background

```
Editor's Note:

Here we cover the following:
1. India's capability in mathematics (arithmetic, algebra)
2. India's capability in wood-working, metallurgy, leather crafting
3. Instruments prevalent at different times in India
4. Literature prevalent at different times in India
5. Based on the above, the rest of the article is an educated interpretation
```

## Samvad or Consonance
Before we begin discussing tuning systems, let us recall the three **Samvads** or consonant intervals of **Pancham**, **Madhyam** and **Antara Gandhar**. These were recognised early on in the history of Indian Classical music, and they are quite natural and pleasing to hear today too.

`audio: /assets/01-pancham-bhav.mp3`
<p align="center"><em>Sample 1. An Illustration of Shadaj-Pancham Bhav</em></p>

`audio: /assets/02-madhyam-bhav.mp3`
<p align="center"><em>Sample 2. An Illustration of Shadaj-Madhyam Bhav</em></p>

`audio: /assets/03-gandhar-bhav.mp3`
<p align="center"><em>Sample 3. An Illustration of Shadaj-Gandhar Bhav</em></p>

## Tuning system of Natyashastra and Sangeet Ratnakar
With this background, let us turn to the pre-Adhara Shadaj era tuning system which divided an octave into 22 interval referred to as **Srutis**.

```
Editor's Note:

Here we talk about:
1. Bharat and Natyashastra
2. Sarang Dev and Sangeet Ratnakar
3. Other relevant texts of the time
4. Three Grams being cited
5. The peculiarity of Gandhar Gram
```

Both Bharat in Natyashastra and Sarang Dev in Sangeet Ratnakar describe an experiment using an **Achal veena**, an instrument with a fixed tuning, and a **Chal veena**, an instrument whose tuning is varied through the course of the experiment. Although the term *veena* is used in their literature, it is likely that these instruments were constructed more like a harp rather than like a lute or zither of the present day.

These experiments require the Achal veena to be tuned according to a scale called **Shadaj gram**. The scale itself is described in terms of intervals between notes. Each interval is described in terms of the number of *Srutis* it spans. Shadaj Gram is described as follows.

### Shadaj Gram
Imagine an 8 string harp with strings numbered from first to eighth. Shadaj Gram is the scale defined by the following tuning.

<notice-box>

### Shadaj Gram Tuning

1. The first string of the Achal veena is tuned to **Sa**.
2. The second string is tuned to **Re** so that the interval of **Re** to **Sa** spans $3$ Srutis.
3. The third string is tuned to **Ga** so that the interval of **Ga** to **Re** spans $2$ Srutis.
4. The fourth string is tuned to **Ma** so that the interval of **Ma** to **Ga** spans $4$ Srutis.
5. The fifth string is tuned to **Pa** so that the interval of **Pa** to **Ma** spans $4$ Srutis.
6. The sixth string is tuned to **Dha** so that the interval of **Dha** to **Pa** spans $3$ Srutis.
7. The seventh string is tuned to **Ni** so that the interval of **Ni** to **Dha** spans $2$ Srutis.
8. Finally, the eighth string is tuned to **Sa'** so that the interval of **Sa'** to **Ni** spans $4$ Srutis.

</notice-box>

<div style="overflow-x:auto;width:450px;margin:0 auto;">

| String  | Note    | Sruti Interval to Previous Note |
|---------|:-------:|--------------------------------:|
| First   | **Sa**  |                                 |
| Second  | **Re**  | **Re**-**Sa** spans $3$ Srutis  |
| Third   | **Ga**  | **Ga**-**Re** spans $2$ Srutis  |
| Fourth  | **Ma**  | **Ma**-**Ga** spans $4$ Srutis  |
| Fifth   | **Pa**  | **Pa**-**Ma** spans $4$ Srutis  |
| Sixth   | **Dha** | **Dha**-**Pa** spans $3$ Srutis |
| Seventh | **Ni**  | **Ni**-**Dha** spans $2$ Srutis |
| Eighth  | **Sa'** | **Sa'**-**Ni** spans $4$ Srutis |

</div>
<p align="center"><em>Table 1. Shadaj Gram scale defined by Sruti Intervals</em></p>

Without understanding what these Sruti intervals meant, it is difficult to understand what really Shadaj Gram was. But it is possible to derive the precise meaning of these Sruti intervals. There are two possible interpretations.

### Using Gandhar Bhav
Let us start with some observations which can be derived from the above description of Shadaj Gram. They are also supported by documentation from the old scriptures. But we need to make an assumption about Gandhar bhav.

1. An octave spans $22$ Srutis. This can be checked by adding up the number of Srutis from **Sa** to **Sa'**.
2. Pancham bhav spans $13$ Srutis. This can be checked by adding up the number of Srutis from **Sa** to **Pa**.
3. Madhyam bhav spans $9$ Srutis. This can be checked similarly.
4. Now let us **assume** that Gandhar bhav spans $7$ Srutis. This cannot be checked directly as there is no literal documentation in support of this claim. But it can be seen to work in retrospect.

Now, we know that the octave ratio or the ratio **Sa'** to **Sa** is $2$. We also know that the Pancham bhav (fifth) is $\frac{3}{2}$, the Madhyam bhav (fourth) is $\frac{4}{3}$ and the Gandhar bhav (major third) is $\frac{5}{4}$. Using these observations, we can derive the mathematical ratios corresponding to the different Sruti intervals.

1. The ratio of Pancham to Madhyam spans $13-9=4$ Srutis, and is equal to $\frac{3/2}{4/3}=\frac{9}{8}$. So, a $4$ Sruti interval corresponds to the ratio $\frac{9}{8}$.
2. The ratio of Gandhar to a $4$ Sruti interval spans $7-4=3$ Srutis, and is equal to $\frac{5/4}{9/8}=\frac{10}{9}$. So, a $3$ Sruti interval corresponds to the ratio $\frac{10}{9}$.
3. The ratio of Madhyam to Gandhar spans $9-7=2$ Srutis, and is equal to $\frac{4/3}{5/4}=\frac{16}{15}$. So, a $2$ Sruti interval corresponds to the ratio $\frac{16}{15}$.


### Without using Gandhar Bhav

```
Editor's Note:

Here we talk about derivation using:
** From Sa, derive 11 steps by taking fifths
** Discard the 12th step which is very close to Sa
** From Sa, derive 10 more steps by taking fourths
** Discard the 11th step which is very close to Pa
** Total 22 intervals
```

## Tuning system of Ramamatya and Venkatamakhin
Ramamatya laid down a practical procedure for dividing an octave into 12 notes, and in the process setting the frets on a Veena. Venkatamakhin documented the 12 note divisions of the octave and calculated numerical ratios for each of the 12 notes. Taken together Ramamatya and Venkatamakhin created a tuning system for Indian Classical music which was both practically and theoretically well defined.

### Ramamatya's procedure for setting Veena frets
Ramamatya's procedure starts with using a four string Veena with its notes tuned as **Sa**, **Pa**, **Sa'** and **ma'** from the lowest to the highest. Here **Sa** denotes the fundamental, **Pa** the fifth, **Sa'** the octave and **ma'** the fourth of the octave. The tuning of the four strings is prescribed to be done by ear, and it is expected that a veena tuner can accurately set the octave, *Pancham* (fifth) and *Madhyam* (fourth) intervals.

Then the following procedure is prescribed:

<notice-box>

### Ramamatya's procedure

1. Set the second fret at a position so that the **ma'** string produces **Pa'**.
2. As a consequence, you get **Re** on the **Sa** string, **Dha** on the **Pa** string and **Re'** on the **Sa'** string.
3. Set the fourth fret at a position so that the **ma'** string produces **Dha'** (which is the octave of the note produced on the second fret on the **Pa** string).
4. As a consequence, you get **Ga** on the **Sa** string, **Ni** on the **Pa** string and **Ga'** on the **Sa'** string.
5. Set the sixth fret at a position so that the **ma'** string produces **Ni'** (which is the octave of the note produced on the fourth fret on the **Pa** string).
6. As a consequence, you get **Ma** (tivra) on the **Sa** string, **re'** (komal) on the **Pa** string and **Ma'** on the **Sa'** string.
7. Set the fifth fret at a position so that the **Pa** string produces **Sa'**.
8. As a consequence, you get **ma** on the **Sa** string, **ma'** on the **Sa'** string and **ni'** (komal) on the **ma'** string.
9. Set the third fret at a position so that the **Pa** string produces **ni** (which is an octave lower than the note produced on the fifth fret on the **ma'** string).
10. As a consequence, you get **ga** (komal) on the **Sa** string, **ga'** on the **Sa'** string and **dha'** (komal) on the **ma'** string.
11. Set the first fret at a position so that the **Pa** string produces **dha** (which is an octave lower than the note produced on the third fret on the **ma'** string).
12. As a consequence, you get **re** (komal) on the **Sa** string, **re'** on the **Sa'** string and **Ma'** (tivra) on the **ma'** string.

</notice-box>

<div style="overflow-x:auto;width:720px;margin:0 auto;">


| Step   | Fret        | Fret Position Criterion  | String 1 | String 2 | String 3 | String 4 |
|--------|-------------|--------------------------|----------|----------|----------|----------|
| 0      | Zero        | Open string              | **Sa**   | **Pa**   | **Sa'**  | **ma'**  |
| 1      | Second      | String 4 sounds **Pa'**  | **Re**   | **Dha**  | **Re'**  | **Pa'**  |
| 2      | Fourth      | String 4 sounds **Dha'** | **Ga**   | **Ni**   | **Ga'**  | **Dha'** |
| 3      | Sixth       | String 4 sounds **Ni'**  | **Ma**   | **re'**  | **Ma'**  | **Ni'**  |
| 4      | Fifth       | String 2 sounds **Sa'**  | **ma**   | **Sa'**  | **ma'**  | **ni'**  |
| 5      | Third       | String 2 sounds **ni**   | **ga**   | **ni**   | **ga'**  | **dha'** |
| 6      | First       | String 2 sounds **dha**  | **re**   | **dha**  | **re'**  | **Ma'**  |

</div>
<p align="center"><em>Table 2. Ramamatya's method for setting Veena frets</em></p>

### Venkatamakhin's documentation of the 12 note tuning system
Venkatamakhin's documentation of the 12 note tuning system devised by Ramamatya, starts with two observations:
1. the ratio of the frequency of **Sa'** to that of **Sa** is $2$, and
2. the ratio of **Pa** to **Sa** is $\frac{3}{2}$.

Since the ratio of **ma** to **Sa** is the same as that of **Sa'** to **Pa**, we can conclude that **ma** is $\frac{2}{3/2}=\frac{4}{3}$.

Going through Ramamatya's procedure, it is possible to derive the ratios for each of the 12 notes:
1. At the second fret, **Re** is $\frac{3/2}{4/3}=\frac{9}{8}$ and **Dha** is $\frac{9}{8}*\frac{3}{2}=\frac{27}{16}$.
2. At the fourth fret, **Ga** is $\frac{9}{8}*\frac{9}{8}=\frac{81}{64}$ and **Ni** is $\frac{243}{128}$.
3. At the sixth fret, **Ma** (tivra) is $\frac{729}{512}$ and **re** (komal) is $\frac{2187}{2048}$.
4. At the fifth fret, **ni** (komal) is $\frac{16}{9}$.
5. At the third fret, **ga** (komal) is $\frac{32}{27}$ and **dha** (komal) is $\frac{128}{81}$.
6. At the first fret, **re** (komal) is $\frac{256}{243}$ and **Ma** (tivra) is $\frac{1024}{729}$.

You may have noticed that ratios for **Ma** and **re** at the first and sixth fret are different. It is not documented whether Ramamatya was aware of this discrepancy, but Venkatamakhin was definitely aware. He prescribes that **Ma** is taken as $\frac{729}{512}$ (defined by the sixth fret) but that **re** is taken as $\frac{256}{243}$ (defined by the first fret).

Thus, by defining each of the 12 notes practically and theoretically, Ramamatya and Venkatamakhin created a well defined tuning system for Indian Classical music.

## Present-day understanding and Commentary

## Summary and parting words
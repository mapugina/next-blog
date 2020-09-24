---
title: "Alright, alright, I'll make a Style Guide"
createDate: '2020-09-10T04:20:44.613Z'
tags:
  - CSS
  - HTML
---

I guess I can't put this off any longer. This blog is simply too ugly to be borne. Trying to refer back to the last article made my heart fill with sorrow. Time to make this a little better.

One of the funny things about my experience as a developer is I major in Computer Science. I was explain toa family member who insisted to the other day they could never have done this because they didn't understand computers. I laughed and said that you don't need to understand computers or math or anything else really to start a Computer Science program, except math. I further explained that when you were done you could expect to know about computer architecture, math, logic as an extension of math, some basic linguistic theory, a handful of actual programming languages, and still be pretty ignorant about the basic use of a computer. I have worked with excellent developers for whom basic tasks such as checking their bank statement online were challenging, but put them in the right environment and they could write excellent code.

I bring this up because I am stepping here into a similiar place. I could just yank some colors in here and be done, but I'd really like a style guide before a get started. Having worked both with and without one I know that the results of working with one can be vastly superior. This is one of those things though that my education and experience really haven't forced me to do to date. At work I have usually been provided with a style guide or a full design. The closest I got to design in my education was software design which involved a lot more UML diagrams and no color palettes. So, time for an adventure.

# Basic Color

Since this is a developer's blog, maybe I should take a cue from the screams of dark mode elitist and do something a bit like a dark mode IDE? Hardly inspired, but wouldn't it make you feel at home?

For my first attempt I go for a Theme based loosely on visual studio code. I know half the fun of using it seems to be custominzing everything, but looking for familiar to developers in 2020 I have to think it is a pretty good start.

Using the theme extractor at [Adobe Color](https://color.adobe.com/) gets me:

- #0487D9
- #0A6AA6
- #8C8C8C
- #595959
- #262626

Additionally, I see another theme, a bit more colorful, that I'd kind of like to steal. Lets take those colors down to keep them in mind:

- #141C26
- #1E3040
- #A7CBD9
- #BF9926
- #D95555

Spoiled by previous projects I decide to use [Sass](https://sass-lang.com/). I basically always use the `.scss` extension rather than the `.sass` extension since I have a persional dislike of signfigant whitespace based on spending far to much time trying to find where people mixed tabs and spaces.

# Typography

Its a pretty basic place to start. Font, font-weight, and at least some color will come into play here, who out headers and text.

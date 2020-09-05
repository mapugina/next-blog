---
title: 'Hello Blog!'
createDate: '2020-08-28T01:09:27.703Z'
---

Ah, the dev blog. It is a tradition as old as... well dev blogs?

To date. I haven't had one of these publicly hosted, despite the fact I had made several blogs in plain old HTML, express + sequilize, and rails. I suppose the difference is that I finally was able to get pugina.com and Netlify has just made self-hosting these things so cheap (essentially free) that I have a pretty hard time saying no at this point. So I just did it. Once I had, I faced the tyranny of the blank page! What is a blog without content? What content should I generate? The like a bolt of lightning the mediocre idea struck me. Writing about choosing which framework you went with!

It maybe should be said a framework wasn't all that necessary for a simple blog like this but using it as an excuse to learn something is always fun, and my wife is going to need something along these lines soon for her university portfolio so it is never too early to start poking around for suggestions.

### If you had to choose...

With the advent of next and gatsby that there has been a new round of excitement about how painless statically generated blogs can be. Afterall now as a web developer, I can write my blog without using as much code! Hurrah!

Ironically, many of us who love to code get more excited whenever we get to do less coding.

For the past 6 years, I have been working with Angular (or angular.js), but generated markdown blogs are all the rage and it didn't seem like a great choice for that.

Sure I could have used the static site generation recently built into Angular Universal or gone with Scully, but I Angular all day. Maybe once and a while I want to mess with something else a little more on the react side of things.

I considered using Svelte because everything about the idea of Svelte has appealed pretty heavily to me since I heard about it but a couple of things kept me away from going down that road first:

1. I have played with react a bit already, something I can't say about Svelte
2. The tools don't look as mature. It looks like some folks are using Svelte for SSG, but it doesn't compare with the user base for either of the react based options I was considering.

I may yet remake this in Svelte to get a feel for it, but that is a project for a later day.

After comparing Next.js to Gatsby (the two options that seemed largely prevalent as static site generators built upon react) it seemed that either option could get up and running with fairly minimal effort. Coming primarily from Angular, either seemed like it was going to be fairly familiar, so I decided to weigh the pros and cons of each the most objective was possible, but reading a bunch of other developers' posts on their experiences!

### Eyeing Gatsby.js

WARNING: Too many literature jokes incoming!

Gatsby first hit my radar when Scully came out because some folks in the local angular community explain it was "like Gatsby." This was not particularly helpful until they explained that Gatsby was a static site generator and had no relation to the famous romantic bootlegger in Fitzgerald's novel. A quick google search came up with some attractive looking features. Data retrieval with GraphQL seemed interesting and the rich plugin environment and popularity meant that it was likely a lot would be readily available. Since my ambitions were rather small it might be overkill, but better to have more access to the feature by way of a plugin than to have too few, right?

Against Gatsby was that it was strictly a static site generator. Sure, that didn't seem like a problem now, but what about the future when I decide I want all kinds of extra crazy server-side rendering. Will the day come where I find myself aflame with SSR desire only for that desire to be shot in the head to fall dead in a pool? Only time will tell.

### Next Please

Poking around blogs about Gatsby I saw a lot of people comparing it to next.js. Since next.js has static site generation it could fill the same niche and while gatsby's vast array of plugins was impressive, next.js gave me something else that I for some reason crave, flexibility. As a brief aside have you ever been caught in this trap? Given the choice between flexibility and ease of use, you choose flexibility then lament that you have to do so much and it could have been so much easier. Next time you decide that was a huge mistake and opt for ease of use, then you are devastated when you go slightly outside of the use case, and now its all pit traps and woe. Uh, where was I?

Not only does next.js work either for static site generation or server-side rendering it isn't particularly picky about how you get your data. You simply pass your props to components by defining and exporting appropriately named functions (e.g. getSaticProps). While the use of GraphQL in Gatsby was pretty cool, I did feel like just maybe it was overkill for every situation. While the array of plugins was helpful, it felt like I might be robbing myself of the experience of development might be lost, and that if I wanted something new I would have to grok and conform to a particular plugin architecture.

Ultimately, I decided to try next.js first. If I didn't like it, at least I was writing my article in a highly portable markdown, making switching not the end of the world.

### Time to go for it!

Luckily netlify had a lovely [tutorial](https://www.netlify.com/blog/2020/05/04/building-a-markdown-blog-with-next-9.4-and-netlify/) on making a next.js blog that works with their toolchain. Since if you have gotten this far I won't reguritate their steps and pretend they are my own. This also had the benefit of looking at lot more lightweight than their CMS offering using next.js or gatsby did. Additionally, since it was broken into pretty tiny steps making little tweaks as I went (like switching from javascript to typescript) was trivial.

Luckily Netlify had a lovely tutorial on making a next.js blog that works with their toolchain. Since if you have gotten this far I won't regurgitate their steps and pretend they are my own if you want to do the same thing just check them out. This also had the benefit of looking a lot more lightweight than their CMS offering using next.js or Gatsby did. Additionally, since it was broken into pretty tiny steps making little tweaks as I went (like switching from javascript to typescript) was trivial.

While I have done stuff like this before with Azure and AWS, there always seems to be a bit more setup. It seems like things like this momentum matter a great deal, so I committed and pushed a viola! Basic blog!

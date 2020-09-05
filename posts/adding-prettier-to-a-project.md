---
title: 'Adding prettier to a project'
createDate: '2020-09-05T05:03:01.824Z'
tags:
    - prettier
    - tooling
    - node
    - husky
---

Boy, this blog is pretty plain isn't it? No CSS, plain text, it looks like the 90s. If I could throw in a hotly debated marquee tag I'd be set. Time to make some things nicer around here. What should I do first?

Oh, I know how about I format the code and make it look pretty for me in a way no one else is going to care about!

I probably could have found a next starter that had one of these already, but I used a pretty bare-bones one on purpose to force myself to learn. This is going to be one of those occasions. I have used prettier through both visual studio code plugins and when it came hooked into a project I had spun up with nx, but I haven't done it myself. Unlike the last blog, I am going regurgitate the steps I take but if you don't want my commentary and just what to read prettier's stuff on this check out their install instructions. I do diverge from them some, but hardly radically.

# Basics

Prettier works with .editorconfig so before I get going better generate one of those:

    # .editorconfig
    root = true

    [*]
    indent_style = space
    indent_size = 2
    charset = utf-8
    insert_final_newline = true

    [*.md]
    indent_size = 4

Install with npm:

    $ npm i -D prettier

Prettier also needs a .prettierrc file and allows you to use several formats for that. I am partial to yaml so into a freshly touched .prettierrc.yaml go my preferred prettier options

    # .prettierrc.yaml
    singleQuote: true
    trailingComma: none
    arrowParens: avoid

Take my preferences here for what they are, preferences. If you don't like them that is okay!

Finally, we are going to have folders we don't want prettier to look at better put those in the .prettierignore file.

    # .prettierignore

    # project files
    .next

    # dependencies
    /node_modules

    # testing
    /coverage

    # production
    /build

Looks like we are ready to try it.

    $ npx prettier --write .
    .prettierrc.yaml 28ms
    components/Header.tsx 248ms
    components/Layout.tsx 13ms
    components/PostList.tsx 20ms
    next-env.d.ts 5ms
    next.config.js 45ms
    package-lock.json 333ms
    package.json 54ms
    pages/_app.tsx 8ms
    pages/about.tsx 20ms
    pages/index.tsx 32ms
    pages/post/[postname].tsx 38ms
    posts/adding-prettier-to-a-project.md 87ms
    posts/hello-blog.md 80ms
    README.md 16ms
    siteconfig.json 3ms
    styles/globals.css 22ms
    tsconfig.json 7ms

Nice. I'll sleep better at night knowing my empty `styles/globals.css` is formatted correctly.

Finally, I am going to want to be lazy about running this so I add the following line to my scripts in my `package.json`

    "format": "prettier --write ."

# Adding Git hooks

For the uninitiated, git hooks are scripts that run when specific events are triggered through git (such as pre-commit). They can be useful if you want to prevent commits where something is wrong (say your code can't be run) or do something else when they happen like run prettier against them.

The instructions on prettier.io suggest using lint-staged and husky. For those who have no idea what those are (like me before writing this) lint-staged, true to its name, runs a command to lint your staged files based on the configuration in your `package.json` or a custom config file. Husky on the other hand allows configuration of your git hooks in your `package.json` which allows for it to follow you (or your team) around rather than having to be tediously reconfigured on checkout.

So let's install everything we'll need for this:

    $ npm i -D husky lint-staged prettier

then add the recommended properties to the `package.json`:

    {
        ...
        "husky": {
            "hooks": {
                "pre-commit": "lint-staged"
            }
        },
        "lint-staged": {
            "**/*": "prettier --write --ignore-unknown"
        }
    }

When I pasted this into my `package.json` it formatted a bit oddly. What if I commit the change and see if it works?

    $ git add package*.json
    $ git commit -m "Adds linting hooks"
    husky > pre-commit (node v10.22.0)
    ✔ Preparing...
    ✔ Running tasks...
    ✔ Applying modifications...
    ✔ Cleaning up...
    [main 88596a4] Adds linting hooks
    Date: Sat Sep 5 00:43:48 2020 -0600
    2 files changed, 927 insertions(+), 3 deletions(-)

Almost effortless! It is worth noting here that I just went with the most basic of setups. There are multiple ways to skin this cat documented in prettier's [pre-commit](https://prettier.io/docs/en/precommit.html) section.

# Conclusion

Doing this myself has led to some pretty cool stuff. I had mixed feelings about using git hooks because at one point I worked on a project where tests were run pre-commit. This worked great initially, but as the project scaled this became burdensome to the point that everyone started skipping the tests and committing with the `--no-verify` flag to skip hooks. There might be similar problems for me down the line with prettier, but for now, this seems pretty nice.

# Check this stuff out

Maybe the orginal sources say it better than I do:

-   [Prettier](https://prettier.io/)
-   [lint-staged](https://github.com/okonet/lint-staged)
-   [husky](https://github.com/typicode/husky)

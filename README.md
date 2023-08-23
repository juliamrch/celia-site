# Astro Starter Kit Powered Portfolio

This is a very simple static site made with 🚀Astro for my friend [Célia](https://www.linkedin.com/in/célia-bonalair-869247250/).

If you want to use the same template for your portfolio, follow these instructions.

## Build your own

```shell
npm create astro@latest -- --template portfolio
```

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/portfolio/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![portfolio](/public/assets/demo-site.png)


### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

### 👀 Want to learn more?

Feel free to check [the documentation](https://docs.astro.build) or jump into Astro's [Discord server](https://astro.build/chat).

## ✍️ How to write your stuff

1. Create a new file in `src/content/work`
2. Add this metadata at the top of your file and change the values
   
```yaml
---
title: Your-Title
publishDate: yyyy-dd-mm
img: /assets/your-image
img_alt: alt text
description: |
  Description of the post
tags:
  - 
  - 
  - 

draft: false
---
```
### ✨ Add a banner image

Upload all your images in `public/assets` and in `img:` add the path the following way: `img: /assets/your-image.extension`. 

For example for `model.md`: `img: /assets/stock-3.jpg`. 

### 👁️👄👁️ Add the blog post content

Write in Markdown, the most amazing markup language. Find a full syntax guide [here](https://www.markdownguide.org).

### 📸 Insert an image in your post content

To add this image:
![image example](public/assets/stock-4.jpg)

I've written this code:

`![image example](public/assets/stock-4.jpg)`

Do the same! 💅
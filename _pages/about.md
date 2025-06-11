---
permalink: /
title: "Research"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Wen Li is a PhD candidate in the Department of Chemistry at the University of Chicago, advised by [Prof. Bozhi Tian](https://tianlab.uchicago.edu/). His research envisions a future where drug/chemical stimulation can be delivered through various of ways to (1) treat disease and (2) modulate human perception, empowering tissue regeneration or altering human sensory experiences, such as touch, smell, taste, temperature and pressure perception. 

During his PhD, Wen focused on therapeutic gas delivery to treat [pressure ulcer](https://en.wikipedia.org/wiki/Pressure_ulcer), also called bedsore. Therapeutic gasous drugs such as hydrogen and oxygen are difficult to generate, store and sustainably deliver to localized wounded tissue. Wen overcame this challenge by proposing, for the first time, using hydrogels as the electrochemical cells to trap therapeutic hydrogen gas generated via hydrogen evolution reaction (HER), achieving a prolonged and sustained gasous drug delivery. And now he is developing smart electronic mattress to further advance the treatment of bedsore. 

Beyond human healthcare, Wen is looking to dive into Human Computer Interaction (HCI), where he is collaborating with [Prof. Pedro Lopes](https://lab.plopes.org/) to investigate chemical haptics. By borrowing parts of human body as input/output hardware, Wen is looking to develop new wearable devices to change human perception through controlled delivery of chemical stimulants.    

Wen has published work in top research journals, such as Nature, Nature Nanotechnology, Nature Sustainability, Nature Chemical Engineering, Matter, etc. He published his leading author paper on Nature Chemical Engineering, CCS Chemistry and Langmuir. Beyond research, Wen is interested with entrepreneurship，where he co-founded [H-Pad](https://www.hpad.us/) with his undergraduate mentee Brennan Lee, and won $5,000 seed funding from The University of Chicago [College New Venture Challenge](https://polsky.uchicago.edu/2025/03/10/exactics-wins-2025-college-new-venture-challenge-securing-115k-for-innovative-rapid-diagnostic-tests/)(CNVC). Wen won 2025 **Benjamin Ball Freud Merit Scholarship** from UChicago Chemistry department and 2024 **Outstanding Intern Award** from Futurewei Technologies, Inc.  


News
======
June 6, 2025 | Wen received **Benjamin Ball Freud Merit Scholarship** from UChicago Chemistry department.

May 21, 2025 | Wen's **Nature Chemical Engineering** paper on **Hydrogen Evolution and Dynamics in Hydrogel Electrochemical Cells for Ischemia-Reperfusion therapy** has been accepted in principle.

May 12, 2025 | Wen is nominated for **Schmidt Science Fellows** 2026.

More News can be found [here](https://wenli-web.github.io/year-archive/).

Key Publication
======
<small>Nature and Nature sister journals are highly prestigious journals for people who study engineering, fundamental science and applied science. They are fully peer-reviewed and usually have an accpetance rate below 10%. As Wen is diving into HCI and computer science, he will publish on ACM CHI and UIST conference in the future, which are also fully peer-reviewed and have an acceptance rate of 20-25%.</small>



Site-wide configuration
------
The main configuration file for the site is in the base directory in [_config.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_config.yml), which defines the content in the sidebars and other site-wide features. You will need to replace the default variables with ones about yourself and your site's github repository. The configuration file for the top menu is in [_data/navigation.yml](https://github.com/academicpages/academicpages.github.io/blob/master/_data/navigation.yml). For example, if you don't have a portfolio or blog posts, you can remove those items from that navigation.yml file to remove them from the header. 

Create content & metadata
------
For site content, there is one markdown file for each type of content, which are stored in directories like _publications, _talks, _posts, _teaching, or _pages. For example, each talk is a markdown file in the [_talks directory](https://github.com/academicpages/academicpages.github.io/tree/master/_talks). At the top of each markdown file is structured data in YAML about the talk, which the theme will parse to do lots of cool stuff. The same structured data about a talk is used to generate the list of talks on the [Talks page](https://academicpages.github.io/talks), each [individual page](https://academicpages.github.io/talks/2012-03-01-talk-1) for specific talks, the talks section for the [CV page](https://academicpages.github.io/cv), and the [map of places you've given a talk](https://academicpages.github.io/talkmap.html) (if you run this [python file](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.py) or [Jupyter notebook](https://github.com/academicpages/academicpages.github.io/blob/master/talkmap.ipynb), which creates the HTML for the map based on the contents of the _talks directory).

**Markdown generator**

The repository includes [a set of Jupyter notebooks](https://github.com/academicpages/academicpages.github.io/tree/master/markdown_generator
) that converts a CSV containing structured data about talks or presentations into individual markdown files that will be properly formatted for the Academic Pages template. The sample CSVs in that directory are the ones I used to create my own personal website at stuartgeiger.com. My usual workflow is that I keep a spreadsheet of my publications and talks, then run the code in these notebooks to generate the markdown files, then commit and push them to the GitHub repository.

How to edit your site's GitHub repository
------
Many people use a git client to create files on their local computer and then push them to GitHub's servers. If you are not familiar with git, you can directly edit these configuration and markdown files directly in the github.com interface. Navigate to a file (like [this one](https://github.com/academicpages/academicpages.github.io/blob/master/_talks/2012-03-01-talk-1.md) and click the pencil icon in the top right of the content preview (to the right of the "Raw | Blame | History" buttons). You can delete a file by clicking the trashcan icon to the right of the pencil icon. You can also create new files or upload files by navigating to a directory and clicking the "Create new file" or "Upload files" buttons. 

Example: editing a markdown file for a talk
![Editing a markdown file for a talk](/images/editing-talk.png)

For more info
------
More info about configuring Academic Pages can be found in [the guide](https://academicpages.github.io/markdown/), the [growing wiki](https://github.com/academicpages/academicpages.github.io/wiki), and you can always [ask a question on GitHub](https://github.com/academicpages/academicpages.github.io/discussions). The [guides for the Minimal Mistakes theme](https://mmistakes.github.io/minimal-mistakes/docs/configuration/) (which this theme was forked from) might also be helpful.

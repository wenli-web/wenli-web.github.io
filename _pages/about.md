---
layout: research-home
permalink: /
title: "Wen Li — Haptics and Bioelectronics"
excerpt: "Wen Li is a Ph.D. candidate at the University of Chicago developing wearable bioelectronic interfaces for haptic perception and tissue protection."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="hero container" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Haptics · Bioelectronics · HCI</p>
    <h1 id="hero-title">Engineering how<br>we <em>feel</em> &amp; <em>heal.</em></h1>
    <p class="hero-intro">I’m <strong>Wen Li</strong>, a Ph.D. candidate at the University of Chicago. I build wearable bioelectronic interfaces that sense, model, and shape human perception—and support tissue protection.</p>
    <p class="hero-advisors">Advised by <a href="https://tianlab.uchicago.edu/">Bozhi Tian</a> &amp; <a href="https://lab.plopes.org/">Pedro Lopes</a>.</p>
    <div class="hero-actions"><a class="button button-dark" href="#research">Explore my research <span aria-hidden="true">↗</span></a><a class="text-link" href="mailto:wenli@uchicago.edu">Get in touch <span aria-hidden="true">↗</span></a></div>
    <div class="hero-recognition"><span class="recognition-mark" aria-hidden="true">✳</span><p><strong>2025 MRS Graduate Student Gold Award</strong><br><span>Benjamin Ball Freud Merit Scholar</span></p></div>
  </div>
  <figure class="hero-portrait">
    <div class="portrait-contours" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="portrait-frame"><img src="{{ '/images/myphoto.jpeg' | relative_url }}" alt="Wen Li outdoors beside a river." width="1327" height="1296" fetchpriority="high"></div>
    <div class="portrait-note"><span class="note-mark" aria-hidden="true">↗</span><div>From wearable circuits<br><strong>to human experience.</strong></div></div>
    <figcaption><span class="tiny-dot" aria-hidden="true"></span> University of Chicago <span class="caption-coordinate">Chicago, IL</span></figcaption>
  </figure>
</section>

<div class="container">
  <div class="research-lenses" aria-label="Research areas">
    <div><span class="lens-number">01</span><p><strong>Sense &amp; perceive</strong><span>Touch, temperature &amp; individual perception</span></p></div>
    <div><span class="lens-number">02</span><p><strong>Build &amp; interface</strong><span>Wearable circuits &amp; electrochemical devices</span></p></div>
    <div><span class="lens-number">03</span><p><strong>Connect &amp; translate</strong><span>Human experience &amp; biological systems</span></p></div>
  </div>
</div>

<section class="section container" id="research" aria-labelledby="research-title">
  <div class="section-heading"><div><p class="eyebrow section-label">Selected work</p><h2 id="research-title">Research at the interface.</h2></div><p class="section-intro">Connecting materials, devices, and computation<br class="desktop-break"> to how the body feels and heals.</p></div>
  <div class="research-toolbar">
    <div class="filter-group" role="group" aria-label="Filter research by topic" hidden>
      <button type="button" data-filter="all" aria-pressed="true">All work <span>7</span></button>
      <button type="button" data-filter="haptics" aria-pressed="false">Haptics</button>
      <button type="button" data-filter="bioelectronics" aria-pressed="false">Bioelectronics</button>
      <button type="button" data-filter="materials" aria-pressed="false">Materials</button>
    </div>
    <a class="text-link scholar-link" href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>
  </div>
  <p class="sr-only" id="filter-status" role="status" aria-live="polite">Showing all 7 selected works.</p>
  <div class="featured-grid">
    {% for item in site.data.research.featured %}
    <article class="project-card research-item{% if forloop.first %} project-featured{% endif %}" data-category="{{ item.category }}" id="{{ item.id }}">
      <div class="project-media {{ item.imageClass }}"><img src="{{ item.image | relative_url }}" alt="{{ item.imageAlt | escape }}" loading="{% if forloop.first %}eager{% else %}lazy{% endif %}" decoding="async"></div>
      <div class="project-content">
        <div class="project-meta"><span>{{ item.venue }} · {{ item.year }}</span>{% if item.status != "" %}<span class="status-label">{{ item.status }}</span>{% endif %}</div>
        <h3><a href="{% if item.url contains 'https://' %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">{{ item.title }}</a></h3>
        <p class="project-description">{{ item.description }}</p>
        <ul class="project-tags" aria-label="Research topics">{% for tag in item.tags %}<li>{{ tag }}</li>{% endfor %}</ul>
        <div class="project-links"><a class="text-link" href="{% if item.url contains 'https://' %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">{{ item.linkLabel }} <span aria-hidden="true">↗</span></a>{% if item.video %}<a class="text-link" href="{{ item.video }}">Watch video <span aria-hidden="true">↗</span></a>{% endif %}</div>
        <details class="publication-details"><summary>Publication details</summary><p><cite>{{ item.fullTitle }}</cite><br>{{ item.authors }}.<br>{{ item.venue }}, {{ item.year }}{% if item.status != "" %} ({{ item.status | downcase }}){% endif %}.</p></details>
      </div>
    </article>
    {% endfor %}
  </div>
  <div class="additional-work">
    <div class="subsection-heading" data-secondary-heading><h3>More selected publications</h3><span>Materials, devices &amp; biointerfaces</span></div>
    {% for item in site.data.research.publications %}
    <article class="publication-row research-item" data-category="{{ item.category }}" id="{{ item.id }}">
      <div class="publication-thumbnail"><img src="{{ item.image | relative_url }}" alt="{{ item.imageAlt | escape }}" loading="lazy" decoding="async"></div>
      <div class="publication-copy"><p class="project-meta">{{ item.venue }} · {{ item.year }}</p><h4><a href="{{ item.url }}">{{ item.title }}</a></h4><p class="publication-authors">{{ item.authors }}</p><details class="publication-details"><summary>About this work</summary><p>{{ item.abstract }}</p></details></div>
      <a class="publication-arrow" href="{{ item.url }}" aria-label="Read {{ item.title | escape }}"><span aria-hidden="true">↗</span></a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="news-section" id="news" aria-labelledby="news-title">
  <div class="container news-layout">
    <div><p class="eyebrow section-label">A few updates</p><h2 id="news-title">Along the way.</h2><p class="section-intro">Research, recognition,<br>and things I’m grateful for.</p></div>
    <ol class="news-list">{% for item in site.data.research.news %}<li><time datetime="{{ item.date }}">{{ item.displayDate }}</time><p>{% if item.url != "" %}<a href="{{ item.url }}">{{ item.text }} <span aria-hidden="true">↗</span></a>{% else %}{{ item.text }}{% endif %}</p></li>{% endfor %}</ol>
  </div>
</section>

<section class="section container about-section" id="about" aria-labelledby="about-title">
  <div class="about-copy"><p class="eyebrow section-label">A little more about me</p><h2 id="about-title">Curious across disciplines.<br><em>And beyond the lab.</em></h2><p>My work lives between chemistry, biomedical engineering, and human–computer interaction. At UChicago, I develop wearable interfaces for therapy and perception with <a href="https://tianlab.uchicago.edu/">Bozhi Tian</a> and <a href="https://lab.plopes.org/">Pedro Lopes</a>.</p><p>Outside the lab, I sing bass with <a href="https://music.uchicago.edu/performance-opportunities/vocal/university-chorus">UChorus</a>, climb, cycle around Chicago, and play Go. <a href="https://vimeo.com/1085021221?share=copy#t=0">Here’s a recent performance <span aria-hidden="true">↗</span></a></p><div class="about-links"><a class="text-link" href="{{ site.author.cv | relative_url }}">Full CV <span aria-hidden="true">↗</span></a><a class="text-link" href="https://orcid.org/0009-0007-4512-0240">ORCID <span aria-hidden="true">↗</span></a></div></div>
  <div class="experience-list">
    <div><span class="experience-date">2021 — present</span><h3>University of Chicago</h3><p>Ph.D. candidate · Chemistry<br>Bioelectronic interfaces for therapy &amp; perception</p></div>
    <div><span class="experience-date">Summer 2024</span><h3>Futurewei</h3><p>Materials Research Intern<br>Polymeric optics &amp; self-healing materials</p></div>
    <div><span class="experience-date">2017 — 2021</span><h3>Nanjing University</h3><p>B.S. in Chemistry with Honors</p></div>
  </div>
  <div class="service-strip"><div><h3>Building together</h3><p>Co-founded HPad, translating bioelectronics research into a medical-device venture. Selected for CNVC Phase II, with $5K in team seed funding.</p></div><div><h3>Sharing knowledge</h3><p>Teaching, mentoring, and peer review across materials, bioelectronics, and HCI. Reviewer for venues including ACS Nano, Device, IMWUT, and EuroHaptics.</p></div></div>
</section>

<section class="contact-section" aria-labelledby="contact-title"><div class="container contact-inner"><div><p class="eyebrow">Ideas start with a conversation.</p><h2 id="contact-title">Let’s make contact.</h2></div><a href="mailto:wenli@uchicago.edu">wenli@uchicago.edu <span aria-hidden="true">↗</span></a></div></section>

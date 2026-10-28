---
layout: research-home
permalink: /
title: "Wen Li — Haptics, Bioelectronics & HCI"
excerpt: "Wen Li — Haptics, Bioelectronics & HCI. Wearable bioelectronic interfaces that stimulate, sense, and model human perception and support healthcare."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="hero container" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> Haptics, Bioelectronics &amp; HCI</p>
    <h1 id="hero-title">Engineering how<br>we <em>feel</em> &amp; <em>heal.</em></h1>
    <p class="hero-intro">I'm <strong>Wen Li</strong>, a Materials Research Society (MRS) <a href="https://www.mrs.org/advancing-careers/award-central/spring-awards/graduate-student-awards/past-recipients">Graduate Student Gold Award winner</a> and <strong>Benjamin Ball Freud Merit Scholar</strong>, and I build wearable bioelectronic interfaces that stimulate, sense, and model human perception and support healthcare.</p>
    <p class="hero-advisors">Sixth-year Ph.D. candidate at the University of Chicago.<br>Advised by <a href="https://tianlab.uchicago.edu/">Bozhi Tian</a> &amp; <a href="https://lab.plopes.org/">Pedro Lopes</a>.</p>
    <div class="hero-actions"><a class="button button-dark" href="#research">Explore my research <span aria-hidden="true">↗</span></a><a class="text-link" href="mailto:wenli@uchicago.edu">Get in touch <span aria-hidden="true">↗</span></a></div>
  </div>
  <figure class="hero-portrait">
    <div class="portrait-contours" aria-hidden="true"><span></span><span></span><span></span></div>
    <div class="portrait-frame"><img src="{{ '/images/myphoto.jpeg' | relative_url }}" alt="Wen Li outdoors beside a river." width="1327" height="1296" fetchpriority="high"></div>
    <figcaption><span class="tiny-dot" aria-hidden="true"></span> University of Chicago <span class="caption-coordinate">Chicago, IL</span></figcaption>
  </figure>
</section>

<div class="container">
  <div class="research-lenses" aria-label="Research areas">
    <div><span class="lens-number">01</span><p><strong>Stimulate &amp; Sensing</strong><span>Electrical stimulation &amp; tactile sensing</span></p></div>
    <div><span class="lens-number">02</span><p><strong>Electronics &amp; Biointerface</strong><span>Wearable circuits &amp; electrical interface</span></p></div>
    <div><span class="lens-number">03</span><p><strong>Therapy &amp; Perception</strong><span>Healthcare &amp; personalized haptics</span></p></div>
  </div>
</div>

<section class="section container" id="research" aria-labelledby="research-title">
  <div class="section-heading"><div><p class="eyebrow section-label">Selected work</p><h2 id="research-title">Research at the interface.</h2></div><p class="section-intro">Haptics, Bioelectronics &amp; HCI<br class="desktop-break"> grounded in materials and wearable electronics.</p></div>
  <div class="research-overview">
    <p class="research-overview-copy">My research bridges biomedical engineering, materials science, and human–computer interaction (HCI). My interdisciplinary publication record spans both leading scientific journals, including <em>Nature</em>, <em>Nature Chemical Engineering</em>, <em>Nature Nanotechnology</em>, <em>Nature Biomedical Engineering</em>, <em>Nature Sustainability</em>, <em>Device</em>, and <em>Matter</em>, and premier HCI conferences, including <em>ACM UIST</em>.</p>
    <figure class="summary-overview">
      <img src="{{ '/images/summary.png' | relative_url }}" alt="Research overview showing electrochemical biointerfaces for therapy, electrical interfaces for thermal referral, and wearable input/output interfaces for personalized haptic perception." width="4400" height="2097" loading="lazy" decoding="async">
      <figcaption><span>Wearable bioelectronic interfaces for therapy and perception.</span><a class="text-link" href="{{ '/images/summary.png' | relative_url }}" target="_blank" rel="noopener">View full-size image <span aria-hidden="true">↗</span></a></figcaption>
    </figure>
  </div>
  <div class="research-toolbar">
    <div class="filter-group" role="group" aria-label="Filter research by topic" hidden>
      <button type="button" data-filter="all" aria-pressed="true">Selected work</button>
      <button type="button" data-filter="haptics" aria-pressed="false">Haptics</button>
      <button type="button" data-filter="bioelectronics" aria-pressed="false">Bioelectronics</button>
      <button type="button" data-filter="hci" aria-pressed="false">HCI</button>
      <button type="button" data-filter="materials" aria-pressed="false">Materials</button>
    </div>
    <a class="text-link scholar-link" href="{{ site.author.googlescholar }}">Google Scholar <span aria-hidden="true">↗</span></a>
  </div>
  <p class="sr-only" id="filter-status" role="status" aria-live="polite">Showing 7 selected works.</p>
  {% assign selected_work = site.data.research.featured | concat: site.data.research.publications %}
  <div class="publication-panels">
    {% for item in selected_work %}
    {% assign authors_html = item.authors | escape | replace: 'Wen Li', '<strong class="author-self">Wen Li</strong>' %}
    <article class="project-card project-featured research-item" data-category="{{ item.category }}" id="{{ item.id }}">
      <div class="project-media {{ item.imageClass | default: 'figure-contain' }}"><img src="{{ item.image | relative_url }}" alt="{{ item.imageAlt | escape }}" loading="{% if forloop.first %}eager{% else %}lazy{% endif %}" decoding="async"></div>
      <div class="project-content">
        <div class="project-meta"><span>{{ item.venue }} · {{ item.year }}</span>{% if item.status and item.status != "" %}<span class="status-label">{{ item.status }}</span>{% endif %}</div>
        <h3><a href="{% if item.url contains 'https://' %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">{{ item.title }}</a></h3>
        <p class="project-authors">{{ authors_html }}</p>
        <p class="project-description">{{ item.description | default: item.abstract }}</p>
        {% if item.tags %}<ul class="project-tags" aria-label="Research topics">{% for tag in item.tags %}<li>{{ tag }}</li>{% endfor %}</ul>{% endif %}
        <div class="project-links"><a class="text-link" href="{% if item.url contains 'https://' %}{{ item.url }}{% else %}{{ item.url | relative_url }}{% endif %}">{{ item.linkLabel | default: 'Read the paper' }} <span aria-hidden="true">↗</span></a>{% if item.video %}<a class="text-link" href="{{ item.video }}">Watch video <span aria-hidden="true">↗</span></a>{% endif %}</div>
        <details class="publication-details"><summary>Publication details</summary><p><cite>{{ item.fullTitle | default: item.title }}</cite><br>{{ authors_html }}.<br>{{ item.venue }}, {{ item.year }}{% if item.status and item.status != "" %} ({{ item.status | downcase }}){% endif %}.</p></details>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="news-section" id="news" aria-labelledby="news-title">
  <div class="container news-layout">
    <div><p class="eyebrow section-label">A few updates</p><h2 id="news-title">Along the way.</h2><p class="section-intro">Updates on Wen’s research<br>and recognition.</p></div>
    <ol class="news-list">{% for item in site.data.research.news %}<li><time datetime="{{ item.date }}">{{ item.displayDate }}</time><p>{% if item.url != "" %}<a href="{{ item.url }}">{{ item.text }} <span aria-hidden="true">↗</span></a>{% else %}{{ item.text }}{% endif %}</p></li>{% endfor %}</ol>
  </div>
</section>

<section class="section container about-section" id="about" aria-labelledby="about-title">
  <div class="about-copy"><p class="eyebrow section-label">A little more about Wen</p><h2 id="about-title">Beyond the lab.</h2><p>Outside the lab, Wen sings bass with <a href="https://music.uchicago.edu/performance-opportunities/vocal/university-chorus">UChorus</a>, climbs, cycles around Chicago, and plays Go. <a href="https://vimeo.com/1085021221?share=copy#t=0">Watch Wen’s recent performance <span aria-hidden="true">↗</span></a></p></div>
  <div class="experience-list">
    <div><span class="experience-date">2021 — present</span><h3>University of Chicago</h3><p>Sixth-year Ph.D. candidate · Chemistry<br>Bioelectronic interfaces for therapy &amp; perception</p></div>
    <div><span class="experience-date">Jan — Jun 2020</span><h3>UC Berkeley</h3><p>Exchange Student · Materials Science and Engineering</p></div>
    <div><span class="experience-date">2017 — 2021</span><h3>Nanjing University</h3><p>B.S. in Chemistry with Honors</p></div>
  </div>
  <div class="service-strip"><div><h3>Peer review</h3><p>Wen reviews for venues including ACS Nano, Device, IMWUT, EuroHaptics, and IEEE Transactions on Visualization and Computer Graphics.</p></div></div>
</section>

<section class="contact-section" aria-labelledby="contact-title"><div class="container contact-inner"><div><p class="eyebrow">Ideas start with a conversation.</p><h2 id="contact-title">Let’s make contact.</h2></div><a href="mailto:wenli@uchicago.edu">wenli@uchicago.edu <span aria-hidden="true">↗</span></a></div></section>

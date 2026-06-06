import React from "react";

const S = {
  wrap: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    lineHeight: "1.85",
    color: "#e8e6e0",
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px",
    backgroundColor: "rgba(12, 12, 14, 0.95)",
    backdropFilter: "blur(12px)",
    borderRadius: "16px",
  },
  style: `
    @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500;600&family=Lora:ital,wght@0,400;0,600;1,400;1,600&display=swap');

    .db-wrap * { box-sizing: border-box; }

    .db-wrap h1, .db-wrap h2, .db-wrap h3 {
      font-family: 'Lora', Georgia, serif;
      color: #f0ede8;
      line-height: 1.25;
    }

    .db-wrap p {
      font-size: 1.15rem;
      margin-bottom: 1.5rem;
      color: #c8c5be;
      line-height: 1.85;
    }

    .db-wrap code {
      font-family: 'DM Mono', monospace;
      font-size: 0.82em;
      background: rgba(255,255,255,0.08);
      color: #c770f0;
      padding: 2px 6px;
      border-radius: 4px;
    }

    .db-tag {
      display: inline-block;
      background: rgba(199,112,240,0.12);
      color: #c770f0;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      padding: 3px 10px;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 6px;
    }

    .db-meta {
      font-size: 13px;
      color: #7a7870;
    }

    .db-divider {
      border: none;
      border-top: 1px solid rgba(255,255,255,0.08);
      margin: 2.5rem 0;
    }

    .db-pull-quote {
      border-left: 3px solid #c770f0;
      padding: 0.75rem 0 0.75rem 1.5rem;
      margin: 2.5rem 0;
      font-family: 'Lora', serif;
      font-size: 1.1rem;
      font-style: italic;
      color: #e8e6e0;
      line-height: 1.65;
    }

    .db-code-block {
      background: rgba(0,0,0,0.4);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 8px;
      padding: 1.25rem 1.5rem;
      margin: 1.25rem 0;
      font-family: 'DM Mono', monospace;
      font-size: 0.8rem;
      line-height: 1.7;
      color: #c8c5be;
    }
    
    .db-code-block pre {
      white-space: pre-wrap;
      word-break: break-word;
      margin: 0;
    }

    .db-code-label {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #5a5852;
      margin-bottom: 0.6rem;
    }

    .db-kw  { color: #c792ea; }
    .db-fn  { color: #82aaff; }
    .db-st  { color: #c3e88d; }
    .db-cm  { color: #4d5360; font-style: italic; }
    .db-di  { color: #89ddff; }

    .db-two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin: 1.25rem 0;
    }
    @media (max-width: 560px) {
      .db-two-col { grid-template-columns: 1fr; }
    }

    .db-col-label-bad  { font-size: 11px; font-weight: 600; color: #f87171; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem; }
    .db-col-label-good { font-size: 11px; font-weight: 600; color: #4ade80; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 0.5rem; }

    .db-arch-flow {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 8px;
      padding: 1.1rem 1.4rem;
      margin: 1.5rem 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 0.5rem;
      font-family: 'DM Mono', monospace;
      font-size: 0.8rem;
      color: #7a7870;
    }
    .db-flow-node {
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 4px;
      padding: 2px 10px;
      color: #e8e6e0;
      font-weight: 500;
    }
    .db-flow-arrow { color: #c770f0; font-weight: 700; }
    .db-flow-break { width: 100%; margin-top: 0.25rem; }

    .db-callout {
      background: rgba(199,112,240,0.08);
      border: 1px solid rgba(199,112,240,0.2);
      border-radius: 8px;
      padding: 1rem 1.25rem;
      font-size: 0.9rem;
      color: #c8c5be;
      margin: 1.5rem 0;
    }
    .db-callout strong { color: #c770f0; }

    .db-table-wrap { overflow-x: auto; margin: 1.5rem 0; }
    .db-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.82rem;
    }
    .db-table th {
      text-align: left;
      font-weight: 600;
      font-size: 10px;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      color: #7a7870;
      padding: 8px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }
    .db-table td {
      padding: 9px 12px;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      color: #c8c5be;
      vertical-align: top;
    }
    .db-table td:first-child { color: #e8e6e0; font-weight: 500; }

    .db-chip {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 500;
    }
    .db-chip-gray  { background: rgba(255,255,255,0.07); color: #9a9890; }
    .db-chip-red   { background: rgba(248,113,113,0.12); color: #f87171; }
    .db-chip-green { background: rgba(74,222,128,0.1);   color: #4ade80; }
    .db-chip-blue  { background: rgba(96,165,250,0.12);  color: #60a5fa; }
    .db-chip-teal  { background: rgba(45,212,191,0.1);   color: #2dd4bf; }

    .db-takeaway-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.75rem;
      margin: 1.25rem 0;
    }
    @media (max-width: 480px) {
      .db-takeaway-grid { grid-template-columns: 1fr; }
    }
    .db-takeaway {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 8px;
      padding: 0.9rem 1rem;
    }
    .db-takeaway .icon { font-size: 1.1rem; margin-bottom: 0.35rem; }
    .db-takeaway strong { display: block; font-size: 0.85rem; color: #e8e6e0; margin-bottom: 0.25rem; }
    .db-takeaway p { font-size: 0.82rem; color: #7a7870; margin: 0 !important; }

    .db-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin: 1.5rem 0;
    }
    @media (max-width: 600px) {
      .db-cards { grid-template-columns: 1fr; }
    }
    .db-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px;
      overflow: hidden;
    }
    .db-card.featured {
      border-color: rgba(199,112,240,0.4);
    }
    .db-card-head {
      padding: 0.9rem 1.1rem 0.7rem;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .db-badge-gray { background: rgba(255,255,255,0.07); color: #7a7870; }
    .db-badge-blue { background: rgba(96,165,250,0.12); color: #60a5fa; }
    .db-badge-teal { background: rgba(199,112,240,0.12); color: #c770f0; }
    .db-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 4px;
      margin-bottom: 0.4rem;
      letter-spacing: 0.04em;
    }
    .db-card-title { font-family: 'Lora', serif; font-size: 0.9rem; font-weight: 600; color: #e8e6e0; margin-bottom: 2px; }
    .db-card-sub   { font-size: 11px; color: #7a7870; }
    .db-card-body  { padding: 0.9rem 1.1rem; }
    .db-card-row   { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 0.55rem; font-size: 12px; line-height: 1.5; color: #a8a5a0; }
    .db-dot { width: 6px; height: 6px; border-radius: 50%; margin-top: 5px; flex-shrink: 0; }
    .db-dot-green { background: #4ade80; }
    .db-dot-red   { background: #f87171; }
    .db-dot-blue  { background: #c770f0; }
    .db-card-foot {
      padding: 0.65rem 1.1rem;
      background: rgba(0,0,0,0.2);
      border-top: 1px solid rgba(255,255,255,0.06);
      font-size: 11px;
      color: #7a7870;
    }
    .db-card-foot strong { color: #a8a5a0; font-weight: 600; }

    .db-author-bar {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem 0 0 0;
      border-top: 1px solid rgba(255,255,255,0.08);
      margin-top: 3rem;
    }
    .db-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background: #c770f0;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 0.9rem;
      flex-shrink: 0;
      font-family: 'Lora', serif;
    }
    .db-author-name { font-weight: 600; font-size: 0.9rem; color: #e8e6e0; margin-bottom: 2px; }
    .db-author-desc { font-size: 0.82rem; color: #7a7870; }
    .db-author-desc a { color: #c770f0; text-decoration: none; }
    .db-author-desc a:hover { text-decoration: underline; }
  `,
};

export default function DjangoBlog() {
  return (
    <div className="db-wrap" style={S.wrap}>
      <style>{S.style}</style>

      {/* META */}
      <div style={{ marginBottom: "2rem" }}>
        <span className="db-tag">Django</span>
        <span className="db-tag">Backend</span>
        <span className="db-tag">Architecture</span>
        <div className="db-meta" style={{ marginTop: "0.75rem" }}>
          Siddaarth PT &nbsp;·&nbsp; June 2026 &nbsp;·&nbsp; 8 min read
        </div>
      </div>

      {/* TITLE */}
      <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginBottom: "1rem", fontWeight: 600, letterSpacing: "-0.01em" }}>
        How I Stopped Fighting Django and Started Designing With It
      </h1>
      <p style={{ fontSize: "1.1rem", fontStyle: "italic", fontFamily: "'Lora', serif", color: "#7a7870", marginBottom: "2rem" }}>
        A practical guide to structuring Django projects so they survive contact with real-world complexity — and the people who maintain them.
      </p>
      <hr className="db-divider" />

      {/* INTRO */}
      <p>I'm going to tell you something nobody told me when I was learning Django: the default project structure is a trap.</p>
      <p>Not a cruel one — it's elegant for small things. But the moment your app has more than a handful of models and views, you start making tradeoffs that compound. Views grow fat. Business logic hides inside serializers. Debugging becomes an archaeological dig. I've been there, and I've seen it in codebases built by people far more experienced than me.</p>
      <p>This post is what I wish someone had written for me. It's not a "just follow these steps" tutorial. It's about understanding <em>why</em> certain structures fall apart — and what a better mental model actually looks like.</p>

      <h2 style={{ fontSize: "1.35rem", margin: "2.5rem 0 0.75rem" }}>Django is MVT. Most people only use two of the three.</h2>
      <p>Django's architecture is Model–View–Template. In theory, that's a clean separation: models handle your data, views handle your logic, templates handle your presentation. In practice? Most applications end up with 40-line views that talk directly to models, run conditional logic, send emails, call external APIs, and somehow also try to prepare context for a template.</p>
      <p>The V in MVT quietly absorbs everything. And that's where the rot starts.</p>

      <div className="db-pull-quote">
        "The problem isn't that Django lets you write fat views. It's that Django makes it <em>easy</em> to write them — and you don't feel the pain until it's too late."
      </div>

      <p>The fix isn't adding more files. It's adding more <em>layers</em> — and being deliberate about what lives in each one.</p>
      <hr className="db-divider" />

      {/* THE DEFAULT STRUCTURE */}
      <h2 style={{ fontSize: "1.35rem", margin: "2.5rem 0 0.75rem" }}>The default structure, and why it breaks</h2>
      <p>When you run <code>django-admin startproject</code>, you get something like this:</p>

      <div className="db-code-block">
        <div className="db-code-label">default layout</div>
        <pre style={{ margin: 0 }}>{`myproject/
├── myproject/
│   ├── `}<span className="db-fn">settings.py</span>{`
│   ├── `}<span className="db-fn">urls.py</span>{`
│   └── wsgi.py
└── myapp/
    ├── `}<span className="db-fn">models.py</span>{`
    ├── `}<span className="db-fn">views.py</span>{`
    ├── `}<span className="db-fn">admin.py</span>{`
    └── migrations/`}</pre>
      </div>

      <p>For a weekend project, this is perfect. For anything that will exist six months from now, it has three silent killers:</p>
      <p><strong style={{ color: "#e8e6e0" }}>Single settings file.</strong> One <code>settings.py</code> means your local SQLite config, your staging environment variables, and your production secrets all live in the same place. You end up commenting things out, using environment checks, or — worst case — accidentally shipping debug settings to production.</p>
      <p><strong style={{ color: "#e8e6e0" }}>Flat app structure.</strong> When <code>views.py</code> is a single file, every feature you add goes into the same file. 500 lines in, you're scrolling past unrelated code to find the function you need.</p>
      <p><strong style={{ color: "#e8e6e0" }}>No place for business logic.</strong> There's no <code>services/</code> folder. So logic ends up wherever it fits — sometimes in models, sometimes in views, sometimes in serializers. Nobody knows where to look.</p>

      <hr className="db-divider" />

      {/* THREE APPROACHES */}
      <h2 style={{ fontSize: "1.35rem", margin: "2.5rem 0 0.75rem" }}>Three approaches — one framework</h2>

      <div className="db-cards">
        <div className="db-card">
          <div className="db-card-head">
            <div className={`db-badge db-badge-gray`}>approach 01</div>
            <div className="db-card-title">Traditional Django</div>
            <div className="db-card-sub">With templates — full-stack monolith</div>
          </div>
          <div className="db-card-body">
            {[
              { dot: "green", text: "Django renders HTML on the server — views return HttpResponse with templates" },
              { dot: "green", text: "Forms, CSRF, authentication all handled natively" },
              { dot: "green", text: "One codebase — simpler to deploy" },
              { dot: "red",   text: "Tightly coupled — frontend can't be swapped without rewriting views" },
              { dot: "red",   text: "No API — mobile apps can't consume your data" },
              { dot: "red",   text: "Views balloon quickly with mixed concerns" },
            ].map((r, i) => (
              <div className="db-card-row" key={i}>
                <span className={`db-dot db-dot-${r.dot}`} />
                <span>{r.text}</span>
              </div>
            ))}
          </div>
          <div className="db-card-foot"><strong>Best for:</strong> content sites, admin tools, MVPs</div>
        </div>

        <div className="db-card">
          <div className="db-card-head">
            <div className="db-badge db-badge-blue">approach 02</div>
            <div className="db-card-title">Django REST Framework</div>
            <div className="db-card-sub">API-first — decoupled backend</div>
          </div>
          <div className="db-card-body">
            {[
              { dot: "green", text: "Returns JSON — any client (React, mobile) can consume your API" },
              { dot: "green", text: "Serializers handle validation and data shaping cleanly" },
              { dot: "green", text: "ViewSets and routers reduce CRUD boilerplate" },
              { dot: "red",   text: "Default structure still leads to fat views and fat serializers" },
              { dot: "red",   text: "Business logic ends up in serializer validate() — hard to reuse" },
              { dot: "red",   text: "One views.py per app grows uncontrollable at scale" },
            ].map((r, i) => (
              <div className="db-card-row" key={i}>
                <span className={`db-dot db-dot-${r.dot}`} />
                <span>{r.text}</span>
              </div>
            ))}
          </div>
          <div className="db-card-foot"><strong>Best for:</strong> APIs consumed by a separate frontend or mobile app</div>
        </div>

        <div className="db-card featured">
          <div className="db-card-head">
            <div className="db-badge db-badge-teal">approach 03 — recommended</div>
            <div className="db-card-title">Scalable DRF</div>
            <div className="db-card-sub">DRF + services + modular apps</div>
          </div>
          <div className="db-card-body">
            {[
              { dot: "blue", text: "Everything DRF does — plus a services layer that owns all business logic" },
              { dot: "blue", text: "Views are thin: receive request → call service → return response" },
              { dot: "blue", text: "Each app is an independent module with its own models, api, services, utils" },
              { dot: "blue", text: "Split settings (base/dev/prod) — no environment accidents" },
              { dot: "blue", text: "Services are testable without HTTP — call from Celery, CLI, or other services" },
              { dot: "blue", text: "Scales across team members — each developer owns one app cleanly" },
            ].map((r, i) => (
              <div className="db-card-row" key={i}>
                <span className={`db-dot db-dot-${r.dot}`} />
                <span>{r.text}</span>
              </div>
            ))}
          </div>
          <div className="db-card-foot"><strong>Best for:</strong> production apps that need to survive growth and multiple developers</div>
        </div>
      </div>

      {/* COMPARISON TABLE */}
      <div className="db-table-wrap">
        <table className="db-table">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Dimension</th>
              <th style={{ width: "26%" }}>Traditional Django</th>
              <th style={{ width: "26%" }}>DRF (default)</th>
              <th style={{ width: "28%" }}>Scalable DRF</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Response format",  <span className="db-chip db-chip-gray">HTML pages</span>,               <span className="db-chip db-chip-blue">JSON</span>,                             <span className="db-chip db-chip-blue">JSON</span>],
              ["Business logic",   "Inside views or models",                                                "Views or serializers",                                                          <span className="db-chip db-chip-teal">Dedicated services/</span>],
              ["View weight",      <span className="db-chip db-chip-red">Fat views</span>,                 <span className="db-chip db-chip-red">Still fat</span>,                         <span className="db-chip db-chip-green">Thin views</span>],
              ["Frontend",         "Django templates only",                                                 "Any client",                                                                    "Any client"],
              ["Settings",         "Single settings.py",                                                    "Single settings.py",                                                            <span className="db-chip db-chip-green">base / dev / prod split</span>],
              ["Testability",      "Requires HTTP + templates",                                             "Requires HTTP requests",                                                        <span className="db-chip db-chip-green">Services testable standalone</span>],
              ["Reusability",      <span className="db-chip db-chip-red">Low</span>,                      <span className="db-chip db-chip-red">Low</span>,                               <span className="db-chip db-chip-green">High</span>],
              ["Team scale",       <span className="db-chip db-chip-red">Conflicts in shared files</span>, <span className="db-chip db-chip-red">Conflicts in shared files</span>,         <span className="db-chip db-chip-green">Each dev owns one app</span>],
            ].map(([dim, t, d, s], i) => (
              <tr key={i}>
                <td>{dim}</td><td>{t}</td><td>{d}</td><td>{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="db-divider" />

      {/* SCALABLE STRUCTURE */}
      <h2 style={{ fontSize: "1.35rem", margin: "2.5rem 0 0.75rem" }}>A structure that actually scales</h2>
      <p>Here's the layout I've landed on after working through several production Django projects. It's not a rigid prescription — it's a set of principles made visible in folders.</p>

      <div className="db-code-block">
        <div className="db-code-label">scalable project layout</div>
        <pre style={{ margin: 0 }}>{`project/
├── `}<span className="db-di">config/</span>{`
│   ├── settings/
│   │   ├── `}<span className="db-fn">base.py</span>{`    `}<span className="db-cm"># shared settings</span>{`
│   │   ├── `}<span className="db-fn">dev.py</span>{`     `}<span className="db-cm"># local DB, DEBUG=True, mock email</span>{`
│   │   └── `}<span className="db-fn">prod.py</span>{`    `}<span className="db-cm"># RDS, DEBUG=False, SendGrid</span>{`
│   ├── `}<span className="db-fn">urls.py</span>{`
│   └── wsgi.py
├── `}<span className="db-di">apps/</span>{`
│   ├── users/
│   │   ├── models.py
│   │   ├── api/          `}<span className="db-cm"># views.py, serializers.py, urls.py</span>{`
│   │   ├── services/     `}<span className="db-cm"># auth.py, profile.py …</span>{`
│   │   └── tests/
│   ├── chat/
│   └── payments/
├── `}<span className="db-di">static/</span>{`
├── `}<span className="db-di">templates/</span>{`
└── manage.py`}</pre>
      </div>

      <hr className="db-divider" />

      {/* SERVICES LAYER */}
      <h2 style={{ fontSize: "1.35rem", margin: "2.5rem 0 0.75rem" }}>The services layer: where logic belongs</h2>
      <p>The biggest shift for me was realising that views and serializers are just <em>translation layers</em>. A view translates an HTTP request into Python. A serializer translates Python objects into JSON. <strong style={{ color: "#e8e6e0" }}>Neither of them should know how to charge a credit card, provision a user, or send an email.</strong></p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', margin: '1.5rem 0' }}>
        <div>
          <div className="db-col-label-bad">✗ the fat view</div>
          <div className="db-code-block" style={{ marginTop: 0 }}>
            <pre><span className="db-kw">def</span> <span className="db-fn">register</span>(request):{`
    form = RegisterForm(request.POST)
    `}<span className="db-kw">if</span>{` form.is_valid():
        `}<span className="db-cm"># business logic in the view</span>{`
        user = User.objects.create_user(
            email=form.cleaned_data[`}<span className="db-st">'email'</span>{`],
            password=form.cleaned_data[`}<span className="db-st">'password'</span>{`]
        )
        Profile.objects.create(user=user, plan=`}<span className="db-st">'trial'</span>{`)
        send_welcome_email(user)
        stripe.Customer.create(email=user.email)
        `}<span className="db-kw">return</span>{` redirect(`}<span className="db-st">'dashboard'</span>{`)\n`}</pre>
          </div>
        </div>
        <div>
          <div className="db-col-label-good">✓ the thin view</div>
          <div className="db-code-block" style={{ marginTop: 0 }}>
            <pre><span className="db-kw">def</span> <span className="db-fn">register</span>(request):{`
    form = RegisterForm(request.POST)
    `}<span className="db-kw">if</span>{` form.is_valid():
        `}<span className="db-cm"># delegate everything to the service</span>{`
        services.register_user(
            email=form.cleaned_data[`}<span className="db-st">'email'</span>{`],
            password=form.cleaned_data[`}<span className="db-st">'password'</span>{`]
        )
        `}<span className="db-kw">return</span>{` redirect(`}<span className="db-st">'dashboard'</span>{`)\n`}</pre>
          </div>
        </div>
      </div>

      <div className="db-code-block">
        <div className="db-code-label">apps/users/services/auth.py — where the logic actually lives</div>
        <pre><span className="db-kw">def</span> <span className="db-fn">register_user</span>(email: str, password: str) -{'>'} User:{`
    `}<span className="db-st">"""
    Creates a user, sends welcome email, starts their trial.
    Raises ValueError if email already exists.
    """</span>{`
    `}<span className="db-kw">if</span>{` User.objects.filter(email=email).exists():
        `}<span className="db-kw">raise</span>{` ValueError(`}<span className="db-st">'Email already registered'</span>{`)

    user = User.objects.create_user(email=email, password=password)
    _send_welcome_email(user)
    _create_trial_subscription(user)
    `}<span className="db-kw">return</span>{` user\n`}</pre>
      </div>

      <div className="db-callout">
        <strong>Why does this matter?</strong> When your registration logic lives in a service, you can test it without making HTTP requests. You can call it from a management command, a Celery task, an admin action, or another service — without touching the view. Logic reuse without copy-paste. That's the payoff.
      </div>

      <hr className="db-divider" />

      {/* REQUEST FLOW */}
      <h2 style={{ fontSize: "1.35rem", margin: "2.5rem 0 0.75rem" }}>How a request flows through this</h2>
      <p>Once you internalize the structure, the request lifecycle becomes a straight line:</p>

      <div className="db-arch-flow">
        {["Client","urls.py","View","Service","Model","Database"].map((n, i, arr) => (
          <React.Fragment key={n}>
            <span className="db-flow-node">{n}</span>
            {i < arr.length - 1 && <span className="db-flow-arrow">→</span>}
          </React.Fragment>
        ))}
        <div className="db-flow-break" />
        {["Client","Response","Serializer / Template","View","Service result"].map((n, i, arr) => (
          <React.Fragment key={n}>
            <span className="db-flow-node">{n}</span>
            {i < arr.length - 1 && <span className="db-flow-arrow">←</span>}
          </React.Fragment>
        ))}
      </div>

      <p>Each layer has a single concern. Views don't know about database queries. Services don't know about HTTP. Models don't know about business rules. When something breaks, you know exactly which layer to look at.</p>

      <hr className="db-divider" />

      {/* TAKEAWAYS */}
      <h2 style={{ fontSize: "1.35rem", margin: "2.5rem 0 0.75rem" }}>Things I learned the hard way</h2>

      <div className="db-takeaway-grid">
        {[
          { icon: "🧱", title: "Structure is architecture, not aesthetics", body: "It's not about clean folders. It's about where the next person looks when something breaks at 2am." },
          { icon: "🔬", title: "Thin views are easier to test",             body: "A view that calls a service is one assertion. A fat view is a test file unto itself." },
          { icon: "⚙️", title: "Split settings before you need to",          body: "It takes 15 minutes to set up. It saves hours of debugging environment-specific bugs." },
          { icon: "📦", title: "Apps should be ownable",                    body: "If one developer can own an entire app — models, views, services — it's the right size. If not, split it." },
          { icon: "🔄", title: "Services enable reuse",                     body: "Business logic in a service can be called from a Celery task, a management command, or another service — for free." },
          { icon: "📐", title: "Design for the next person",                body: "That person is usually you, six months from now, with no memory of why you made any of these decisions." },
        ].map(({ icon, title, body }) => (
          <div className="db-takeaway" key={title}>
            <div className="icon">{icon}</div>
            <strong>{title}</strong>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <hr className="db-divider" />

      <div className="db-pull-quote">
        "Good architecture doesn't announce itself. It's the absence of friction when you need to make a change."
      </div>

      <p>The goal of all this isn't to look professional on GitHub. It's to build something you can still reason about when it's three times larger and being maintained by people who weren't there when you wrote it.</p>
      <p>I'm still learning. This isn't the final word on Django architecture. But it's what's working for me, and I hope it saves someone the three months it took me to figure out why my views were 400 lines long.</p>

      {/* AUTHOR */}
      <div className="db-author-bar">
        <div className="db-avatar">SP</div>
        <div>
          <div className="db-author-name">Siddaarth PT</div>
          <div className="db-author-desc">
            Building things at{" "}
            <a href="https://siddaarth.vercel.app" target="_blank" rel="noopener noreferrer">
              siddaarth.vercel.app
            </a>{" "}
            — Django, system design, and making software that doesn't break.
          </div>
        </div>
      </div>
    </div>
  );
}
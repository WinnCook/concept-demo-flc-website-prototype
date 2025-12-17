# SKYRIDGE Information Architecture
**Phase 5 Artifact | Navigation & Content Structure**
**Created:** 2025-12-17

---

## 1. NAVIGATION PHILOSOPHY

### Core Principle: Intelligent Discovery
Traditional university websites rely on hierarchical dropdown menus that assume users know what they're looking for. SKYRIDGE reimagines navigation as **intelligent discovery** — meeting users where they are.

### Design Patterns Applied
| Pattern | Source | Application |
|---------|--------|-------------|
| Universal Search | Apple | Omnisearch bar that finds everything |
| Smart Routing | UChicago | "I am a..." persona routing |
| Mega Menu | Enterprise UX | Rich, visual navigation panels |
| Contextual Suggestions | Modern E-commerce | Related links based on context |
| Progressive Disclosure | RISD | Reveal complexity gradually |

---

## 2. NAVIGATION HIERARCHY

### Level 0: Global Actions (Always Visible)
```
[SKYRIDGE Logo] [Search] [I am a...] [Apply Now]
```

### Level 1: Primary Navigation
| Item | Purpose | Priority |
|------|---------|----------|
| **Academics** | Programs, majors, schools | High |
| **Admission** | Apply, visit, aid | High |
| **Campus** | Life, housing, location | Medium |
| **About** | Story, leadership, values | Medium |
| **Connect** | News, events, contact | Low |

### Level 2: Mega Menu Content (Academics Example)
```
┌─────────────────────────────────────────────────────────────────┐
│ ACADEMICS                                             [Explore All →] │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ EXPLORE BY INTEREST          SCHOOLS               QUICK LINKS  │
│ ○ Science & Engineering      School of Arts &      • Course     │
│ ○ Business & Economics       Sciences              Catalog      │
│ ○ Arts & Humanities          School of Education   • Academic   │
│ ○ Health & Wellness          Katz School of        Calendar     │
│ ○ Environment & Outdoors     Business              • Advising   │
│ ○ Social Sciences                                  • Research   │
│                              FEATURED PROGRAM                   │
│ POPULAR PROGRAMS             [Adventure Education]              │
│ • Business Administration    One of the nation's premier       │
│ • Biology                    outdoor leadership programs.      │
│ • Psychology                 [Learn More →]                     │
│ • Exercise Science                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. OMNISEARCH SYSTEM

### Search Behavior
The search bar is not just a text field — it's an intelligent assistant.

**Input States:**
1. **Empty** — Shows popular searches and quick links
2. **Typing** — Live suggestions with categorized results
3. **Results** — Full page with filters and sorting

### Search Categories
| Category | Examples | Icon |
|----------|----------|------|
| Programs | "Biology", "MBA", "Adventure Education" | 🎓 |
| People | Faculty names, staff directory | 👤 |
| Pages | "Tuition", "Campus Map", "Housing" | 📄 |
| Events | Upcoming events, registration | 📅 |
| News | Latest announcements | 📰 |
| Quick Actions | "Apply", "Visit", "Contact" | ⚡ |

### Suggestion Algorithm (Conceptual)
```
1. Match against program names (exact, starts-with, contains)
2. Match against page titles and keywords
3. Show top 3 from each category
4. Prioritize by search popularity and user persona
```

---

## 4. ACADEMIC PROGRAM EXPLORER

### Purpose
Replace traditional A-Z program listings with an interactive discovery experience.

### Filter Dimensions
| Filter | Options | Type |
|--------|---------|------|
| **School** | Arts & Sciences, Education, Business | Multi-select |
| **Interest Area** | STEM, Humanities, Business, Health, Outdoor, Social | Multi-select |
| **Degree Type** | Bachelor's, Minor, Certificate, Graduate | Multi-select |
| **Career Path** | Pre-Med, Pre-Law, Teaching, Research, etc. | Multi-select |
| **Format** | On-campus, Hybrid | Single-select |

### Program Card Design
```
┌──────────────────────────────────────┐
│ [BIOLOGY]                    B.S.   │
│ School of Arts & Sciences           │
│                                      │
│ From field research in the San      │
│ Juans to lab work in our new        │
│ science building, learn by doing.   │
│                                      │
│ 🔬 Research │ 🏔️ Outdoor │ 🏥 Pre-Med │
│                                      │
│ [Explore Program →]                 │
└──────────────────────────────────────┘
```

### Featured Program Highlights
Programs with unique FLC differentiators get special callouts:
- Adventure Education (nationally recognized)
- Native American & Indigenous Studies (historic mission)
- Exercise Science (outdoor performance focus)
- Ski Resort Operations (only program of its kind)

---

## 5. SITEMAP STRUCTURE

### Complete Page Hierarchy

```
SKYRIDGE
├── / (Home - Landing with persona router)
│
├── /academics
│   ├── /programs (Program Explorer with filters)
│   ├── /schools
│   │   ├── /arts-sciences
│   │   ├── /education
│   │   └── /business
│   ├── /research
│   ├── /catalog (→ external)
│   └── /calendar
│
├── /admission
│   ├── /apply
│   ├── /visit
│   ├── /tuition-aid
│   │   ├── /scholarships
│   │   ├── /native-american-waiver
│   │   └── /tuition-promise
│   ├── /transfer
│   └── /international
│
├── /campus
│   ├── /life
│   ├── /housing
│   ├── /dining
│   ├── /durango
│   ├── /map
│   └── /safety
│
├── /about
│   ├── /story
│   ├── /leadership
│   ├── /values
│   ├── /fast-facts
│   └── /careers
│
├── /connect
│   ├── /news
│   ├── /events
│   ├── /athletics (→ goskyhawks.com)
│   ├── /alumni
│   └── /contact
│
└── /[persona] (7 audience landing pages)
    ├── /future-student
    ├── /parent
    ├── /current-student
    ├── /alumni
    ├── /faculty
    ├── /staff
    └── /community
```

---

## 6. CONTENT HIERARCHY PRINCIPLES

### Information Priority (Inverse Pyramid)
```
     ┌─────────┐
     │ ACTION  │  ← What can I DO right now?
     ├─────────┤
     │ EMOTION │  ← How will I FEEL?
     ├─────────┤
     │ FACTS   │  ← What do I need to KNOW?
     └─────────┘
```

Every page should answer these questions in order:
1. **Action** — Clear CTA above the fold
2. **Emotion** — Value proposition, imagery, testimonials
3. **Facts** — Details, requirements, specifications

### Content Modules (Reusable)
| Module | Purpose | Usage |
|--------|---------|-------|
| Hero | Bold statement + CTA | Page tops |
| Stat Block | Key numbers | Social proof |
| Card Grid | Related items | Programs, events |
| Testimonial | Student/alumni voice | Trust building |
| CTA Banner | Drive action | Conversion points |
| FAQ Accordion | Answer questions | Reduce friction |
| Timeline | Process steps | Applications |
| Comparison Table | Options side-by-side | Aid packages |

---

## 7. MOBILE NAVIGATION

### Bottom Navigation Bar
For mobile, move key actions to thumb-reach zone:
```
┌────────────────────────────────────┐
│                                    │
│        [Page Content]              │
│                                    │
├────┬────┬────┬────┬────────────────┤
│ 🏠 │ 🔍 │ 📋 │ 👤 │                │
│Home│Find│Menu│ Me │                │
└────┴────┴────┴────┴────────────────┘
```

### Mobile Menu Pattern
- Slide-in from right (70% screen width)
- Accordion expansion for submenu items
- Prominent persona router at top
- Search bar sticky at top

---

## 8. NAVIGATION STATES

### Active Indicators
- Current section highlighted in nav
- Breadcrumb trail on interior pages
- Progress indicators on multi-step flows

### Visual Feedback
```css
/* Active nav item */
.nav__link--active {
  color: var(--color-accent);
  border-bottom: 2px solid var(--color-accent);
}

/* Hover state */
.nav__link:hover {
  color: var(--color-accent);
}

/* Focus state (accessibility) */
.nav__link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 4px;
}
```

---

## 9. WAYFINDING ENHANCEMENTS

### Contextual Quick Links
Based on the page context, surface related actions:

| Current Page | Suggested Links |
|--------------|-----------------|
| Biology Program | Apply, Visit, Related: Chemistry, Pre-Med |
| Tuition & Aid | Net Price Calculator, Scholarships, FAFSA |
| Campus Life | Housing, Dining, Student Clubs, Durango |
| Future Student | Programs, Visit, Apply, Parent Info |

### Smart Footer
Footer adapts based on persona cookies:
- **Future Student** → Apply, Visit, Parent Resources
- **Current Student** → Canvas, Handshake, Academic Hub
- **Alumni** → Give, Update Info, Career Network

---

## 10. IMPLEMENTATION PRIORITY

### Phase 5 Deliverables (MVP)
| Priority | Item | File |
|----------|------|------|
| 1 | Program Explorer Page | `programs.html` |
| 2 | Enhanced Global Navigation | All pages |
| 3 | Search UI Concept | `index.html` |
| 4 | Sitemap Documentation | This file |
| 5 | Mobile Navigation | CSS updates |

### Future Phases
- Full mega menu implementation
- Search results page
- Individual program pages
- Interactive sitemap visualization

---

## 11. SUCCESS METRICS (Conceptual)

What this architecture enables:
- **Time to task**: Reduced clicks to reach any content
- **Discovery**: Users find programs they didn't know existed
- **Personalization**: Navigation adapts to user type
- **Mobile efficiency**: Core tasks achievable in thumb zone
- **Accessibility**: Keyboard navigation, screen reader friendly

---

*This document defines the structural foundation of SKYRIDGE.*
*All navigation implementations must align with these principles.*

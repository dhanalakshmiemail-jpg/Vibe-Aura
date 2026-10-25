PROJECT NAME: VYBORA
TAGLINE: Your Universe of Entertainment.

========================================================

1. ROLE AND MISSION
========================================================



Act as a Principal Frontend Architect, Senior React and TypeScript
Developer, UI/UX Design Director, Entertainment Product Designer,
Accessibility Engineer, Performance Engineer, and Software Tester.

Your task is to build VYBORA, a premium, visually immersive,
feature-rich entertainment discovery platform.

Combine the reusable architecture and engineering standards of a
production-grade React + Vite + TypeScript application with the
visual experience of a modern entertainment streaming product.

The final application must feel like a professionally designed
entertainment product, not a generic dashboard, basic login page,
college assignment template, or plain CRUD application.

Use the supplied visual references as the quality target:

A cinematic streaming homepage with a dramatic hero image.

Rich, high-quality movie and series artwork.

Multiple horizontal entertainment carousels.

Premium dark backgrounds.

Vibrant purple, violet, pink, and cyan accents.

Large typography and sophisticated spacing.

Modern music discovery cards.

Beautiful navigation, authentication, and detail pages.

Smooth transitions, refined hover effects, and polished interactions.

IMPORTANT:
The visual references define the expected level of quality.
They are not permission to create a basic approximation with a
dark background and a few small cards.

Do not reproduce Netflix, Spotify, or Instagram branding or copy
their exact layouts. Create an original VYBORA visual identity.

The project must combine:

1. Premium entertainment discovery.


2. Rich visual presentation.


3. A substantial content catalog.


4. Useful and working interactions.


5. Reusable frontend architecture.


6. Reliable local development.


7. Beginner-friendly setup and documentation.



========================================================
2. ABSOLUTE PRIORITY: VISUAL QUALITY

The homepage must immediately look like a premium streaming
and entertainment discovery application.

When the user opens VYBORA, they should immediately see:

A distinctive VYBORA logo.

A beautiful, full-width cinematic hero section.

High-quality landscape entertainment artwork.

A featured title and useful information.

Prominent Watch Trailer, Explore Details, and My List actions.

Multiple visually rich content carousels.

Attractive movie and series posters.

A professional navigation bar.

A visually appealing search interface.

Music discovery content.

A consistent and recognizable design language.

Do not make users log in before they can see the product's visual
experience. Allow guests to explore public entertainment content.

The homepage must never be an empty screen, a blank gradient,
a plain login form, or a collection of generic placeholder boxes.

Do not show only five movie cards.

Do not make the entire design depend on an external API key.

Do not use broken poster links, arbitrary unrelated images,
or repetitive generic artwork.

Do not declare the application finished merely because it compiles.

The finished product must be visually evaluated at desktop and
mobile sizes and functionally tested.

========================================================
3. TECHNOLOGY STACK

Use:

React

Vite

TypeScript with strict mode

Material UI

Redux Toolkit

createAsyncThunk

React Router

React Hook Form

Yup

@hookform/resolvers

Native Fetch API

CSS Modules or organized separate CSS files

MUI ThemeProvider

Centralized CSS design tokens

Vitest

React Testing Library

ESLint

Prettier

Lucide React or a suitable icon library

Do not use Axios.

Use React.StrictMode appropriately.

Use native browser APIs when suitable.

Avoid unnecessary dependencies and excessive abstraction.

The application must be frontend-first and independently runnable
without requiring a backend.

Create a clean integration boundary for a future Express backend.

For this frontend-only version, use mock services and in-memory
Redux state.

Do not introduce a database connection or backend implementation
unless explicitly requested as a later extension.

Do not use localStorage or sessionStorage.

Do not store authentication tokens or credentials in browser storage.

========================================================
4. VYBORA BRAND IDENTITY

Create an original VYBORA brand.

Brand concept:
A universe of movies, series, music, and entertainment experiences
that users can explore according to their interests and moods.

Create a distinctive SVG logo combining:

An abstract V-shaped symbol.

A subtle play-button concept.

A cinematic light-beam motif.

Display the VYBORA wordmark beside the symbol.

Use a tasteful violet-to-magenta gradient with a clean wordmark.

The logo must appear on:

Homepage.

Navigation bar.

Login and signup.

Footer.

Browser tab favicon.

Loading and welcome screens where appropriate.

Create:
public/favicon.svg

Update index.html with:

Correct application title.

Favicon reference.

Appropriate metadata.

Theme color.

Browser title:
VYBORA | Your Universe of Entertainment

The application must never have a missing logo or a broken favicon.

========================================================
5. CINEMATIC DESIGN SYSTEM

Build a centralized design system.

Suggested palette:

Midnight background: #08090D
Deep background: #0D1020
Surface: #151827
Elevated surface: #1C2033
Primary violet: #7C3AED
Bright violet: #A855F7
Magenta: #EC4899
Cyan: #22D3EE
Main text: #F8FAFC
Secondary text: #A1A1AA
Subtle border: rgba(255,255,255,0.10)

Use these as starting points, not arbitrary colors repeated across
individual files.

Create centralized CSS variables and a corresponding MUI theme.

Use:

Inter, Manrope, or Outfit typography.

Strong typographic hierarchy.

Cinematic image overlays.

Carefully controlled gradients.

Subtle glass effects.

Soft ambient shadows.

Consistent border radii.

Clear spacing.

Refined hover transitions.

Attractive focused and active states.

Responsive containers.

High-contrast text.

Accessible controls.

Dark mode should be the primary visual experience.

Provide a coordinated light theme as an optional feature.

Light mode must remain visually polished rather than simply
replacing every dark color with white.

Avoid excessive glow, excessive gradients, giant rounded cards
everywhere, emoji-heavy controls, and unnecessary animations.

The result must feel premium and deliberate.

========================================================
6. VISUAL REFERENCE REQUIREMENTS

Treat the following as mandatory visual targets.

A. CINEMATIC STREAMING HOMEPAGE

A large, wide cinematic image should dominate the top section.

The featured content should have:

Large title typography.

High-quality landscape artwork.

Dark gradient overlay.

Short description.

Content metadata.

Rating when available.

Genre tags.

Primary and secondary actions.

B. ENTERTAINMENT CAROUSELS

Display multiple horizontal rows of content.

Each row should have:

A clear section title.

A short descriptive subtitle when appropriate.

Large, attractive posters.

Consistent image ratios.

Smooth horizontal scrolling.

Previous and next controls where suitable.

Polished hover states.

A link to view more content.

C. PREMIUM MUSIC DISCOVERY

Use album artwork, playlist cards, artist cards, and music discovery
sections with a visually rich presentation.

D. AUTHENTICATION

Create a beautiful login experience with a cinematic background
and a refined glassmorphism card.

E. DETAIL PAGES

Use large backdrop artwork, clear information hierarchy,
related content, and elegant navigation.

Do not implement these screens as plain white forms or basic
administrative tables.

========================================================
7. REAL AND ATTRACTIVE ENTERTAINMENT IMAGES

This requirement is extremely important.

The current project has too few movies and unattractive images.
The new implementation must address both problems.

Use valid, relevant entertainment artwork from permitted sources.

Preferred sources include:

TMDB-compatible movie posters and backdrops when configured.

Officially permitted artwork sources.

Properly licensed image sources.

Public demo artwork that is permitted for the intended use.

For movie metadata, prepare an integration with TMDB or another
appropriate entertainment metadata service.

Respect API terms, attribution requirements, image-use conditions,
and rate limits.

Use actual metadata and corresponding artwork paths.

Do not invent image paths from guessed identifiers.

Do not use random generic Unsplash photographs as substitutes
for actual movie posters.

Do not repeatedly reuse the same poster to fill the catalog.

Do not use broken image URLs.

Do not display irrelevant images for the content title.

For each entertainment item, use the appropriate image type:

Portrait poster for movie and series cards.

Landscape backdrop for featured banners.

Square artwork for albums and playlists.

Appropriate thumbnails for trailers or related content.

Implement image handling with:

Lazy loading for off-screen content.

Correct aspect ratios.

Object-fit behavior.

Responsive image sizing.

Appropriate loading placeholders.

Designed fallback artwork.

Error handling for failed image requests.

The image fallback must be visually attractive and must never
break the card layout.

Keep the homepage visually complete when an API key is unavailable.

Use curated local demo data for the initial experience.

Clearly distinguish demo data from live API results.

Never claim that an API has returned live data when the application
is actually using a local fallback dataset.

========================================================
8. LARGE ENTERTAINMENT CATALOG

The application must not feel empty.

Provide at least 40 unique movie and series records in the local
demo catalog, subject to accurate and permitted sample content.

Use a diverse collection across:

Action.

Adventure.

Comedy.

Romance.

Drama.

Science fiction.

Fantasy.

Mystery.

Thriller.

Horror.

Animation.

Family.

International cinema.

Documentaries.

Critically acclaimed films.

Hidden gems.

Popular series.

Do not generate forty copies of a few items.

Each record must have its own:

Stable ID.

Title.

Content type.

Description.

Genre metadata.

Release year when available.

Poster artwork.

Backdrop artwork where available.

Rating only when supported by actual source data.

Optional trailer reference.

Optional additional metadata.

Create these homepage sections:

1. Trending Now


2. Popular Movies


3. Popular Series


4. New Releases


5. Critically Acclaimed


6. Action & Adventure


7. Science Fiction


8. Fantasy Worlds


9. Comedy


10. Romance


11. Mystery & Thriller


12. Horror


13. Animation


14. International Cinema


15. Hidden Gems


16. Documentaries


17. Recommended for You


18. Because You Explored


19. Continue Discovering



Populate each section from the catalog or configured metadata API.

Use reusable carousel components rather than duplicating layouts.

Do not make the homepage extremely long with every item displayed
in one giant grid. Use curated sections and horizontal carousels.

Provide a Browse All page with pagination or efficient incremental
loading for the available catalog.

Do not claim that a local dataset is the entire live global catalog.

When the external metadata API is configured, support additional
results through search and pagination.

When it is not configured, retain a polished demo catalog.

========================================================
9. HOMEPAGE LAYOUT

Build the homepage in this order:

1. Premium navigation bar.


2. Large cinematic featured hero.


3. Trending Now carousel.


4. Popular Movies carousel.


5. Popular Series carousel.


6. Continue Discovering section.


7. Mood-based entertainment section.


8. Music Discovery section.


9. Genre exploration section.


10. Hidden Gems section.


11. Entertainment quiz/challenge promotion.


12. Footer with VYBORA branding.



The hero should use a landscape backdrop that fills the available
hero area.

Apply a left-to-right and bottom-to-top gradient overlay so the
title and description remain readable.

Use restrained animations and transitions.

Make the hero responsive.

Do not allow image loading to cause a blank homepage.

Use a default curated hero image if live content cannot be loaded.

Allow changing featured items through accessible controls.

The homepage must look polished before login.

========================================================
10. NAVIGATION

Create a responsive navigation bar with:

VYBORA logo.

Home.

Movies.

Series.

Music.

Discover.

My Library.

Challenges.

Search.

Profile.

Use React Router.

Implement active route highlighting.

Provide a mobile menu for small screens.

On desktop, maintain generous spacing and a professional layout.

On mobile, prevent navigation items from overflowing.

Guest users may browse public content.

Protected functionality should prompt login when required.

Every navigation item must lead to a working route.

Do not use empty links or buttons that do nothing.

========================================================
11. MOVIE AND SERIES DETAIL PAGES

Create a dedicated details page or polished modal for each item.

Include:

Backdrop image.

Poster.

Title.

Synopsis.

Genre.

Release information.

Runtime when available.

Rating when available.

Cast and crew when available.

Trailer action when a valid permitted trailer exists.

Related content.

Add to My List.

Mark as Watched.

Share action.

Back navigation.

Use actual source data when available.

Do not invent metadata.

If a trailer is unavailable, explain that it is not available
rather than displaying a broken video player.

Related content should be based on genre, content type, or source
metadata rather than random unrelated items.

========================================================
12. MUSIC DISCOVERY

Create a separate premium Music page.

Include:

Featured playlists.

Trending artists.

Popular albums.

New music discovery.

Music by mood.

Music by genre.

Searchable music catalog.

Recently explored music.

Favorite tracks.

Album details.

Provide at least 20 diverse music discovery records in the
local demo catalog, using permitted artwork sources.

Prepare a music metadata integration that can be enabled later.

Use legitimate preview URLs or other permitted playable audio
sources when available.

Create a functional mini-player supporting:

Play.

Pause.

Next.

Previous.

Progress display.

Volume control where supported.

Track title and artist.

Clear unavailable-audio states.

Do not pretend that audio is playing if no playable source exists.

Do not reproduce Spotify branding or claim that a demo catalog
contains the full licensed Spotify music library.

========================================================
13. SEARCH AND FILTERS

Build a functional global search interface.

Users must be able to search:

Movies.

Series.

Genres.

Artists.

Albums.

Playlists.

Provide:

Search input.

Clear button.

Search results.

Content-type filters.

Genre filters.

Sorting when data supports it.

Loading states.

Empty states.

Error states.

Search must work with local demo data even without external APIs.

When configured, integrate supported API search endpoints.

Debounce input where appropriate.

Do not place API requests directly inside presentation components.

========================================================
14. MOOD-BASED DISCOVERY

Create a visually attractive mood selector.

Moods:

Happy.

Relaxed.

Romantic.

Energetic.

Sad.

Focused.

Adventurous.

Curious.

Nostalgic.

Spooky.

Use elegant cards or selectable chips with suitable icons.

When a mood is selected, show suitable content from the catalog.

Use metadata or transparent recommendation rules.

Example headings:

Your Happy Place.

Stories for a Quiet Evening.

Your Romantic Escape.

Adventure Awaits.

Music for Your Mood.

Allow switching moods and exploring results.

========================================================
15. SURPRISE ME

Create a prominent Surprise Me feature.

When clicked:

Select a random eligible entertainment item.

Display its artwork.

Show its title and synopsis.

Show its content type.

Provide a details action.

Provide a Try Another action.

Allow adding it to My List.

Avoid immediate repetition when alternative items exist.

The feature must work without an external API.

========================================================
16. MY LIBRARY

Create a polished personal library.

Allow users to:

Save movies.

Save series.

Save music items.

Remove favorites.

Filter saved items.

Search the library.

Mark items as watched.

View recently explored content.

Use Redux for shared application state.

Because browser storage is prohibited in this architecture,
guest state is in-memory and may reset after a full page refresh.

Document that limitation.

When real authentication and a backend are integrated later,
personal library information should be persisted server-side.

Prevent duplicate favorites.

Provide an attractive empty state and an Explore button.

========================================================
17. QUIZZES AND CHALLENGES

Build an interactive entertainment quiz.

Include categories:

Movies.

Series.

Music.

Animation.

General Entertainment.

Provide at least 30 curated sample questions.

Implement:

Multiple-choice answers.

Answer validation.

Score calculation.

Question progress.

Results.

Restart.

Performance feedback.

Build entertainment challenges such as:

Discover five movies.

Explore three genres.

Save three favorites.

Complete a quiz.

Explore international cinema.

Discover a new series genre.

Track progress using Redux in-memory state.

Do not fabricate activity statistics.

========================================================
18. LOGIN, SIGNUP, AND FORGOT PASSWORD

Create a premium authentication experience.

Use a cinematic split-screen or full-screen background.

The design should use:

VYBORA logo.

Atmospheric artwork.

Elegant glassmorphism card.

Clear typography.

Soft shadows.

Accessible contrast.

Refined form fields.

Purple and magenta accents.

Desktop:

Two-column composition.

Branding and visual content on one side.

Authentication card on the other.

Mobile:

Single-column layout.

Authentication card as the priority.

No horizontal overflow.

Use one persistent authentication layout for Login, Sign Up,
and Forgot Password.

Switch only the content inside the authentication card.

Implement:

Email/User ID selection.

Password visibility toggle.

Yup validation.

React Hook Form.

Clear errors.

Loading state.

Sign Up navigation.

Forgot Password.

Guest browsing.

Provide UI-only social sign-in buttons for Google, LinkedIn,
and GitHub.

Clearly identify social sign-in as a mock experience until
real OAuth/OIDC integration is configured.

Never pretend real OAuth has succeeded.

Use a typed mock authentication service and Redux Toolkit.

Do not store passwords or tokens in browser storage.

Do not implement real security in the frontend.

Production authentication must be enforced by a trusted backend.

========================================================
19. ENTERPRISE FRONTEND ARCHITECTURE

Use React + Vite + TypeScript strict mode.

Use:

MUI.

Redux Toolkit.

React Router.

React Hook Form.

Yup.

Native Fetch API.

CSS Modules or separate CSS files.

Vitest.

React Testing Library.

ESLint.

Prettier.

Use feature-first architecture.

Recommended structure:

VYBORA/
public/
favicon.svg
src/
app/
App.tsx
store.ts
hooks.ts
assets/
config/
environment.ts
constants.ts
config.ts
api.ts
components/
ui/
common/
navigation/
entertainment/
cards/
carousel/
media/
features/
auth/
components/
pages/
slices/
thunks/
selectors/
services/
validation/
types/
entertainment/
components/
pages/
slices/
selectors/
services/
data/
types/
music/
library/
discovery/
quizzes/
challenges/
profile/
settings/
access/
layouts/
AuthLayout/
MainLayout/
routes/
AppRoutes.tsx
ProtectedRoute.tsx
RoutePaths.ts
services/
apiClient.ts
mocks/
mockUsers.ts
mockPermissions.ts
styles/
tokens.css
global.css
theme.ts
monitoring/
logger.ts
sentry.ts
types/
utils/
main.tsx
index.html
package.json
tsconfig.json
vite.config.ts
eslint.config.js
.prettierrc
.env.example
README.md
prompt.md
role.md
docs/
architecture.md

Adapt the structure where necessary.

Do not create meaningless empty files.

Do not create one giant App.tsx containing the entire application.

Keep source files focused and reasonably sized.

========================================================
20. STATE MANAGEMENT

Use Redux Toolkit for shared state.

Implement appropriate slices for:

Authentication.

Entertainment catalog.

Library.

Discovery preferences.

Quiz.

Challenges.

Theme.

Access permissions.

Use:

createSlice.

createAsyncThunk where asynchronous workflows are needed.

Typed Redux hooks.

Memoized selectors where useful.

Keep services separate from components.

Do not make API calls directly in UI components.

Do not put side effects inside reducers.

Avoid duplicating global state in local component state.

Keep transient UI state local when appropriate.

========================================================
21. ROLE-BASED ACCESS CONTROL

Include a lightweight, reusable, configuration-driven RBAC system.

Support:

Super Admin.

Admin.

Owner.

Team Lead.

Employee.

General User.

Use typed role and permission definitions.

Provide helpers such as:

hasPermission().

canAccessRoute().

canViewComponent().

getVisibleNavigationItems().

Use centralized permission definitions.

Build Settings and Access Management screens that demonstrate
how permissions can be configured.

Restrict permission management to authorized roles.

Frontend permissions are for UI behavior only.

A future backend must independently enforce authorization.

Do not let administrative RBAC screens overwhelm the entertainment
experience or turn the homepage into a generic admin dashboard.

========================================================
22. COMMON APPLICATION LAYOUT

Create reusable components for:

AppBar.

Sidebar or navigation.

Footer.

Search.

Profile menu.

Theme toggle.

Loading skeleton.

Error display.

Empty state.

Confirmation dialog.

The entertainment navigation must remain the primary navigation.

Administrative settings should be available from the profile
menu or a suitable settings route.

Use responsive navigation on mobile.

Avoid unnecessary page-wide scrolling.

Prevent horizontal overflow.

========================================================
23. API AND CONFIGURATION ARCHITECTURE

Prepare configurable API boundaries for future integration.

Create:

environment.ts.

constants.ts.

config.ts.

api.ts.

apiClient.ts.

Use Vite environment variables only for non-secret frontend values.

Example:
VITE_API_BASE_URL
VITE_API_TIMEOUT
VITE_APP_NAME
VITE_SENTRY_DSN
VITE_TMDB_API_KEY, only if the selected API's permitted client-side
authentication method is appropriate.

Never expose a private API secret through Vite environment variables.

For APIs requiring a secret, use a future trusted backend proxy.

Do not make live API access mandatory for the initial homepage.

Use mock repositories and curated local data.

Keep the demo experience fully usable without API credentials.

When external API access fails:

Preserve the existing page.

Show useful error feedback.

Retain local content.

Avoid blank screens.

Avoid repeated failing requests.

Use AbortController and appropriate timeout handling.

A network timeout must not automatically log out an authenticated
user.

========================================================
24. THEMING AND RESPONSIVE DESIGN

Create centralized design tokens and MUI themes.

Support:

Dark theme.

Light theme.

Typography.

Colors.

Spacing.

Border radii.

Shadows.

Glass effects.

Breakpoints.

Use CSS variables to keep design tokens configurable.

Support mobile, tablet, laptop, desktop, and large displays.

Requirements:

No horizontal overflow.

Readable typography.

Responsive carousels.

Appropriate touch targets.

Proper image scaling.

Consistent spacing.

Accessible focus indicators.

Reduced-motion support.

Do not assume every desktop has the same screen size.

Keep the design attractive on both narrow mobile screens and
wide desktop displays.

========================================================
25. PERFORMANCE

Use practical performance optimizations.

Include:

Code splitting.

React.lazy where suitable.

Suspense.

Lazy image loading.

Efficient Redux selectors.

Stable list keys.

Request cancellation.

Error boundaries.

Appropriate memoization.

Reasonable bundle size.

Cleanup of subscriptions and requests.

Do not apply memoization everywhere without justification.

Do not introduce artificial delays using setTimeout.

Do not use React StrictMode as a security or rate-limiting mechanism.

Avoid unnecessary re-renders.

The homepage should remain responsive when many entertainment cards
are present.

========================================================
26. ACCESSIBILITY

Use semantic HTML.

Ensure:

Keyboard-accessible controls.

Accessible form labels.

Visible focus states.

Suitable color contrast.

Alternative text for images.

Accessible dialogs.

Keyboard-operable carousels where practical.

Reduced-motion support.

Screen-reader-friendly errors.

Never rely only on color to communicate errors or permissions.

========================================================
27. TESTING AND QUALITY CONTROL

Use Vitest and React Testing Library.

Test:

Homepage renders without API credentials.

Logo and navigation render.

Entertainment cards display correctly.

Search returns local results.

Favorites can be added and removed.

Mood discovery works.

Surprise Me works.

Quiz scoring works.

Login validation works.

Mock login success/failure works.

Protected routes work.

RBAC permissions work.

Theme switching works.

Image failures use fallbacks.

API errors do not create a blank screen.

Run:

TypeScript checks.

ESLint.

Tests.

Production build.

Do not claim a test or build passed unless it was actually executed.

========================================================
28. NO BLANK SCREEN: MANDATORY

The previous implementation showed a blank first page.

Prevent this problem.

Verify:

1. Vite entry point.


2. React root mounting.


3. App imports.


4. CSS imports.


5. React Router configuration.


6. TypeScript imports.


7. MUI ThemeProvider.


8. Redux Provider.


9. Error boundaries.


10. Local catalog loading.


11. Image fallbacks.


12. Missing API configuration.


13. Environment variable handling.


14. npm scripts.


15. Browser console.


16. Development terminal.


17. Production build.



The application must render its local demo homepage even when:

No API key is configured.

The internet is unavailable.

An external image fails.

A search request fails.

An optional integration is disabled.

Provide a safe fallback for failed requests.

Do not make the entire app dependent on a single API request.

Do not finish while a known fatal error remains unresolved.

========================================================
29. PROJECT DELIVERY

Build the actual project.

Do not deliver only a conceptual architecture.

If filesystem access is available:

Create the real source files.

Install compatible dependencies where possible.

Run the required checks.

Fix discovered issues.

Package the completed project into a ZIP.

If filesystem access is unavailable:

Provide the complete source files in organized implementation
stages with exact file names.

Do not pretend that a ZIP was created.

Clearly state which checks have not been run.

Include:

Complete React application.

TypeScript types.

Styles and themes.

Local entertainment datasets.

Logo and favicon.

Routing.

Redux store and slices.

Mock authentication.

Permission configuration.

API integration boundaries.

Tests.

README.md.

.env.example.

Installation instructions.

Troubleshooting instructions.

Document the difference between:

Working local demo features.

Mock authentication.

Optional live API integration.

Future backend requirements.

========================================================
30. EXACT EXPECTED VISUAL RESULT

The finished VYBORA homepage must look like a premium entertainment
discovery service.

At first load, show:

A. A beautiful cinematic hero banner with relevant artwork.

B. A large, clearly readable featured title.

C. Elegant Watch Trailer, Explore Details, and My List buttons.

D. A professional top navigation bar with a visible VYBORA logo.

E. Multiple horizontal movie and series carousels.

F. A substantial, diverse catalog with relevant posters.

G. A dedicated music discovery section with album artwork.

H. Attractive genre and mood exploration sections.

I. A distinctive Surprise Me experience.

J. A professional footer.

K. Responsive layouts for mobile and desktop.

L. Working search and library functionality.

M. Polished login and registration screens.

N. Smooth hover effects and transitions.

O. Consistent typography, spacing, colors, and iconography.

The homepage must be visually complete before the user signs in.

The visual design must not look like a generic admin dashboard.

The entertainment content must not be limited to a handful of cards.

The first screen must create a strong impression through its
artwork, composition, typography, and visual hierarchy.

========================================================
31. FINAL ACCEPTANCE CRITERIA

The project is accepted only when:

The app starts using Vite.

No backend is required for the demo.

The homepage is attractive and immediately populated.

The VYBORA logo and favicon are visible.

At least 40 unique local movie/series records are available.

At least 20 music discovery records are available.

Movie cards use relevant poster artwork.

The hero uses landscape artwork.

Failed images have designed fallbacks.

The homepage has multiple carousels.

Search works with local content.

Details pages or modals work.

Favorites work.

Mood discovery works.

Surprise Me works.

Quiz functionality works.

Challenges track actual interactions.

Login and signup forms validate correctly.

Mock authentication is clearly identified.

RBAC and protected routes work.

Settings and permission management work.

Theme switching works.

Responsive navigation works.

No localStorage or sessionStorage is used.

No Axios is used.

No secret credentials are exposed.

TypeScript, lint, tests, and production build are checked.

Documentation explains setup and limitations.

No known fatal blank-screen error remains.

FINAL DIRECTIVE:

Build VYBORA as a visually exceptional entertainment platform
using enterprise-quality React + Vite + TypeScript architecture.

Prioritize the actual user experience over superficial code volume.

Do not simplify the homepage.

Do not replace entertainment artwork with generic cards.

Do not stop after the login screen.

Do not invent API results.

Do not claim untested features are working.

Inspect, implement, test, and refine the complete application.

The guiding principle is:

PREMIUM VISUALS.
RICH ENTERTAINMENT.
REAL INTERACTIONS.
REUSABLE ARCHITECTURE.
RELIABLE EXECUTION.

Give zip file and implementation procedure
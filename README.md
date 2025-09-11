# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Verifarma Challenge

A minimal front-end application developed as part of a challenge for Verifarma.  
This README explains the challenge, planning, design process, technology choices, and setup.

## Challenge
The original task was to build a front-end application for a videoclub, trying to emulate the streaming services' style.

## Planning & Workflow
To approach the project efficiently, I organized the work into an **epic** with smaller **tickets**:

- **Phase 1:** Project planning
For this phase, an epic was created: FERCRUZ-327 "[T-INTERVIEW] Verifarma Technical Interview".
That epic consisted in 13 child items, each one belonging to the next phase.
- **Phase 2:** Project design
In this phase, and as part of tickets FERCRUZ-328 and FERCRUZ-329 (often referred to in the commits as F-<number> for simplicity), I scaffolded the project using Figma.
The reason behind this process was to understand what the possible UX flow could be, along with its constraints, and to enhance the feature planning.
- **Phase 3:** Project setup (Nuxt, Tailwind, DaisyUI).
I chose `Nuxt` because it's a technology I'm *not familiar with*, so actively learning and developing in unknown territory while still being faithful to the deadline was a huge and interesting challenge. That being said, in order to simplify the styling process, I chose `tailwind` and its plugin `DaisyUI`.
- **Phase 4:** Navigation.  
- **Phase 5:** Layouts and Header/Footer.  
- **Phase 3:** Core UI components (Card, Hero section, Movie details view, Search Page).  
- **Phase 4:** Polishing styles, responsiveness, and accessibility and fixing critical errors.  

This workflow helped me stay focused and deliver a working MVP within the deadline.

## Design

All UI design and mockups were created in **Figma**:
[Figma file link](https://www.figma.com/design/KSJs01gYGKsga7X51FnvES/Verifarma-challenge---Fer-Cruz?node-id=0-1&t=6XtvV0NphahHN0nO-1)

Design considerations included:  
- Unique branding and color palette.  
- Mobile-first, responsive layout.  
- Component modularity for reuse and scalability.  

## Tech Stack & Choices
- **[Nuxt 3](https://nuxt.com/):** Selected to showcase adaptability and fast learning in a new framework.  
- **[Tailwind CSS](https://tailwindcss.com/):** Utility-first CSS framework for rapid, responsive styling.  
- **[DaisyUI](https://daisyui.com/):** Extended Tailwind with pre-styled, accessible components.  
- **[auth-utils]:** Nuxt's auth utilities. Used to mock the login logic, considering I couldn't develop an API on .NET or Next.js on time.
- **[zod](https://zod.dev/):** To work along with `auth-utils`.
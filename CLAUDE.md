# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun dev` - Start development server on localhost:3000
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint with Next.js TypeScript configuration

## Architecture Overview

### Framework & Structure
- Next.js 16 with App Router architecture
- TypeScript throughout the codebase
- Tailwind CSS 4 for styling with modern syntax (`bg-black/30` instead of `bg-opacity-30`)
- Bun as the JavaScript runtime and package manager

### Key Architectural Patterns

**Layout System**: The application uses a nested layout pattern:
- `app/layout.tsx` - Root layout with NavbarProvider context and global styles
- `app/components/layouts/MainLayout.tsx` - Main layout with responsive navbar and mobile menu
- Layout handles responsive design with collapsible sidebar navigation

**Navigation State Management**: 
- `app/contexts/NavbarContext.tsx` provides global navbar state (open/closed)
- Used by navigation components to coordinate responsive behavior
- Pattern: Context provider wraps the entire app in root layout

**Data Layer**:
- GraphQL client configured to connect to Hygraph CMS at `lib/graphql/client.ts`
- Queries defined in `lib/graphql/queries.ts` for projects, blog posts, and content
- Data fetching happens in page components using the GraphQL client

### Component Organization

**Page Components**: Located in `app/[route]/page.tsx` following App Router conventions
- Each route has its own directory with a `page.tsx` file
- Dynamic routes use bracket notation (e.g., `blog/[slug]/page.tsx`)

**Shared Components**: Located in `app/components/`
- Organized by feature: `blog/`, `projects/`, `layouts/`, `utils/`
- All components are TypeScript with proper prop typing
- Use modern React patterns (hooks, functional components)

**Styling Approach**:
- Tailwind CSS classes applied directly to components
- Responsive design patterns using Tailwind breakpoints
- Dark mode support with `dark:` prefixes
- Animation with Framer Motion for interactive elements

### Image Handling
Next.js Image component configured for multiple remote domains:
- GitHub user content, Cloudinary, GraphCMS/Hygraph assets
- Proper optimization and responsive loading

### Key Dependencies
- `framer-motion` - Animations and transitions
- `react-typed` - Typing animation effects
- `react-hook-form` - Form handling
- `react-hot-toast` - Notifications
- `graphql-request` - GraphQL client for CMS data
- `swiper` - Touch sliders/carousels

## Important Development Notes

When working with this codebase:
- Use modern Tailwind opacity syntax (`bg-black/30` not `bg-opacity-30`)
- All components are client-side rendered where needed (`'use client'` directive)
- Navigation state is managed through React Context, not external state management
- GraphQL queries are centralized in the `lib/graphql/` directory
- Follow the established TypeScript patterns for component props and interfaces
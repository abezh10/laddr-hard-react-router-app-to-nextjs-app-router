# React Router App to Next.js App Router

- Category: Migrate
- Topic: Framework Migration
- Difficulty: Hard

## Overview
This sample repository is set up for a hard migrate exercise in the framework migration track. The starter code is intentionally lightweight: it gives Sandpack something meaningful to render or inspect, but it still leaves the real evaluation work in place so a candidate has to move the implementation to the target framework or version while preserving behavior.

## Exercise Summary
Move a customer account area from a React SPA into the Next.js App Router while preserving navigation, authenticated rendering, and user flows in an idiomatic App Router structure.

## Starter State
The current scaffold keeps the requested folder layout intact and includes small task-adjacent starter implementations. Frontend files render simple placeholder UI, while routes, services, hooks, utilities, and data files expose minimal sample data or placeholder behavior without solving the exercise for the learner.

## Repo Files
- `legacy-spa/src/pages/AccountPage.tsx`
- `next-app/app/account/page.tsx`
- `next-app/app/billing/page.tsx`
- `next-app/components/account/AccountShell.tsx`
- `next-app/lib/auth.ts`
- `package.json`

## Likely Change Areas
- `legacy-spa/src/pages`
- `next-app/app/account`
- `next-app/app/billing`
- `next-app/components/account`
- `next-app/lib`

## Sandbox Notes
These files are intentionally small and preview-friendly. They should render a lightweight surface where that makes sense, while still leaving the real build, debug, refactor, security, or migration work undone.

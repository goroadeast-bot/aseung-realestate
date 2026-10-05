# 2026-10-05 Listing Ranking Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use `- [ ]` syntax for tracking.

**Goal:** Refresh the modal with current 5일장 and 제주교차로 ranked listings and publish the verified update.

**Architecture:** Keep listing data in `js/script.js` and local thumbnails in `images/listings/`. Preserve the modal renderer and its empty states; bump both asset cache versions in `index.html`.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, GitHub Pages.

**Spec:** `.serena/memories/listing-ranking-modal-update.md`

## Global Constraints

- Re-read current public source rankings and verify every chosen detail listing by ID and response content.
- Match each modal card’s local photo to the corresponding source listing; keep a local fallback when no photo exists.
- Do not stage or change user data in `.agents/`.
- “배포” authorizes the existing main-branch commit, push, and Pages verification workflow.

## Review Focus

- Ranking order may change independently for each property type; use today’s displayed order.
- Oiljang can return a short not-found page with HTTP 200; check content and ID.
- KCR rate-limits bursts; request details sequentially and back off if needed.
- Preserve the modal’s empty-state copy when no current presale listings exist.
- Confirm cache-busted assets and representative modal links are live after deployment.

### Task 1: Collect and validate rankings

**Files:** temporary capture only

- [x] Capture current category rankings from both public profiles.
- [x] Verify every selected detail URL and collect each listing’s title and photo.

### Task 2: Update the modal and publish

**Files:** `js/script.js`, `index.html`, `images/listings/`, `docs/WORK_LOG.md`, this plan

- [x] Refresh the specialty, featured, and hero modal arrays and corresponding thumbnails.
- [x] Bump cache versions; check JavaScript syntax, every listing URL, local photo paths and signatures, and the diff.
- [ ] Record findings and deployment status; commit and push only intended files on `main`.
- [ ] Confirm the latest Pages run succeeds and the live page serves the updated assets and representative listing links.

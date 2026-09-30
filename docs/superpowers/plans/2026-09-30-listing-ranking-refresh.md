# 2026-09-30 Listing Ranking Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use `- [x]` syntax for tracking.

**Goal:** Refresh modal listing rankings from the latest Oiljang and KCR profile results and deploy the verified update.

**Architecture:** Keep listing arrays in `js/script.js`, local thumbnails in `images/listings/`, and cache versions in `index.html`. Preserve the existing modal behavior and show empty-state text when both sources have no current listings.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, GitHub Pages.

**Spec:** `.serena/memories/listing-ranking-modal-update.md`

## Global Constraints

- Read current source-profile ranks and verify every selected detail URL; do not reuse last run's ranking IDs without checking.
- Match local images to the selected listing ID and source photo.
- Keep user data in `.agents/` out of commits.
- Update the JavaScript cache version when listing data changes.

## Review Focus

- Rank drift: preserve each source profile's current displayed order for its category.
- Expired listing IDs: inspect response content and exact listing ID, not HTTP status alone.
- Thumbnail mismatch or missing images: check source title/photo pairing and every local path.
- Empty categories: retain a visible empty-state message when both sources have no current listings.
- Publish drift: verify Pages workflow and the live modal after pushing.

---

### Task 1: Refresh source data and thumbnails

**Files:** `js/script.js`, `images/listings/`

- [x] Capture current top results and details from relevant Oiljang and KCR category filters.
- [x] Verify each selected listing URL and fetch matching source thumbnails for changed items.
- [x] Update specialty, featured, and hero arrays in `js/script.js`; keep empty states for categories with no current offers.

### Task 2: Validate and publish

**Files:** `index.html`, `docs/WORK_LOG.md`, this plan

- [x] Bump cache versions; verify syntax, links, local image references, and clean diff.
- [x] Record the dated changes and deployment evidence in `docs/WORK_LOG.md`.
- [x] Commit and push only intended files on `main`.
- [x] Confirm the latest Pages workflow succeeds and verify live modal cards and links.

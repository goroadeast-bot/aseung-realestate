# Listing Ranking Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refresh listing modal rankings, details, links, and thumbnails from the current Oiljang and KCR agency profiles, then publish the verified update.

**Architecture:** Keep listing data in the existing `LISTING_DATA` arrays in `js/script.js` and store downloaded thumbnails under `images/listings/`. Preserve the existing modal and cache-busting flow, adding a clear empty state only where both sources have no current listings.

**Tech Stack:** Static HTML, CSS, vanilla JavaScript, GitHub Pages.

**Spec:** `.serena/memories/listing-ranking-modal-update.md`

## Global Constraints

- Use current source-profile ranking and detail IDs; do not infer listings that are absent from both sources.
- Keep each thumbnail matched to its listing and stored locally under `images/listings/`.
- Update the `js/script.js` cache-busting version in `index.html`.
- Do not stage or modify the pre-existing untracked `.agents/` user data.

## Review Focus

- Expired detail IDs or source error pages: directly request each final modal URL and inspect page content.
- Rank drift: compare each category's order to the current source profile.
- Thumbnail mismatch: inspect the source image URL and downloaded image type for every changed card.
- Empty categories: show an explicit no-listings message when neither source has current offers.
- Publish drift: check GitHub Pages Actions and the live cache-busting URL after push.

---

### Task 1: Refresh source-backed listing data

**Files:**
- Modify: `js/script.js`
- Add: current thumbnails under `images/listings/`

- [x] Verify current per-category rankings and detail IDs from both public source profiles.
- [x] Update affected Oiljang/KCR modal arrays and use source-matched local thumbnails.
- [x] Show an empty state for categories with zero current source listings.

### Task 2: Verify and publish

**Files:**
- Modify: `index.html`
- Modify: `docs/WORK_LOG.md`

- [x] Directly verify each final listing URL, rejecting short Oiljang error pages and KCR not-found pages.
- [x] Update the cache version and review the exact tracked diff.
- [ ] Commit/push only intended files.
- [ ] Verify the Pages workflow and live script version after deployment.

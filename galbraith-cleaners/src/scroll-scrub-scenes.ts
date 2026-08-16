/**
 * Galbraith Professional Cleaners — the scroll journey.
 *
 * ONE continuous 15s film, cut into four consecutive frame-exact segments, so
 * the chapters read over a single unbroken camera move: the shop at night, the
 * rail of finished garments, a dress emerging from the dark, the finished piece.
 * Every poster is the first frame of the encoded clip beside it.
 *
 * Keep this array a module constant.
 */
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#d8402f",
  background: "#071710",
  ink: "#f3ede1",
  muted: "#cbc6b8",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "A small shop on East Galbraith Road in Deer Park, across from Dillonvale. People find it the same way they always have: somebody they trust tells them to go.",
    clip: "/assets/world/scene-01.mp4",
    id: "shop",
    kicker: "Deer Park, Cincinnati",
    label: "The shop",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.jpg",
    poster: "/assets/world/scene-01-poster.jpg",
    scroll: 2.2,
    tags: ["Family run", "Neighborhood trade"],
    title: "The cleaner your neighbors name first",
  },
  {
    body: "Suits, shirts, dresses, coats, comforters and alterations move through the same pair of hands every day, and come back pressed the way they should be.",
    clip: "/assets/world/scene-02.mp4",
    id: "work",
    kicker: "The work",
    label: "The work",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    mobilePoster: "/assets/world/scene-02-mobile-poster.jpg",
    poster: "/assets/world/scene-02-poster.jpg",
    scroll: 2.2,
    tags: ["Dry cleaning", "Shirt laundry", "Alterations"],
    title: "Careful work, done in house",
  },
  {
    body: "A dress kept in a basement for twenty five years, stained in places nobody could explain. The honest answer first: I cannot promise anything, but I will let you know either way.",
    clip: "/assets/world/scene-03.mp4",
    id: "dress",
    kicker: "One garment",
    label: "The dress",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    mobilePoster: "/assets/world/scene-03-mobile-poster.jpg",
    poster: "/assets/world/scene-03-poster.jpg",
    scroll: 2.4,
    tags: ["Stain work", "Restoration"],
    title: "Twenty five years in a basement",
  },
  {
    body: "It came back looking like new. That is the whole pitch, and it is why the recommendations keep coming from people who have never worked here.",
    clip: "/assets/world/scene-04.mp4",
    id: "result",
    kicker: "The result",
    label: "The result",
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    mobilePoster: "/assets/world/scene-04-mobile-poster.jpg",
    poster: "/assets/world/scene-04-poster.jpg",
    scroll: 2.4,
    tags: ["Bring it in", "(513) 793-8300"],
    title: "Back looking like new",
  },
];

import "@testing-library/jest-dom/vitest";
import { TextDecoder, TextEncoder } from "util";

// React Router v7 relies on these Web APIs, which jsdom does not provide.
if (typeof globalThis.TextEncoder === "undefined") {
  globalThis.TextEncoder = TextEncoder;
}
if (typeof globalThis.TextDecoder === "undefined") {
  globalThis.TextDecoder = TextDecoder;
}

// jsdom implements window.scrollTo only as a "not implemented" stub that logs
// a console error. The app's back-to-top button uses it, so provide a no-op.
if (typeof window !== "undefined") {
  window.scrollTo = () => {};
}

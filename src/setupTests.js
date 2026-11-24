import "@testing-library/jest-dom/vitest";
import { TextDecoder, TextEncoder } from "util";

// React Router v7 relies on these Web APIs, which jsdom does not provide.
if (typeof globalThis.TextEncoder === "undefined") {
  globalThis.TextEncoder = TextEncoder;
}
if (typeof globalThis.TextDecoder === "undefined") {
  globalThis.TextDecoder = TextDecoder;
}

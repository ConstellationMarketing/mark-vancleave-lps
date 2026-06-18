import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FrameTest } from "./screens/FrameTest/FrameTest";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FrameTest />
  </StrictMode>,
);

import { expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import App from "./App.jsx";

test('smoke tests', async function () {
  render(<App />)
});

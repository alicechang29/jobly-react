import { describe, expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Navigation from "./Navigation.jsx";


describe("smoke tests", function () {

  test('renders', function () {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
  });

});
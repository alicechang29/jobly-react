import { describe, expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import JobCard from "./JobCard.jsx";

describe("smoke tests", function () {

  test('renders', function () {
    render(<JobCard />);
  });

});
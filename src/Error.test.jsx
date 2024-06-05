import { describe, expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import Error from "./Error.jsx";

describe("smoke tests", function () {

  test('renders', function () {
    render(<Error />);
  });

});
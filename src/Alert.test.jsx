import { describe, expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import Alert from "./Alert.jsx";

describe("smoke tests", function () {

  test('renders', function () {
    render(<Alert />);
  });

});
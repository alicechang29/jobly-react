import { describe, expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import CompanyCard from "./CompanyCard.jsx";

describe("smoke tests", function () {

  test('renders', function () {
    render(<CompanyCard />);
  });

});
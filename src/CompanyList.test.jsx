import { expect, test, vi, beforeAll, afterEach, afterAll } from "vitest";

import { render } from "@testing-library/react";
import CompanyList from "./CompanyList.jsx";

describe("smoke tests", function () {

  test('renders', function () {
    render(<CompanyList />);
  });

});
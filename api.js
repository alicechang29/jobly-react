const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static token = "";

  static async request(endpoint, data = {}, method = "GET") {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${JoblyApi.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes
  /****************************************************************** AUTH */

  /**
   * Authenticate user by username and password
   * returns: token
   */
  static async authenticateUser({ username, password }) {
    const res = await this.request(`auth/token`, { username, password }, "POST");
    this.token = res.token;
    // return res.token;
  }

  /** Logouts useer
   */
  static logoutUser() {
    this.token = null;
  }

  /**
   * Register user by { username, password, firstName, lastName, email }
   * returns: token
   */
  static async registerUser(
    { username, password, firstName, lastName, email }
  ) {
    const res = await this.request(
      `auth/register`,
      { username, password, firstName, lastName, email },
      "POST"
    );

    this.token = res.token;
    // return res.token;
  }

  /****************************************************************** AUTH */

  /**
   * Authenticate user by username and password
   * returns: token
   */
  static async getUserData( username ) {
    const res = await this.request(`users/${username}`);
    console.log("getUserData", res.user);
    return res.user;
  }

  /****************************************************************** COMPANY */

  /** Get details on a company by handle.
   * company -> { handle, name, description, numEmployees, logoUrl, jobs }
   * where jobs is [{ id, title, salary, equity }, ...]
  */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies
   *
   * returns:
   * [ { handle, name, description, numEmployees, logoUrl }, ...]
  */

  static async getCompanies() {
    const res = await this.request(`companies/`);
    return res.companies;
  }


  /** Get companies by search term
   *
   * term: "apple"
   *
   * returns all companies with name partially matching the term (case-insensitive)
   * [ { handle, name, description, numEmployees, logoUrl }, ...]
  */

  static async getCompaniesBySearch(term) {
    const res = await this.request(`companies/`, { nameLike: term }, "GET");
    return res.companies;
  }

  /******************************************************************    JOBS */

  /** Get all jobs
   *
   * returns:
   * [ { id, title, salary, equity, companyHandle, companyName }, ...]
  */

  static async getJobs() {
    const res = await this.request(`jobs/`);
    return res.jobs;
  }

  /** Get jobs by search term
   *
   * term: "apple"
   *
   * returns all jobs with titles partially matching the term (case-insensitive)
   * [ { id, title, salary, equity, companyHandle, companyName }, ...]
  */

  static async getJobsBySearch(term) {
    const res = await this.request(`jobs/`, { title: term }, "GET");

    return res.jobs;
  }
}

export default JoblyApi;

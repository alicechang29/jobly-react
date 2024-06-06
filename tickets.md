1. Update all docstrings to include errors

2. update jobs -> jobsData for all states

3. Should not hard code 404 in our error messages

4. RoutesList - fix "*" for Navigate to - DONE

5. JobCard.jsx - need to pass in company Name instead of companyHandle

6. JobList.jsx - if search term is empty, set back to all.jobs

7. double check what's being rendered for CompanyCard.jsx after getting data

8. Make sure the default nulls for the cards are being used properly

9. Add key in Error Component

10. Add Loader comp
    - No need to wrap another div when returning Loader component with that comp's className

11. in CompanyDetail
    - Should there be optional chaining in the return statement? Any better ways?

12. Make a fetchJobsData combined function for Joblist for duplicate code

13. Can make getJobs in JoblyApi class to accept a search term. Same for getCompanies. This might help with ticket #12 as well

14. Check that success and errors display in Alert component

# LEARNING
For search forms, can keep the state of the input and not clear it out

Added handle for useEffect dependency. This allows for rerender for any handle change
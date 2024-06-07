1. TODO: Update all docstrings to include errors

2. update jobs -> jobsData for all states -- DONE

3. Should not hard code 404 in our error messages -- DONE

4. RoutesList - fix "*" for Navigate to - DONE

5. JobCard.jsx - need to pass in company Name instead of companyHandle -- DONE

6. JobList.jsx - if search term is empty, set back to all.jobs -- DONE

7. double check what's being rendered for CompanyCard.jsx after getting data -- DONE

8. Make sure the default nulls for the cards are being used properly -- DONE

9. TODO: Add key in Error Component

10. TODO:  Add Loader comp
    - No need to wrap another div when returning Loader component with that comp's className

11. in CompanyDetail
    - Should there be optional chaining in the return statement? Any better ways?

12. Make a fetchJobsData combined function for Joblist for duplicate code

13. Can make getJobs in JoblyApi class to accept a search term. Same for getCompanies. This might help with ticket #12 as well

14. Check that success and errors display in Alert component

15. Figma - Update with errors

16. Can we use onClick and to props for NavLink?

17. Create a more secure Navigation Comp.
    Check the token rather than the username and fName -- DONE

18. app - handle user registration, pass to registration form -- DONE

19. RoutesList - do token checks -- DONE

20. TODO:  Trim data in forms

21. useContext is not updating the firstName (app.jsx) -- DONE

22. should not initialize a fetch request when login page is rendered -- DONE

23. Keeping the token in api.js is much better!
    - Keep the token in api.js makes it hold the token resposibility only in the api. App doesn't need to know about it at all!

# LEARNING
For search forms, can keep the state of the input and not clear it out

Added handle for useEffect dependency. This allows for rerender for any handle change

When dealing with errors, want to put in place where best equipped to deal with error
- if error is UI, catch it here
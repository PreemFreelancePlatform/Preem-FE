
# MVP Features that are completed are marked by ✓


## login-signup stuff 
 1. User can signup/create an account as either a `freelancer` or a 
 `client` via email and password. ✓
    
 2. User can recover password via answering secret questions.
  upon answering them correctly, they will be sent an email containing a temporary password ✓
    
## Freelancer dashboard 
 1. Authenticated `freelancer` has home tab where:
    - freelancer can track progress via a widget on dashboard ✓
    - freelancer can see the jobs he has applied for ✓
    - freelancer has a calender widget looking at all scheduled todos mon-sun ✓
    - freelancer can apply to get more tags and displays what tags they currently have ✓

 2. Authenticated `freelancer` has jobBoard tab where: ✓
    - jobs posted by clients can be viewed sorted and filtered to find job best suited for me ✓
    - freelancer can apply to jobs. throw error if freelancer already applied. ✓

  3. Authenticated `freelancer` has messaging tab where: 
     - can send and recieve messages via long polling when this tab is active (will implement websockets at a later time)
     - can send job offers to freelancers

  4. Authenticated `freelancer` has work tab where: 
    - can see all active and completed jobs
    - can see all contract offers
    - can upload progress of specific job for client
    

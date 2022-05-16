## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
## https://miro.com/welcomeonboard/eU9iYm1kcmpKR1F5R2ZOSU9aY09sRVp6U2hka3hrSk8yVmJWU0hwdk95SHF5OGRIemZUZGNCZHdrbUZLcGt2RXwzNDU4NzY0NTIzOTgzNTQ0MzM5?share_link_id=906298849321
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
## homepage: Login button, create button place section or div for all user input to go  
## auth page two forms for sign in and sign up, two inputs for each
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
## tracking user input, email and if they are logged in or not, tracking the create button. 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?** 
## form event listener submit 
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
## create wire frame 
## login to supabase and create table or new project to store data 
## link supabase script to HTML and key/url  and client to fetch utils.js 
## create HTML elements
## ACP!
## set login button event listener to open new page for auth
## add getUser function in fetch utils 
## add async signUpUser function to fetch utils
## ACP!
## create event listener for sign up form with submit and new FormData in apps js
## ACP!
## add async signInUser function to fetch utils
## create event listener for sign in button in app js
## ACP!
## create redirectIfLogged in function in fetch utils call in app js
## create export checkAuth function in fetch utils 
## create export logout function in fetch utils
## ACP!
## create new folder for the with js page and html page 
## set up HTML make sure to use script for supabase
## add HTML for form, button and three inputs also add <a> </a>home button to go back to home page
## import check Auth and logOut function to new create page js
## ACP!
## event listener in js of new page for submitting the new post to bulletin




## figure out how to display the posts on the home page (onload)
## figure out how to change the login button once logged in 
## figure out how to display user input...(creating elements?)
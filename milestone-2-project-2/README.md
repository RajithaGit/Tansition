# Intro

Create a blog that lets you create, modify, delete, and view blog posts.

- [Client](#Client)

  - [App](#App)
  - [Navbar](#Navbar)
  - [Modal](#Modal)
  - [Post](#Postp)

- [Server](#Server)
  - [GET](#GET)
  - [POST](#POST)
  - [PUT](#PUT)
  - [DELETE](#DELETE)
  - [Database](#Database)

# Client

The client is built using react. There are four main components that need to be built.

```
<App />
<Navbar />
<Modal />
<Post />
```

## App

### Props

None

### State

`<App/ >` should hold state for three reasons:

1. Showing the modal - boolean
2. Blog posts - array
3. The id of the blog post to modify - number

### What it should render

- Should always render `<NavBar />`
- `<App/ >` should only render the blog posts through the component `<Post />` when we do not show `<Modal />`.

### What it should do

`<App/ >` should use `useEffect()` to fetch blog posts on mount and when the component updates. We will utilize `showing the modal` as our strategy to trigger re-renders when a blog is added or modified.

## Navbar

`<Navbar />` should contain a title of `My Blog` and a button to add a new blog post.

### Props

The props that `<Navbar />` will need to accept are the setState handlers for showing the modal and the setState handler for setting the id of the blog post to modify.

### State

It will not hold state

### What it should render

- Title of the blog to the left of the navbar
- Button to the right side

### What it should do

- onClick handler to show the modal and set the id of the blog post to modify as `null`. This is important as we will be using the `modifyId` as our strategy to differentiate between PUT & POST calls in `<Modal />`

## Modal

Modal will either add a new blog post to the database or modify an existing blog post. It relies on the modifying blog post id to determine which operation to make.

### Props

The props that `<Modal />` will need to accept is the setState handler for showing the modal and the modifying blog id.

### State

`<Modal />` should hold state for three reasons:

1. What the header of the new blog post will be
2. What the text of the new blog post will be
3. What message the client should render upon completion of a fetch call

### What it should do

1. onChange handler to update the header and text of the new blog post
2. onClick handler to perform either a POST or PUT call for the submit button.
   - This handler should make PUT calls is there is a blog id to modify.
   - Otherwise we should perform a POST request.
   - It should handle submitting the header, text, and id (id only if performing a PUT request).
   - It should set the message that's returned from the fetch call
3. An exit button to close the modal.

### What it should render

- A header describing the operation to make (Make a new post or Modify an existing post)
- A button to exit the modal
- Two form elements to capture the new title and text of the blog post
- A submit button to submit the new data to the database.
- It should render the message returned from the fetch call if it exists

## Post

The blog post

### Props

Post should accept the blog post object, the setState handler for setting the id of the blog post to modify, and the setState handler to show the modal.

### State

It does not hold state

### What it should do

1. onClick handler to make a fetch call to delete the blog post.
   - Uses the id of the blog post to delete the blog post from the database
   - Console logs the message returned from the fetch call if it exists
2. onClick handler that will set the id of the blog post that will be modified and show the modal.

### What it should render

1. Header of the blog post
2. Text of the blog post
3. ID of the blog post
4. Delete button
5. Modify button

# Server

Your express server should be able to handle **GET, POST, PUT, and DELETE** requests. The naming of the endpoints is up to you, as long as the endpoint is prefixed with `/api/`.

## GET

GET calls should return to the client a status code and the `posts` array from the database.

## POST

POST calls should create a new blog object in the database. The new blog object must contain an id, header, and text. The header and text should be received from the user through the client. The id of the newly created blog should be derived from the database's `idCounter`. More on that in the database section.

POST calls should return a status code and a message upon completion of the operation.

## PUT

PUT calls should modify an existing blog. We will need the blog id, new header, and new text to make the modification.
PUT calls should return a status code and a message upon completion of the operation.

## DELETE

DELETE calls should delete an existing blog. We will need the blog id to perform the operation.

DELETE calls should return a status code and a message upon completion of the operation.

## Database

Your server should use the `fs` apis to read and write to the json file at `src/server/controller/data.json`. This json file will serve as your database.

The schema of the database should look be:

```
{
  "idCounter": 1002, // initially set to 1000
  "posts": [
    {
      "id": 1001,
      "header": "This is the heading",
      "text": "This is the body of the text"
    },
    {
      "id": 1002,
      "header": "This is the second blog post",
      "text": "This is the body of the second blog post"
    }
  ]
}
```

`idCounter` is initially set to 1000. When writing to the database, please update `idCounter` in the database by incrementing by one. This value should also be used as the id for the newly added blog post objects.

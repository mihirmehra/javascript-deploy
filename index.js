const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

const githubData = {
  "login": "mihirmehra",
  "id": 49902630,
  "node_id": "MDQ6VXNlcjQ5OTAyNjMw",
  "avatar_url": "https://avatars.githubusercontent.com/u/49902630?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/mihirmehra",
  "html_url": "https://github.com/mihirmehra",
  "followers_url": "https://api.github.com/users/mihirmehra/followers",
  "following_url": "https://api.github.com/users/mihirmehra/following{/other_user}",
  "gists_url": "https://api.github.com/users/mihirmehra/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/mihirmehra/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/mihirmehra/subscriptions",
  "organizations_url": "https://api.github.com/users/mihirmehra/orgs",
  "repos_url": "https://api.github.com/users/mihirmehra/repos",
  "events_url": "https://api.github.com/users/mihirmehra/events{/privacy}",
  "received_events_url": "https://api.github.com/users/mihirmehra/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2019-04-23T09:14:12Z",
  "updated_at": "2025-04-28T07:22:03Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
  res.send('mihirmehra')
})

app.get('/login', (req, res) => {
  res.send('<h1>login page</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
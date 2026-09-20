# Hello World

A small, responsive sample app with an interactive greeting and a health endpoint. No dependencies required.

Run with Node.js 22 or later:

```sh
npm start
```

Open http://localhost:3000. Health endpoint: `/health`.

## App Sandbox deployment

Use the public repository, branch `main`, build pack `dockerfile`, and internal port `3000`. Call `list_apps` before `create_app`. For subsequent releases use `deploy_app` with the existing app ID. Verify using `app_status`.

https://hadar.ai website

## Getting Started

Setup env vars file:

```
cp .env.sample .env.local
```

Now enter the following values into `.env.local` (get them from [@hiddentao](https://github.com/hiddentao)):

```
MAILCHIMP_API_KEY=
MAILCHIMP_SERVER_PREFIX=
```

Now run the development server:

```bash
npm run dev
```

## Publishing changes

Merge your changes into the `main` branch and `git push` to the Github repo. [Github actions](https://github.com/hadar-ai/website/actions) will take care of the rest.

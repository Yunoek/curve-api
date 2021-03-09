# Curve API

All endpoints can be cached using a simple config option.
Any static files (such as json configs) should be put under `/public` so that they can be deployed through a CDN and accessed faster. Any endpoint executing logic or fetching remote data should be implemented as a small endpoint under `/pages/api`.

## How to add a new endpoint

1. Create a new file under `/pages/api`: the endpoint will be accessible through the same path, e.g. `/pages/api/hithere` would accessible through `api.curve.fi/api/hithere`
2. If this endpoint requires passing any data as a query parameter, name that parameter in the path itself (e.g. `/pages/api/user/[id].js`)
3. The endpoint script must export a function, wrapped in the utility `fn()`, that returns a json object – that's it
4. **Query params:** any query params defined as in (2) are accessible in the first argument passed to `fn`, e.g. `fn(({ id }) => ({ message: \`Id passed as argument: ${id}\`}))`
5. **Caching:** pass an object as second argument to `fn`, and set the cache duration in seconds with the `maxAge` property: `{ maxAge: 60 }`

## Dev

Run: `vercel dev`

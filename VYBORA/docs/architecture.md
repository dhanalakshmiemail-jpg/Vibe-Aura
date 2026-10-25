# VYBORA architecture

Feature-first structure with shared UI components, Redux Toolkit state, route-level lazy loading, service boundaries and centralized theme tokens. UI components never call the API directly. The catalog is local-first so the demo remains usable without credentials or internet access.

## State slices
- auth
- library
- discovery/theme
- quiz
- challenges

## Future backend boundary
`src/services/apiClient.ts` is the native Fetch integration boundary. Production auth, authorization, persistent libraries and private API keys belong behind a trusted server.

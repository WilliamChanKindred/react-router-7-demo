import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("layouts/layout.tsx", [
        index("routes/home.tsx"),
        route("client", "routes/client.tsx"),
        route("server", "routes/server.tsx"),
        route("clientserver", "routes/clientserver.tsx"),
        route("static", "routes/static.tsx"),
    ]),
] satisfies RouteConfig;

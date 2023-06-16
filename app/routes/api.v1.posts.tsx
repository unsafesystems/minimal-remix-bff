import { json } from "@remix-run/node";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
    return json({ posts: await getPosts() });
};
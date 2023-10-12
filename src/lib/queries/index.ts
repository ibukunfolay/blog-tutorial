import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";

export async function getAllPosts() {
	return client.fetch(groq`*[_type == 'post']{
        _id,
        _createdAt,
        title,
        description,
        url,
        postedBy->{
            _id,
            name,
            image
          },
    }`);
}

const post = {
	name: "post",
	title: "Post",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string",
		},
		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "url",
			title: "Url",
			type: "string",
		},
		{
			name: "postedBy",
			title: "PostedBy",
			type: "reference",
			to: [{ type: "user" }],
		},
		{
			name: "likes",
			title: "Likes",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "user" }],
				},
			],
		},
	],
};

export default post;

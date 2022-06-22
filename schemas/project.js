export default {
  name: "project",
  type: "document",
  title: "Projets",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
    },
    {
      name: "metaTitle",
      type: "string",
      title: "Meta title",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
    {
      name: "metaDescription",
      type: "text",
      title: "Meta description",
    },
    {
      name: "slug",
      type: "slug",
      title: "slug"
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "metaImage",
      type: "image",
      title: "Meta image",
    },
    {
      name: "links",
      type: "array",
      title: "Liens externes",
      of: [
        {
          name: "link",
          type: "object",
          title: "Lien",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Titre du lien"
            },
            {
              name: "url",
              type: "url",
              title: "Lien",
            },
            {
              name: "type",
              type: "string",
              title: "Type du lien",
              options: {
                list: [
                  { title: "GitHub", value: "github_url" },
                  { title: "Lien vers le projet", value: "project_url" },
                ],
                layout: "radio"
              }
            },
          ]
        },
      ],
    },
    {
      name: 'text',
      type: 'array', 
      title: 'Contenu', 
      of: [{type: 'block'}]
    }
  ],
};

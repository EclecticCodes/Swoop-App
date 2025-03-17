// schemas/cat.ts
export default {
    name: 'cat',
    title: 'Cat',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'breed', title: 'Breed', type: 'string' },
      { name: 'age', title: 'Age', type: 'number' },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
      },
      { name: 'description', title: 'Description', type: 'text' },
    ],
  };
  
export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter a value between 1 and 5'),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant',
    },
    {
      name: 'lat',
      type: 'number',
      title: 'Latitude',
    },
    {
      name: 'long',
      type: 'number',
      title: 'Longitude',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },
  ],
};

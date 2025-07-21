import { CollectionConfig } from 'payload'

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'testimonial',
    defaultColumns: ['user', 'testimonial', 'rating', 'image'],
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      required: true,
      label: 'email',
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: true,
      label: 'Testimonial',
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      label: 'Rating (1-5)',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image (optional)',
      required: false,
    },
  ],
}

export default Testimonials

import { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  admin: {
    defaultColumns: ['filename', 'url', 'thumbnailURL'],
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}

export default Media

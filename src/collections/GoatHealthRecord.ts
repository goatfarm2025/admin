import { CollectionConfig } from 'payload'

const GoatHealthRecord: CollectionConfig = {
  slug: 'goat-health-records',
  admin: {
    useAsTitle: 'date',
    defaultColumns: ['goat', 'date', 'weight', 'photo'],
  },
  fields: [
    {
      name: 'goat',
      type: 'relationship',
      relationTo: 'goats',
      required: true,
      label: 'Goat',
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      label: 'Record Date',
    },
    {
      name: 'weight',
      type: 'number',
      required: true,
      label: 'Weight (kg)',
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Photo',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Notes',
    },
  ],
}

export default GoatHealthRecord

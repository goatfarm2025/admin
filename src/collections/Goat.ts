import { CollectionConfig } from 'payload'
import GoatImageCell from '../components/GoatImageCell'

const Goat: CollectionConfig = {
  slug: 'goats',
  admin: {
    useAsTitle: 'idno',
    listSearchableFields: ['idno', 'breed', 'age'],
    defaultColumns: ['image', 'idno', 'breed', 'age'], // show image preview, not URL
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        components: {
          Cell: GoatImageCell,
        },
      },
    },
    {
      name: 'idno',
      type: 'text',
      required: true,
    },
    {
      name: 'breed',
      type: 'text',
    },
    {
      name: 'age',
      type: 'number',
    },
    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'purchasePrice',
      type: 'number',
      label: 'Price Purchased At',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'caretaker',
      type: 'relationship',
      relationTo: 'users',
      label: 'Caretaker',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'owner',
      type: 'relationship',
      relationTo: 'users',
      label: 'Owner (Delivery Recipient)',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'farmLocation',
      type: 'group',
      label: 'Farm Location',
      fields: [
        {
          name: 'street',
          type: 'text',
        },
        {
          name: 'city',
          type: 'text',
        },
        {
          name: 'state',
          type: 'text',
        },
        {
          name: 'postalCode',
          type: 'text',
        },
        {
          name: 'country',
          type: 'text',
        },
      ],
    },
  ],
}

export default Goat

import { CollectionConfig } from 'payload'

const setCreatedBy = ({ req, operation, data }: { req: any; operation: string; data: any }) => {
  if (operation === 'create' && req.user) {
    return {
      ...data,
      createdBy: req.user.id,
    }
  }
  return data
}

const Bills: CollectionConfig = {
  slug: 'bills',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'createdBy',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      admin: {
        disabled: true,
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
        { label: 'Closed', value: 'closed' },
      ],
      access: {
        update: ({ req, data }) => {
          const user = req.user
          // Only admin or manager can change status
          if (user?.role === 'admin' || user?.role === 'manager') return true
          // Otherwise, only allow update if status is not being changed
          if (
            data &&
            req.body &&
            typeof req.body === 'object' &&
            'status' in req.body &&
            data.status === req.body.status
          ) {
            return true
          }
          return false
        },
      },
    },
  ],
  hooks: {
    beforeChange: [setCreatedBy],
  },
}

export default Bills

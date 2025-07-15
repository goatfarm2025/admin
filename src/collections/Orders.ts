import { CollectionConfig } from 'payload'

const generateOrderId = async ({
  req,
  operation,
  data,
}: {
  req: any
  operation: any
  data: any
}) => {
  if (operation === 'create' && data && !data.orderId) {
    const payload = req.payload
    // Find the latest order by orderId
    const latest = await payload.find({
      collection: 'orders',
      sort: '-createdAt',
      limit: 1,
    })
    let nextNumber = 1
    if (latest.docs.length > 0) {
      const lastOrderId = latest.docs[0].orderId
      const match = lastOrderId && lastOrderId.match(/EID-(\d+)/)
      if (match) {
        nextNumber = parseInt(match[1], 10) + 1
      }
    }
    data.orderId = `EID-${String(nextNumber).padStart(3, '0')}`
  }
  return data
}

const Orders: CollectionConfig = {
  slug: 'orders',
  admin: {
    useAsTitle: 'orderId',
  },
  fields: [
    {
      name: 'eventName',
      type: 'text',
      required: true,
      defaultValue: 'Eid al-Adha 2020',
    },
    {
      name: 'completed',
      type: 'checkbox',
      label: 'Completed',
      defaultValue: false,
    },
    {
      name: 'deliveryDate',
      type: 'date',
      required: true,
      defaultValue: '2020-07-31',
    },
    {
      name: 'orderId',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'livestock',
      type: 'text',
      required: true,
      defaultValue: 'Premium Goat',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Processing', value: 'processing' },
        { label: 'Shipped', value: 'shipped' },
        { label: 'Delivered', value: 'delivered' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Refunded', value: 'refunded' },
      ],
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
  ],
  hooks: {
    beforeChange: [generateOrderId],
  },
}

export default Orders

import { CollectionConfig } from 'payload'

const RazorpayOrders: CollectionConfig = {
  slug: 'razorpay-orders',
  admin: {
    useAsTitle: 'razorpayOrderId',
    description: 'Razorpay payment order details',
  },
  fields: [
    {
      name: 'razorpayOrderId',
      type: 'text',
      required: true,
      unique: true,
      label: 'Razorpay Order ID',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'razorpayPaymentId',
      type: 'text',
      label: 'Razorpay Payment ID',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'razorpaySignature',
      type: 'text',
      label: 'Razorpay Signature',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'orderlist',
      type: 'array',
      fields: [
        {
          name: 'order',
          type: 'relationship',
          relationTo: 'orders',
          label: 'Related Order',
        },
      ],
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      label: 'Customer',
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
      label: 'Amount (in paise)',
      admin: {
        description: 'Amount in paise (e.g., 100000 = ₹1000)',
      },
    },
    {
      name: 'currency',
      type: 'text',
      required: true,
      defaultValue: 'INR',
      label: 'Currency',
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'created',
      options: [
        { label: 'Created', value: 'created' },
        { label: 'Authorized', value: 'authorized' },
        { label: 'Attempted', value: 'attempted' },
        { label: 'Paid', value: 'paid' },
        { label: 'Failed', value: 'failed' },
        { label: 'Cancelled', value: 'cancelled' },
        { label: 'Refunded', value: 'refunded' },
        { label: 'Partially Refunded', value: 'partially_refunded' },
      ],
      label: 'Payment Status',
    },
    {
      name: 'method',
      type: 'text',
      label: 'Payment Method',
      admin: {
        description: 'UPI, Card, Net Banking, etc.',
      },
    },
    {
      name: 'bank',
      type: 'text',
      label: 'Bank',
      admin: {
        description: 'Bank name for card/UPI payments',
      },
    },
    {
      name: 'cardId',
      type: 'text',
      label: 'Card ID',
      admin: {
        description: 'Card ID for card payments',
      },
    },
    {
      name: 'wallet',
      type: 'text',
      label: 'Wallet',
      admin: {
        description: 'Wallet name for wallet payments',
      },
    },
    {
      name: 'vpa',
      type: 'text',
      label: 'VPA',
      admin: {
        description: 'Virtual Payment Address for UPI',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Customer Email',
    },
    {
      name: 'contact',
      type: 'text',
      label: 'Customer Contact',
    },
    {
      name: 'name',
      type: 'text',
      label: 'Customer Name',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Payment Description',
    },
    {
      name: 'notes',
      type: 'textarea',
      label: 'Additional Notes',
    },
    {
      name: 'errorCode',
      type: 'text',
      label: 'Error Code',
      admin: {
        description: 'Error code if payment failed',
      },
    },
    {
      name: 'errorDescription',
      type: 'textarea',
      label: 'Error Description',
      admin: {
        description: 'Detailed error description',
      },
    },
    {
      name: 'refundStatus',
      type: 'select',
      defaultValue: 'none',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Partial', value: 'partial' },
        { label: 'Full', value: 'full' },
      ],
      label: 'Refund Status',
    },
    {
      name: 'refundAmount',
      type: 'number',
      label: 'Refund Amount (in paise)',
      admin: {
        description: 'Amount refunded in paise',
      },
    },
    {
      name: 'captured',
      type: 'checkbox',
      defaultValue: false,
      label: 'Payment Captured',
    },
    {
      name: 'capturedAt',
      type: 'date',
      label: 'Captured At',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'createdAt',
      type: 'date',
      label: 'Order Created At',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        readOnly: true,
      },
    },
    {
      name: 'updatedAt',
      type: 'date',
      label: 'Last Updated At',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        readOnly: true,
      },
    },
  ],
  timestamps: true,
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => false,
  },
}

export default RazorpayOrders

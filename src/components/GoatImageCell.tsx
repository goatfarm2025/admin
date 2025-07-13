import React from 'react'
// Remove the import for CellComponentProps from 'payload/types'
// Use 'any' for props if the correct type cannot be imported

const GoatImageCell: React.FC<any> = ({ cellData, rowData }) => {
  // For relationship fields, rowData.image may be an object or an array (if hasMany)
  const image = Array.isArray(rowData?.image) ? rowData.image[0] : rowData?.image
  if (!image || !image.url) return <span>No Image</span>

  return (
    <img
      src={image.url}
      alt="Goat"
      style={{ width: 48, height: 48, objectFit: 'cover', borderRadius: 4 }}
    />
  )
}

export default GoatImageCell

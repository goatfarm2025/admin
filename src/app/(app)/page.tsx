import { Badge } from '@/components/Badge'
import { Background } from '@/components/Background'
import Link from 'next/link'
import React from 'react'
import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

const Page = async () => {
  const payload = await getPayloadHMR({
    config,
  })

  const data = await payload.find({
    collection: 'pages',
  })
  return (
    <>
      <main>
        <article>
          <h1> Welcome to the Goat Farm Management System!</h1>
          <p>
            Manage your goats, track their health, and organize your farm records with ease. Use the
            admin panel to add goats, record monthly health stats, and upload photos.
          </p>
        </article>
      </main>
      <Background />
    </>
  )
}

export default Page

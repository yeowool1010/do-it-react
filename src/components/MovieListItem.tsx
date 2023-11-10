import React from 'react'
import Link from 'next/link'

import { MovieInfo } from '../interfaces'

type Props = {
  data: MovieInfo
}

const MovieListItem = ({ data }: Props) => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    {data.id}:{data.name}
  </Link>
)

export default ListItem

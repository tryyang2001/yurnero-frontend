import * as React from 'react'
import styles from './Creation.module.css'

export type ContentItem = {
  type?: string
  content?: ContentItem[] | string
  attribute?: any
  children?: ContentItem[]
  result?: any
}

export const renderMissionContentFromApi = (content: ContentItem[]) => {
  return content.map(data => {
    if (data.type === 'paragraph') {
      return <ul>{renderMissionContentFromApi(data.content as ContentItem[])}</ul>
    } else if (data.type === 'text') {
      return <li>{data.content as string}</li>
    }
  })
}
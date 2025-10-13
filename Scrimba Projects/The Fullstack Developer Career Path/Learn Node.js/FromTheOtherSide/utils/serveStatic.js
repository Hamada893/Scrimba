import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export async function serveStatic(req, res, baseDir) {
/*
Challenge: 
  1. Write code below to serve files from our public directory.
      
      Don’t worry about handling errors for now.
      hint.md for help!
*/

  const publicDir = path.join(baseDir, 'public')
  const filePath = path.join(
    publicDir,
    req.url === '/' ? 'index.html' : req.url
  )

  const ext = path.extname(filePath)

  const contentType = getContentType(ext)

  try {
    const content = await fs.readFile(filePath)
    sendResponse(res, 200, contentType, content)

  } catch (err) {
    console.log(err)
  }

}

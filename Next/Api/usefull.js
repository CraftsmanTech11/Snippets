import { headers } from 'next/headers'

//https://nextjs.org/docs/app/api-reference/functions/headers
  const authorization = headers().get('authorization')

//next Request: https://nextjs.org/docs/app/api-reference/functions/next-request
request.cookies.set('show-banner', 'false')
// { name: 'show-banner', value: 'false', Path: '/home' }
request.cookies.get('show-banner')

// Given incoming request /home
// [
//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },
//   { name: 'experiments', value: 'winter-launch', Path: '/home' },
// ]
request.cookies.getAll('experiments')
// Alternatively, get all cookies for the request
request.cookies.getAll()

request.cookies.delete('experiments')
request.cookies.has('experiments')
request.cookies.clear()

// Given a request to /home, pathname is /home
request.nextUrl.pathname
// Given a request to /home?name=lee, searchParams is { 'name': 'lee' }
request.nextUrl.searchParams
request.nextUrl.basePath

//_____________Next response ______________________
https://nextjs.org/docs/app/api-reference/functions/next-response

let response = NextResponse.next()
// Set a cookie to hide the banner
response.cookies.set('show-banner', 'false')

NextResponse.redirect(new URL('/new', request.url)) | NextResponse.redirect(loginUrl)
NextResponse.rewrite(new URL('/proxy', request.url))

// Given an incoming request...
const newHeaders = new Headers(request.headers)
// Add a new header
newHeaders.set('x-version', '123')
// And produce a response with the new headers
return NextResponse.next({
  request: {
    headers: newHeaders,
  },
})

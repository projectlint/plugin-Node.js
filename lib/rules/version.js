const nv = require('@pkgjs/nv')


exports.fetch = function({config})
{
  return nv(process.version, config)
}


exports.evaluate = function({config: {status}, fetch: {result: {end, start}}})
{
  const now = new Date()

  switch(status)
  {
    case 'lts_active': return now < lts   || end < now
    case 'maintained': return now < start || end < now

    default: throw SyntaxError(`Unknown status '${status}'`)
  }
}

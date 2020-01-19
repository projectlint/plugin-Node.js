const nv = require('@pkgjs/nv')


exports.fetch = function({config})
{
  return nv(process.version, config)
}


exports.evaluate = function({config: {status}, fetch: {result: {end, lts, start}}})
{
  const now = new Date()

  switch(status)
  {
    case 'lts'       : return !lts
    case 'lts_active': return !lts || now < lts   || end < now
    case 'maintained': return         now < start || end < now

    default: throw SyntaxError(`Unknown status '${status}'`)
  }
}

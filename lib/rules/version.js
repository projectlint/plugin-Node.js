const nv = require('@pkgjs/nv')


exports.fetch = function(context, dependencies, options)
{
  return nv(process.version, options)
}


exports.evaluate = function(context, dependencies, {status, ...options}, {end, start})
{
  const now = new Date()

  switch(status)
  {
    case 'lts_active': return now < lts   || end < now
    case 'maintained': return now < start || end < now

    default: throw SyntaxError(`Unknown status '${status}'`)
  }
}


function registerApp () {
  return true
}

function forgetApp () {
  return true
}

function getRegisteredApps () {
  const apps = getLinks(App.Agent.Hash, 'registeredApp', { Load: true }).map(e => e.Entry)
  return apps
  // return getBridges().filter(x => x).map(b => b.CalleeApp)
}

function bridgeGenesis (side, dna, appData) {

  if (side === HC.Bridge.Callee) {
    debug("Can't use switchboard as callee!")
    return false
  }

  // should be able to do the following, but it fails so we have to workaround using appData...
  // const targetDnaHash = bridge(dna, 'accountant', 'targetDnaHash', {})
  const targetDnaHash = appData

  if (!targetDnaHash) {
    debug('Please provide the hosted app DNA hash as the BridgeCalleeData')
    return false
  }

  const hash = commit('registeredApp', {
    accountantHash: dna,
    appHash: targetDnaHash
  })
  commit('registeredAppLink', {
    Links: [{
      Base: App.Agent.Hash,
      Link: hash,
      Tag: 'registeredApp'
    }]
  })
  debug("Registered app w/ switchboard:")
  debug(dna)
  return true
}

////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

function genesis () {
  return true
}

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    default:
      // invalid entry name
      return true
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    default:
      // invalid entry name
      return true
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    default:
      // invalid entry name
      return true
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    default:
      // invalid entry name
      return true
  }
}

function validateLink (entryName, baseHash, links, pkg, sources) {
  switch (entryName) {
    default:
      // invalid entry name
      return true
  }
}

function validatePutPkg (entryName) {
  return null
}

function validateModPkg (entryName) {
  return null
}

function validateDelPkg (entryName) {
  return null
}

function validateLinkPkg (entryName) {
  return null
}

// TypeScript workaround
export = 0
const module = {}

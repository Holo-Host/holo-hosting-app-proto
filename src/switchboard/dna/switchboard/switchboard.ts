'use strict'

type RPC = {
  zome: string,
  func: string,
  args: any
}

function dispatch (rpc: RPC) {
  const agentHash = App.Agent.Hash
  const apps = JSON.parse(call('management', 'getRegisteredApps', {}))
  if (!apps || apps.length !== 1) {
    debug("Switchboard misconfigured! Exactly 1 app should be registered for this agent.")
    return
  }
  const { appHash, accountantHash } = apps[0]!
  debug("attempting to bridge to [" + accountantHash "].")
  const responseString = bridge(accountantHash, 'accountant', 'handleRequest', rpc)
  debug("responseSTring: " + responseString)
  return JSON.parse(responseString)
}

function dispatchBridge (rpc) {
  const { zome, func, args } = rpc
  const targetDnaHash = property('targetDnaHash')
  // TODO: eventually make a real bridge call:
  // const payload = bridge(targetDnaHash, zome, func, args);

  // but for now...
  const payload = { 'fake': 'response' }
  const metrics = {
    cpuTime: 432,
    bytesIn: JSON.stringify(rpc).length,
    bytesOut: JSON.stringify(payload).length
  }
  return { payload, metrics }
}

// function getAppEntry(appHash: holochain.Hash): holochain.Hash | null {
//   const apps = JSON.parse(call('management', 'getRegisteredApps', {}))
//   const match = apps.filter(a => a.appHash === appHash || a.appHash === 'TODO-REMOVE-HACK')[0]
//   if (match) {
//     return match
//   } else {
//     const hashes = apps.map(h => `- ${h.appHash}`).join("\n")
//     debug("appHash not found: " + appHash + "\nAvailable DNA hashes:\n" + hashes)
//     return null
//   }
// }

// -----------------------------------------------------------------
//  Callbacks
// -----------------------------------------------------------------

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

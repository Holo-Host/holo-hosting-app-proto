'use strict'

type DispatchRequest = {
  agentHash: holochain.Hash,
  appHash: holochain.Hash,
  rpc: {
    zome: string,
    func: string,
    args: any
  }
}

function dispatch (request: DispatchRequest) {
  const { agentHash, appHash, rpc } = request
  const apps = getAppEntry(appHash)
  if (!apps) {
    debug('unknown appHash: ' + appHash)
    return "TODO: error payload"
  }

  const { accountantHash } = apps!
  const { payload, metrics } = dispatchBridge(rpc)
  const response = bridge(accountantHash, 'accountant', 'createServiceLog', {
    agentHash,
    metrics,
    requestPayload: JSON.stringify(rpc)
  })
  const logHash = JSON.parse(response)
  return { logHash, response: payload }
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

function getAppEntry(appHash: holochain.Hash): holochain.Hash | undefined {
  const apps = JSON.parse(call('management', 'getRegisteredApps', {}))
  return apps.filter(a => a.appHash === appHash || a.appHash === 'TODO-REMOVE-HACK')[0]
}

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

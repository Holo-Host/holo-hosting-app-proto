'use strict'

type DispatchRequest = {
  agentHash: holochain.Hash,
  rpc: {
    zome: string,
    func: string,
    args: any
  }
}

function dispatch (request) {
  const { agentHash, rpc } = request
  const { payload, metrics } = dispatchBridge(rpc)
  const logHash = JSON.parse(
    call('serviceLogs', 'create', {
      agentHash,
      metrics,
      requestPayload: JSON.stringify(rpc)
    })
  )
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

// -----------------------------------------------------------------
//  Callbacks
// -----------------------------------------------------------------

function genesis () {
  return true
}

function bridgeGenesis () {
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

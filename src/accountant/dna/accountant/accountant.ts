'use strict'

// TODO: eventually we may want a notion of a "batch" of logs,
// a collection of uninvoiced (or already-invoiced) service log entries.
// For now, just create one and use it all the time.
const startBatch = { startTime: 'now' }
const demoBatch = makeHash('serviceLogBatch', startBatch)

function info(...msgs) {
  debug('[accountant] ' + msgs.join(' '))
}

function handleRequest (rpc) {
  const dnaHash = property('hostedDnaHash')
  const agentHash = property('hostedIdentity')
  const { zome, func, args } = rpc
  info(`Calling ${zome}/${func} @ ${dnaHash} with args:`)
  debug(args)
  const responseString = bridge(dnaHash, zome, func, args)
  let response
  try {
    response = JSON.parse(responseString)
  } catch {
    info("Parsing failed, interpreting response as string")
    response = responseString
  }
  info("response:")
  debug(response)

  // TODO: obviously fake metrics for now...
  const metrics = {
    cpuTime: 432,
    bytesIn: JSON.stringify(rpc).length,
    bytesOut: responseString.length
  }

  const logHash = recordServiceLog({
    agentHash,
    metrics,
    requestPayload: JSON.stringify(rpc)
  })

  return { response, logHash }
}

function recordServiceLog (entry) {
  const hash = commit('serviceLog', entry)
  commit('serviceLogLink', {
    Links: [{
      Base: demoBatch,
      Link: hash,
      Tag: 'serviceLog'
    }]
  })
  return hash
}

function getLogBatch () {
  return getLinks(demoBatch, 'serviceLog', { Load: true })
}

function mockVerifySignature (signature, payloadHash, agentHash) {
  return signature !== 'bad signature'
}

function targetDnaHash () {
  return property('targetDnaHash')
}

// -----------------------------------------------------------------
//  Callbacks
// -----------------------------------------------------------------

function genesis () {
  const hash = commit('serviceLogBatch', startBatch)
  return true
}

function bridgeGenesis (side, dna, appData) {
  return true
}

function validateCommit (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'serviceLog':
      const { signature, payloadHash, agentHash } = entry
      // TODO: replace with verifySignature
      return !signature || mockVerifySignature(signature, payloadHash, agentHash)

    case 'serviceLogBatch':
      return true

    case 'serviceLogLink':
      info('serviceLogLink (TODO)')
      info(entry)
      return true
    default:
      // invalid entry name
      return false
  }
}

function validatePut (entryName, entry, header, pkg, sources) {
  switch (entryName) {
    case 'serviceLog':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
    case 'serviceLogLink':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
    default:
      // invalid entry name
      return true
  }
}

function validateMod (entryName, entry, header, replaces, pkg, sources) {
  switch (entryName) {
    case 'serviceLog':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
    case 'serviceLogLink':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
    default:
      // invalid entry name
      return true
  }
}

function validateDel (entryName, hash, pkg, sources) {
  switch (entryName) {
    case 'serviceLog':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
    case 'serviceLogLink':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
    default:
      // invalid entry name
      return true
  }
}

function validateLink (entryName, baseHash, links, pkg, sources) {
  switch (entryName) {
    case 'serviceLog':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
    case 'serviceLogLink':
      // be sure to consider many edge cases for validating
      // do not just flip this to true without considering what that means
      // the action will ONLY be successfull if this returns true, so watch out!
      return true
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

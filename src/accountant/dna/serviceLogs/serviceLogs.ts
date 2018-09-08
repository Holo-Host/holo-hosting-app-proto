'use strict'

// TODO: eventually we may want a notion of a "batch" of logs,
// a collection of uninvoiced (or already-invoiced) service log entries.
// For now, just create one and use it all the time.
const startBatch = { startTime: 'now' }
const demoBatch = makeHash('serviceLogBatch', startBatch)

function create (entry) {
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

// -----------------------------------------------------------------
//  Callbacks
// -----------------------------------------------------------------

function genesis () {
  const hash = commit('serviceLogBatch', startBatch)
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
      debug('serviceLogLink:')
      debug(entry)
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

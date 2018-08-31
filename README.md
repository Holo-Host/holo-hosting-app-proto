# holo-host

The Holo Hosting App -- **WIP**

## Structure

The public API consists of these functions:

* `requests/dispatch`
    - make a bridged function call to some other app as specified in the request
    - record a service log entry including the hash of request and response payloads (the "payload hash") 
    - send back the response payload along with a service log hash to the user
* `requests/addSignature`
    - After the browser receives the response, it immediately checks the hash of the payloads
    - If valid, browser sends back a signature for this payload along with the service log hash provided by `dispatch` (so the host knows which entry it's for)
* `serviceLogs/getLogBundle`
    - Simply does `getLinks` to get all service logs

### TODOs

- set proper Exposure for functions and entries (especially the log entries!)
- proper log bundles
- actual signature validation, and other validations
- much more, this is a mockup!

## Development

Attempting a new build strategy here. But to run, just `npm run build`, then `cd build && hcdev web` .
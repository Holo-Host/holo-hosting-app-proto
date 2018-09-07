# holo-host

The Holo Hosting App -- **WIP**

This app sits in front of the app which it is hosting. One instance of the Hosting app can only service one app. This is specified in the `targetDnaHash` property.

## Structure

The public API consists of these functions:

* `requests/dispatch`
    - potentially peel off any signature or verification the browser user has sent along with this request, and store it (TODO, unsure how this will show up)
    - make a bridged function call to some other app as specified in the request
    - record a service log entry including: 
        - the full request (perhaps with parts truncated)
        - metrics about the fulfillment (CPU time, bandwidth, etc.)
    - send back to the user the response payload along with a hash referring to the service log
* `serviceLogs/getLogBundle`
    - Simply does `getLinks` to get all service logs

### TODOs

- set proper Exposure for functions and entries (especially the log entries!)
- proper log bundles
- actual signature validation, and other validations
- much more, this is a mockup!

## Development

Attempting a new build strategy here. But to run, just `npm run build`, then `cd build && hcdev web` .
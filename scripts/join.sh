
rm -fr ~/.holochain/switchboard-dev ~/.holochain/accountant-dev
hcadmin join build/switchboard switchboard-dev
hcadmin join build/accountant accountant-dev
hcadmin bridge switchboard-dev accountant-dev management --bridgeCallerAppData "caller data" --bridgeCalleeAppData "callee data"

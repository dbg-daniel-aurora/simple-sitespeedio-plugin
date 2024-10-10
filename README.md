Trying to add custom metrics via a plugin, the end goal is to have the comparison complete and eventually
display the custom metrics on the comparison page (if possible)

but right now the problem is that the test fails with the following error:

ERROR: TypeError: currentMetric.getValues is not a function
    at ComparePlugin.processMessage (file:///usr/src/app/lib/plugins/compare/index.js:174:37)


see ./output.txt for full output.

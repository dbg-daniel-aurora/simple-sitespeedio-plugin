module.exports = async function getMetrics(context) {
  // Get the all event data collected throughout the lifecycle of the page
  try {

    context.result.at(-1).extras.myplugin_metric1 = 1;
    context.result.at(-1).extras.myplugin_metric2 = 2;
    context.result.at(-1).extras.myplugin_metric3 = 3;

  } catch (error) {
    context.log.error(
      "Could not run myplugin, no information collected",
      error
    );
  }
};

export default {
  transformTreeViews({ treeViews, userContext }) {
	return treeViews
	  .filter((_treeView) => {
		// Filtering logic based on current user context ...
	  })
	  .map((_treeView) => {
		// Transforming logic based on current user context ...
	  });
  },
};
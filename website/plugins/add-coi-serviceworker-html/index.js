function addCoiWorkerToHTML(context, options) {
        return {
          name: 'add-coi-serviceworker-html',
          loadContent: async () => {
            return {remoteHeadTags: await fetchHeadTagsFromAPI()};
          },
          injectHtmlTags({content}) {
            return {
              headTags: [
                {
                    tagName: 'script',
                    attributes: {
                      charset: 'utf-8',
                      src: '/z3guide/assets/coi-serviceworker.js',
                    },
                  },
                ...content.remoteHeadTags,
              ],
            };
          },
        };
      
}

module.exports = addCoiWorkerToHTML;
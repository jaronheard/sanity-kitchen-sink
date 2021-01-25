export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600e75dfbd7fe422d77ec8fa',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zo91dgei',
                  apiId: '6dbd42ba-bd10-4d32-ab82-a3b547ff3f5d'
                },
                {
                  buildHookId: '600e75dfbc194eef67ad7be1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8inpyssb',
                  apiId: '96b8292c-f104-46f7-8148-099ae26693ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaronheard/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8inpyssb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

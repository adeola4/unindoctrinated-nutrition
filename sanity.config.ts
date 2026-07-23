import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'your-project-id'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'

export default defineConfig({
  name: 'unindoctrinated-nutrition',
  title: 'Unindoctrinated Nutrition Science',
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Health Topics')
              .icon(() => '📁')
              .child(S.documentTypeList('healthTopic').title('Health Topics')),
            S.listItem()
              .title('Articles')
              .icon(() => '📄')
              .child(S.documentTypeList('article').title('Articles')),
            S.listItem()
              .title('Series')
              .icon(() => '📚')
              .child(S.documentTypeList('series').title('Series')),
            S.listItem()
              .title('Tags')
              .icon(() => '🏷️')
              .child(S.documentTypeList('tag').title('Tags')),
            S.listItem()
              .title('Products')
              .icon(() => '💊')
              .child(S.documentTypeList('product').title('Products')),
            S.listItem()
              .title('Authors')
              .icon(() => '👤')
              .child(S.documentTypeList('author').title('Authors')),
            S.divider(),
            S.listItem()
              .title('Subscribers')
              .icon(() => '📧')
              .child(S.documentTypeList('subscriber').title('Subscribers')),
            S.listItem()
              .title('Legal Config')
              .icon(() => '⚖️')
              .child(S.documentTypeList('legalConfig').title('Legal Config')),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
})
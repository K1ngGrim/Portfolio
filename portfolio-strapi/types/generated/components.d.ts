import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectBlocksImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_project_blocks_image_blocks';
  info: {
    displayName: 'ImageBlock';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface ProjectBlocksTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_project_blocks_text_blocks';
  info: {
    displayName: 'TextBlock';
  };
  attributes: {
    header: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ProjectFeatures extends Struct.ComponentSchema {
  collectionName: 'components_project_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectHyperlink extends Struct.ComponentSchema {
  collectionName: 'components_project_hyperlinks';
  info: {
    displayName: 'Hyperlink';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['Github', 'Documentation', 'Other']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Other'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ProjectInfo extends Struct.ComponentSchema {
  collectionName: 'components_project_infos';
  info: {
    displayName: 'Info';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    type: Schema.Attribute.Enumeration<['Contributor', 'Plain', 'Status']> &
      Schema.Attribute.DefaultTo<'Plain'>;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project-blocks.image-block': ProjectBlocksImageBlock;
      'project-blocks.text-block': ProjectBlocksTextBlock;
      'project.features': ProjectFeatures;
      'project.hyperlink': ProjectHyperlink;
      'project.info': ProjectInfo;
    }
  }
}

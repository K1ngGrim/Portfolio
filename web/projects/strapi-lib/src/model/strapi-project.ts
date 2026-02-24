import {
  ProjectFeaturesEntry,
  ProjectGetProjectsById200ResponseData,
  ProjectHyperlinkEntry, ProjectHyperlinkEntryTypeEnum,
  ProjectInfoEntry
} from '../lib';

export interface StrapiProject extends ProjectGetProjectsById200ResponseData {
  blocks: ContentBlock[] | null;
  info: ProjectInfoEntry[] | null;
  key_features: ProjectFeaturesEntry[] | null;
  hyperlinks: ProjectHyperlinkEntry[] | null;
}


export interface ContentBlock {

  id: number;
  __component: ContentBlockTypeEnum;

}

export enum ContentBlockTypeEnum {
  TextBlock = 'project-blocks.text-block',
  ImageBlock = 'project-blocks.image-block',
}

export interface ContentBlockText extends ContentBlock {

  __component: ContentBlockTypeEnum.TextBlock;
  text: string;
  header: string | null;
  icon: string | null;

}

export function castToTextBlock(block: ContentBlock): ContentBlockText {
  if (block.__component === ContentBlockTypeEnum.TextBlock) {
    return block as ContentBlockText;
  } else {
    throw new Error('Content block is not of type TextBlock');
  }
}

export function hasHyperLink(project: StrapiProject, type: ProjectHyperlinkEntryTypeEnum) {
  const url = project.hyperlinks?.find(link => link.type === type)?.url as string;
  return url??'';
}

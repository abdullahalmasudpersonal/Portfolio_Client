export enum tagTypes {
  about = "about",
  resume = "resume",
  numbers = "numbers",
  project = "project",
  skill = "skill",
  blog = "blog",
}

// export type TagTypes = (typeof tagTypes)[keyof typeof tagTypes];

// export type TagType = keyof typeof tagTypes;

export const tagTypesList = [
  tagTypes.about,
  tagTypes.resume,
  tagTypes.numbers,
  tagTypes.project,
  tagTypes.skill,
  tagTypes.blog,
];

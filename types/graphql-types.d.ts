export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type CovidPatientsJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  pref_name_x?: Maybe<Scalars['String']>;
  pref_name_jp?: Maybe<Scalars['String']>;
  last_1w?: Maybe<Array<Maybe<CovidPatientsJsonLast_1w>>>;
  update_date?: Maybe<Scalars['Date']>;
  pref_name_y?: Maybe<Scalars['String']>;
  pref_n_inspections?: Maybe<Scalars['Int']>;
  pref_n_patients?: Maybe<Scalars['Int']>;
  pref_n_current_patients?: Maybe<Scalars['Int']>;
  pref_n_current_heavy_patients?: Maybe<Scalars['Int']>;
  pref_n_deaths?: Maybe<Scalars['Int']>;
  pref_n_exits?: Maybe<Scalars['Int']>;
  pref_n_beds?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  beds_latest_update_date?: Maybe<Scalars['Date']>;
  row_number?: Maybe<Scalars['Int']>;
  pref_positive_rate?: Maybe<Scalars['Float']>;
  pref_patients_beds_ratio?: Maybe<Scalars['Float']>;
  pref_heavy_patients_beds_ratio?: Maybe<Scalars['Float']>;
};


export type CovidPatientsJsonUpdate_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type CovidPatientsJsonBeds_Latest_Update_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type CovidPatientsJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CovidPatientsJsonEdge>;
  nodes: Array<CovidPatientsJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<CovidPatientsJsonGroupConnection>;
};


export type CovidPatientsJsonConnectionDistinctArgs = {
  field: CovidPatientsJsonFieldsEnum;
};


export type CovidPatientsJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: CovidPatientsJsonFieldsEnum;
};

export type CovidPatientsJsonEdge = {
  next?: Maybe<CovidPatientsJson>;
  node: CovidPatientsJson;
  previous?: Maybe<CovidPatientsJson>;
};

export type CovidPatientsJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'pref_name_x'
  | 'pref_name_jp'
  | 'last_1w'
  | 'last_1w___pref_n_inspections'
  | 'last_1w___pref_n_patients'
  | 'last_1w___pref_n_current_patients'
  | 'last_1w___pref_n_current_heavy_patients'
  | 'last_1w___pref_n_deaths'
  | 'last_1w___pref_n_exits'
  | 'last_1w___pref_n_beds'
  | 'last_1w___pref_positive_rate'
  | 'last_1w___pref_patients_beds_ratio'
  | 'last_1w___pref_heavy_patients_beds_ratio'
  | 'last_1w___update_date'
  | 'update_date'
  | 'pref_name_y'
  | 'pref_n_inspections'
  | 'pref_n_patients'
  | 'pref_n_current_patients'
  | 'pref_n_current_heavy_patients'
  | 'pref_n_deaths'
  | 'pref_n_exits'
  | 'pref_n_beds'
  | 'source'
  | 'note'
  | 'beds_latest_update_date'
  | 'row_number'
  | 'pref_positive_rate'
  | 'pref_patients_beds_ratio'
  | 'pref_heavy_patients_beds_ratio';

export type CovidPatientsJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  pref_name_x?: Maybe<StringQueryOperatorInput>;
  pref_name_jp?: Maybe<StringQueryOperatorInput>;
  last_1w?: Maybe<CovidPatientsJsonLast_1wFilterListInput>;
  update_date?: Maybe<DateQueryOperatorInput>;
  pref_name_y?: Maybe<StringQueryOperatorInput>;
  pref_n_inspections?: Maybe<IntQueryOperatorInput>;
  pref_n_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_current_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_current_heavy_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_deaths?: Maybe<IntQueryOperatorInput>;
  pref_n_exits?: Maybe<IntQueryOperatorInput>;
  pref_n_beds?: Maybe<IntQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  note?: Maybe<StringQueryOperatorInput>;
  beds_latest_update_date?: Maybe<DateQueryOperatorInput>;
  row_number?: Maybe<IntQueryOperatorInput>;
  pref_positive_rate?: Maybe<FloatQueryOperatorInput>;
  pref_patients_beds_ratio?: Maybe<FloatQueryOperatorInput>;
  pref_heavy_patients_beds_ratio?: Maybe<FloatQueryOperatorInput>;
};

export type CovidPatientsJsonFilterListInput = {
  elemMatch?: Maybe<CovidPatientsJsonFilterInput>;
};

export type CovidPatientsJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<CovidPatientsJsonEdge>;
  nodes: Array<CovidPatientsJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type CovidPatientsJsonLast_1w = {
  pref_n_inspections?: Maybe<Scalars['Int']>;
  pref_n_patients?: Maybe<Scalars['Int']>;
  pref_n_current_patients?: Maybe<Scalars['Int']>;
  pref_n_current_heavy_patients?: Maybe<Scalars['Int']>;
  pref_n_deaths?: Maybe<Scalars['Int']>;
  pref_n_exits?: Maybe<Scalars['Int']>;
  pref_n_beds?: Maybe<Scalars['Int']>;
  pref_positive_rate?: Maybe<Scalars['Float']>;
  pref_patients_beds_ratio?: Maybe<Scalars['Float']>;
  pref_heavy_patients_beds_ratio?: Maybe<Scalars['Float']>;
  update_date?: Maybe<Scalars['Date']>;
};


export type CovidPatientsJsonLast_1wUpdate_DateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type CovidPatientsJsonLast_1wFilterInput = {
  pref_n_inspections?: Maybe<IntQueryOperatorInput>;
  pref_n_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_current_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_current_heavy_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_deaths?: Maybe<IntQueryOperatorInput>;
  pref_n_exits?: Maybe<IntQueryOperatorInput>;
  pref_n_beds?: Maybe<IntQueryOperatorInput>;
  pref_positive_rate?: Maybe<FloatQueryOperatorInput>;
  pref_patients_beds_ratio?: Maybe<FloatQueryOperatorInput>;
  pref_heavy_patients_beds_ratio?: Maybe<FloatQueryOperatorInput>;
  update_date?: Maybe<DateQueryOperatorInput>;
};

export type CovidPatientsJsonLast_1wFilterListInput = {
  elemMatch?: Maybe<CovidPatientsJsonLast_1wFilterInput>;
};

export type CovidPatientsJsonSortInput = {
  fields?: Maybe<Array<Maybe<CovidPatientsJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childrenCovidPatientsJson?: Maybe<Array<Maybe<CovidPatientsJson>>>;
  childrenJapanPrefectureMedicalTreatmentJson?: Maybe<Array<Maybe<JapanPrefectureMedicalTreatmentJson>>>;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childrenCovidPatientsJson'
  | 'childrenCovidPatientsJson___id'
  | 'childrenCovidPatientsJson___parent___id'
  | 'childrenCovidPatientsJson___parent___parent___id'
  | 'childrenCovidPatientsJson___parent___parent___children'
  | 'childrenCovidPatientsJson___parent___children'
  | 'childrenCovidPatientsJson___parent___children___id'
  | 'childrenCovidPatientsJson___parent___children___children'
  | 'childrenCovidPatientsJson___parent___internal___content'
  | 'childrenCovidPatientsJson___parent___internal___contentDigest'
  | 'childrenCovidPatientsJson___parent___internal___description'
  | 'childrenCovidPatientsJson___parent___internal___fieldOwners'
  | 'childrenCovidPatientsJson___parent___internal___ignoreType'
  | 'childrenCovidPatientsJson___parent___internal___mediaType'
  | 'childrenCovidPatientsJson___parent___internal___owner'
  | 'childrenCovidPatientsJson___parent___internal___type'
  | 'childrenCovidPatientsJson___children'
  | 'childrenCovidPatientsJson___children___id'
  | 'childrenCovidPatientsJson___children___parent___id'
  | 'childrenCovidPatientsJson___children___parent___children'
  | 'childrenCovidPatientsJson___children___children'
  | 'childrenCovidPatientsJson___children___children___id'
  | 'childrenCovidPatientsJson___children___children___children'
  | 'childrenCovidPatientsJson___children___internal___content'
  | 'childrenCovidPatientsJson___children___internal___contentDigest'
  | 'childrenCovidPatientsJson___children___internal___description'
  | 'childrenCovidPatientsJson___children___internal___fieldOwners'
  | 'childrenCovidPatientsJson___children___internal___ignoreType'
  | 'childrenCovidPatientsJson___children___internal___mediaType'
  | 'childrenCovidPatientsJson___children___internal___owner'
  | 'childrenCovidPatientsJson___children___internal___type'
  | 'childrenCovidPatientsJson___internal___content'
  | 'childrenCovidPatientsJson___internal___contentDigest'
  | 'childrenCovidPatientsJson___internal___description'
  | 'childrenCovidPatientsJson___internal___fieldOwners'
  | 'childrenCovidPatientsJson___internal___ignoreType'
  | 'childrenCovidPatientsJson___internal___mediaType'
  | 'childrenCovidPatientsJson___internal___owner'
  | 'childrenCovidPatientsJson___internal___type'
  | 'childrenCovidPatientsJson___pref_name_x'
  | 'childrenCovidPatientsJson___pref_name_jp'
  | 'childrenCovidPatientsJson___last_1w'
  | 'childrenCovidPatientsJson___last_1w___pref_n_inspections'
  | 'childrenCovidPatientsJson___last_1w___pref_n_patients'
  | 'childrenCovidPatientsJson___last_1w___pref_n_current_patients'
  | 'childrenCovidPatientsJson___last_1w___pref_n_current_heavy_patients'
  | 'childrenCovidPatientsJson___last_1w___pref_n_deaths'
  | 'childrenCovidPatientsJson___last_1w___pref_n_exits'
  | 'childrenCovidPatientsJson___last_1w___pref_n_beds'
  | 'childrenCovidPatientsJson___last_1w___pref_positive_rate'
  | 'childrenCovidPatientsJson___last_1w___pref_patients_beds_ratio'
  | 'childrenCovidPatientsJson___last_1w___pref_heavy_patients_beds_ratio'
  | 'childrenCovidPatientsJson___last_1w___update_date'
  | 'childrenCovidPatientsJson___update_date'
  | 'childrenCovidPatientsJson___pref_name_y'
  | 'childrenCovidPatientsJson___pref_n_inspections'
  | 'childrenCovidPatientsJson___pref_n_patients'
  | 'childrenCovidPatientsJson___pref_n_current_patients'
  | 'childrenCovidPatientsJson___pref_n_current_heavy_patients'
  | 'childrenCovidPatientsJson___pref_n_deaths'
  | 'childrenCovidPatientsJson___pref_n_exits'
  | 'childrenCovidPatientsJson___pref_n_beds'
  | 'childrenCovidPatientsJson___source'
  | 'childrenCovidPatientsJson___note'
  | 'childrenCovidPatientsJson___beds_latest_update_date'
  | 'childrenCovidPatientsJson___row_number'
  | 'childrenCovidPatientsJson___pref_positive_rate'
  | 'childrenCovidPatientsJson___pref_patients_beds_ratio'
  | 'childrenCovidPatientsJson___pref_heavy_patients_beds_ratio'
  | 'childrenJapanPrefectureMedicalTreatmentJson'
  | 'childrenJapanPrefectureMedicalTreatmentJson___id'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___id'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___parent___id'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___parent___children'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___children'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___children___id'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___children___children'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___content'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___contentDigest'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___description'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___fieldOwners'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___ignoreType'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___mediaType'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___owner'
  | 'childrenJapanPrefectureMedicalTreatmentJson___parent___internal___type'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___id'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___parent___id'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___parent___children'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___children'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___children___id'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___children___children'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___content'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___contentDigest'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___description'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___fieldOwners'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___ignoreType'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___mediaType'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___owner'
  | 'childrenJapanPrefectureMedicalTreatmentJson___children___internal___type'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___content'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___contentDigest'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___description'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___fieldOwners'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___ignoreType'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___mediaType'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___owner'
  | 'childrenJapanPrefectureMedicalTreatmentJson___internal___type'
  | 'childrenJapanPrefectureMedicalTreatmentJson___prefCode'
  | 'childrenJapanPrefectureMedicalTreatmentJson___prefJP'
  | 'childrenJapanPrefectureMedicalTreatmentJson___prefEN'
  | 'childrenJapanPrefectureMedicalTreatmentJson___date'
  | 'childrenJapanPrefectureMedicalTreatmentJson___activeCases'
  | 'childrenJapanPrefectureMedicalTreatmentJson___hospitalizedCases'
  | 'childrenJapanPrefectureMedicalTreatmentJson___hospitalizedCasesPhase'
  | 'childrenJapanPrefectureMedicalTreatmentJson___hospitalizedCasesMaxPhase'
  | 'childrenJapanPrefectureMedicalTreatmentJson___hospitalizedCasesCap'
  | 'childrenJapanPrefectureMedicalTreatmentJson___hospitalizedCasesCapPlanned'
  | 'childrenJapanPrefectureMedicalTreatmentJson___hospitalizedCasesUTE'
  | 'childrenJapanPrefectureMedicalTreatmentJson___severeCases'
  | 'childrenJapanPrefectureMedicalTreatmentJson___severeCasesPhase'
  | 'childrenJapanPrefectureMedicalTreatmentJson___severeCasesMaxPhase'
  | 'childrenJapanPrefectureMedicalTreatmentJson___severeCasesCap'
  | 'childrenJapanPrefectureMedicalTreatmentJson___severeCaseaCapPlanned'
  | 'childrenJapanPrefectureMedicalTreatmentJson___severeCasesUTE'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atHotelCases'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atHotelCasesPhase'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atHotelCasesMaxPhase'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atHotelCasesCap'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atHotelCasesCapPlanned'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atHotelCasesUTE'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atHomeCases'
  | 'childrenJapanPrefectureMedicalTreatmentJson___atWelfareFacilityCases'
  | 'childrenJapanPrefectureMedicalTreatmentJson___unconfirmedCases';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childrenCovidPatientsJson?: Maybe<CovidPatientsJsonFilterListInput>;
  childrenJapanPrefectureMedicalTreatmentJson?: Maybe<JapanPrefectureMedicalTreatmentJsonFilterListInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JapanPrefectureMedicalTreatmentJson = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  prefCode?: Maybe<Scalars['String']>;
  prefJP?: Maybe<Scalars['String']>;
  prefEN?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  activeCases?: Maybe<Scalars['Int']>;
  hospitalizedCases?: Maybe<Scalars['Int']>;
  hospitalizedCasesPhase?: Maybe<Scalars['Int']>;
  hospitalizedCasesMaxPhase?: Maybe<Scalars['Int']>;
  hospitalizedCasesCap?: Maybe<Scalars['Int']>;
  hospitalizedCasesCapPlanned?: Maybe<Scalars['Int']>;
  hospitalizedCasesUTE?: Maybe<Scalars['Float']>;
  severeCases?: Maybe<Scalars['Int']>;
  severeCasesPhase?: Maybe<Scalars['Int']>;
  severeCasesMaxPhase?: Maybe<Scalars['Int']>;
  severeCasesCap?: Maybe<Scalars['Int']>;
  severeCaseaCapPlanned?: Maybe<Scalars['Int']>;
  severeCasesUTE?: Maybe<Scalars['Float']>;
  atHotelCases?: Maybe<Scalars['Int']>;
  atHotelCasesPhase?: Maybe<Scalars['Int']>;
  atHotelCasesMaxPhase?: Maybe<Scalars['Int']>;
  atHotelCasesCap?: Maybe<Scalars['Int']>;
  atHotelCasesCapPlanned?: Maybe<Scalars['Int']>;
  atHotelCasesUTE?: Maybe<Scalars['Float']>;
  atHomeCases?: Maybe<Scalars['Int']>;
  atWelfareFacilityCases?: Maybe<Scalars['Int']>;
  unconfirmedCases?: Maybe<Scalars['Int']>;
};


export type JapanPrefectureMedicalTreatmentJsonDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type JapanPrefectureMedicalTreatmentJsonConnection = {
  totalCount: Scalars['Int'];
  edges: Array<JapanPrefectureMedicalTreatmentJsonEdge>;
  nodes: Array<JapanPrefectureMedicalTreatmentJson>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<JapanPrefectureMedicalTreatmentJsonGroupConnection>;
};


export type JapanPrefectureMedicalTreatmentJsonConnectionDistinctArgs = {
  field: JapanPrefectureMedicalTreatmentJsonFieldsEnum;
};


export type JapanPrefectureMedicalTreatmentJsonConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: JapanPrefectureMedicalTreatmentJsonFieldsEnum;
};

export type JapanPrefectureMedicalTreatmentJsonEdge = {
  next?: Maybe<JapanPrefectureMedicalTreatmentJson>;
  node: JapanPrefectureMedicalTreatmentJson;
  previous?: Maybe<JapanPrefectureMedicalTreatmentJson>;
};

export type JapanPrefectureMedicalTreatmentJsonFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'prefCode'
  | 'prefJP'
  | 'prefEN'
  | 'date'
  | 'activeCases'
  | 'hospitalizedCases'
  | 'hospitalizedCasesPhase'
  | 'hospitalizedCasesMaxPhase'
  | 'hospitalizedCasesCap'
  | 'hospitalizedCasesCapPlanned'
  | 'hospitalizedCasesUTE'
  | 'severeCases'
  | 'severeCasesPhase'
  | 'severeCasesMaxPhase'
  | 'severeCasesCap'
  | 'severeCaseaCapPlanned'
  | 'severeCasesUTE'
  | 'atHotelCases'
  | 'atHotelCasesPhase'
  | 'atHotelCasesMaxPhase'
  | 'atHotelCasesCap'
  | 'atHotelCasesCapPlanned'
  | 'atHotelCasesUTE'
  | 'atHomeCases'
  | 'atWelfareFacilityCases'
  | 'unconfirmedCases';

export type JapanPrefectureMedicalTreatmentJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  prefCode?: Maybe<StringQueryOperatorInput>;
  prefJP?: Maybe<StringQueryOperatorInput>;
  prefEN?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  activeCases?: Maybe<IntQueryOperatorInput>;
  hospitalizedCases?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesPhase?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesMaxPhase?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesCap?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesCapPlanned?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesUTE?: Maybe<FloatQueryOperatorInput>;
  severeCases?: Maybe<IntQueryOperatorInput>;
  severeCasesPhase?: Maybe<IntQueryOperatorInput>;
  severeCasesMaxPhase?: Maybe<IntQueryOperatorInput>;
  severeCasesCap?: Maybe<IntQueryOperatorInput>;
  severeCaseaCapPlanned?: Maybe<IntQueryOperatorInput>;
  severeCasesUTE?: Maybe<FloatQueryOperatorInput>;
  atHotelCases?: Maybe<IntQueryOperatorInput>;
  atHotelCasesPhase?: Maybe<IntQueryOperatorInput>;
  atHotelCasesMaxPhase?: Maybe<IntQueryOperatorInput>;
  atHotelCasesCap?: Maybe<IntQueryOperatorInput>;
  atHotelCasesCapPlanned?: Maybe<IntQueryOperatorInput>;
  atHotelCasesUTE?: Maybe<FloatQueryOperatorInput>;
  atHomeCases?: Maybe<IntQueryOperatorInput>;
  atWelfareFacilityCases?: Maybe<IntQueryOperatorInput>;
  unconfirmedCases?: Maybe<IntQueryOperatorInput>;
};

export type JapanPrefectureMedicalTreatmentJsonFilterListInput = {
  elemMatch?: Maybe<JapanPrefectureMedicalTreatmentJsonFilterInput>;
};

export type JapanPrefectureMedicalTreatmentJsonGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<JapanPrefectureMedicalTreatmentJsonEdge>;
  nodes: Array<JapanPrefectureMedicalTreatmentJson>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type JapanPrefectureMedicalTreatmentJsonSortInput = {
  fields?: Maybe<Array<Maybe<JapanPrefectureMedicalTreatmentJsonFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  japanPrefectureMedicalTreatmentJson?: Maybe<JapanPrefectureMedicalTreatmentJson>;
  allJapanPrefectureMedicalTreatmentJson: JapanPrefectureMedicalTreatmentJsonConnection;
  covidPatientsJson?: Maybe<CovidPatientsJson>;
  allCovidPatientsJson: CovidPatientsJsonConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childrenCovidPatientsJson?: Maybe<CovidPatientsJsonFilterListInput>;
  childrenJapanPrefectureMedicalTreatmentJson?: Maybe<JapanPrefectureMedicalTreatmentJsonFilterListInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryJapanPrefectureMedicalTreatmentJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  prefCode?: Maybe<StringQueryOperatorInput>;
  prefJP?: Maybe<StringQueryOperatorInput>;
  prefEN?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  activeCases?: Maybe<IntQueryOperatorInput>;
  hospitalizedCases?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesPhase?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesMaxPhase?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesCap?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesCapPlanned?: Maybe<IntQueryOperatorInput>;
  hospitalizedCasesUTE?: Maybe<FloatQueryOperatorInput>;
  severeCases?: Maybe<IntQueryOperatorInput>;
  severeCasesPhase?: Maybe<IntQueryOperatorInput>;
  severeCasesMaxPhase?: Maybe<IntQueryOperatorInput>;
  severeCasesCap?: Maybe<IntQueryOperatorInput>;
  severeCaseaCapPlanned?: Maybe<IntQueryOperatorInput>;
  severeCasesUTE?: Maybe<FloatQueryOperatorInput>;
  atHotelCases?: Maybe<IntQueryOperatorInput>;
  atHotelCasesPhase?: Maybe<IntQueryOperatorInput>;
  atHotelCasesMaxPhase?: Maybe<IntQueryOperatorInput>;
  atHotelCasesCap?: Maybe<IntQueryOperatorInput>;
  atHotelCasesCapPlanned?: Maybe<IntQueryOperatorInput>;
  atHotelCasesUTE?: Maybe<FloatQueryOperatorInput>;
  atHomeCases?: Maybe<IntQueryOperatorInput>;
  atWelfareFacilityCases?: Maybe<IntQueryOperatorInput>;
  unconfirmedCases?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllJapanPrefectureMedicalTreatmentJsonArgs = {
  filter?: Maybe<JapanPrefectureMedicalTreatmentJsonFilterInput>;
  sort?: Maybe<JapanPrefectureMedicalTreatmentJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryCovidPatientsJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  pref_name_x?: Maybe<StringQueryOperatorInput>;
  pref_name_jp?: Maybe<StringQueryOperatorInput>;
  last_1w?: Maybe<CovidPatientsJsonLast_1wFilterListInput>;
  update_date?: Maybe<DateQueryOperatorInput>;
  pref_name_y?: Maybe<StringQueryOperatorInput>;
  pref_n_inspections?: Maybe<IntQueryOperatorInput>;
  pref_n_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_current_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_current_heavy_patients?: Maybe<IntQueryOperatorInput>;
  pref_n_deaths?: Maybe<IntQueryOperatorInput>;
  pref_n_exits?: Maybe<IntQueryOperatorInput>;
  pref_n_beds?: Maybe<IntQueryOperatorInput>;
  source?: Maybe<StringQueryOperatorInput>;
  note?: Maybe<StringQueryOperatorInput>;
  beds_latest_update_date?: Maybe<DateQueryOperatorInput>;
  row_number?: Maybe<IntQueryOperatorInput>;
  pref_positive_rate?: Maybe<FloatQueryOperatorInput>;
  pref_patients_beds_ratio?: Maybe<FloatQueryOperatorInput>;
  pref_heavy_patients_beds_ratio?: Maybe<FloatQueryOperatorInput>;
};


export type QueryAllCovidPatientsJsonArgs = {
  filter?: Maybe<CovidPatientsJsonFilterInput>;
  sort?: Maybe<CovidPatientsJsonSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___titleTemplate'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___image'
  | 'siteMetadata___twitterUsername'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___sourceMap'
  | 'pluginCreator___pluginOptions___autoLabel'
  | 'pluginCreator___pluginOptions___labelFormat'
  | 'pluginCreator___pluginOptions___cssPropOptimization'
  | 'pluginCreator___pluginOptions___indentedSyntax'
  | 'pluginCreator___pluginOptions___indentType'
  | 'pluginCreator___pluginOptions___indentWidth'
  | 'pluginCreator___pluginOptions___linefeed'
  | 'pluginCreator___pluginOptions___omitSourceMapUrl'
  | 'pluginCreator___pluginOptions___precision'
  | 'pluginCreator___pluginOptions___sourceComments'
  | 'pluginCreator___pluginOptions___sourceMapContents'
  | 'pluginCreator___pluginOptions___sourceMapEmbed'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___head'
  | 'pluginCreator___pluginOptions___anonymize'
  | 'pluginCreator___pluginOptions___respectDNT'
  | 'pluginCreator___pluginOptions___pageTransitionDelay'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___sourceMap'
  | 'pluginOptions___autoLabel'
  | 'pluginOptions___labelFormat'
  | 'pluginOptions___cssPropOptimization'
  | 'pluginOptions___indentedSyntax'
  | 'pluginOptions___indentType'
  | 'pluginOptions___indentWidth'
  | 'pluginOptions___linefeed'
  | 'pluginOptions___omitSourceMapUrl'
  | 'pluginOptions___precision'
  | 'pluginOptions___sourceComments'
  | 'pluginOptions___sourceMapContents'
  | 'pluginOptions___sourceMapEmbed'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___head'
  | 'pluginOptions___anonymize'
  | 'pluginOptions___respectDNT'
  | 'pluginOptions___pageTransitionDelay'
  | 'pluginOptions___name'
  | 'pluginOptions___path'
  | 'pluginOptions___fileName'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  indentedSyntax?: Maybe<Scalars['Boolean']>;
  indentType?: Maybe<Scalars['String']>;
  indentWidth?: Maybe<Scalars['Int']>;
  linefeed?: Maybe<Scalars['String']>;
  omitSourceMapUrl?: Maybe<Scalars['Boolean']>;
  precision?: Maybe<Scalars['Int']>;
  sourceComments?: Maybe<Scalars['Boolean']>;
  sourceMapContents?: Maybe<Scalars['Boolean']>;
  sourceMapEmbed?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  trackingId?: Maybe<Scalars['String']>;
  head?: Maybe<Scalars['Boolean']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  respectDNT?: Maybe<Scalars['Boolean']>;
  pageTransitionDelay?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  indentedSyntax?: Maybe<BooleanQueryOperatorInput>;
  indentType?: Maybe<StringQueryOperatorInput>;
  indentWidth?: Maybe<IntQueryOperatorInput>;
  linefeed?: Maybe<StringQueryOperatorInput>;
  omitSourceMapUrl?: Maybe<BooleanQueryOperatorInput>;
  precision?: Maybe<IntQueryOperatorInput>;
  sourceComments?: Maybe<BooleanQueryOperatorInput>;
  sourceMapContents?: Maybe<BooleanQueryOperatorInput>;
  sourceMapEmbed?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  trackingId?: Maybe<StringQueryOperatorInput>;
  head?: Maybe<BooleanQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  respectDNT?: Maybe<BooleanQueryOperatorInput>;
  pageTransitionDelay?: Maybe<IntQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  titleTemplate?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  twitterUsername?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  titleTemplate?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<StringQueryOperatorInput>;
  twitterUsername?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type SeoQueryVariables = Exact<{ [key: string]: never; }>;


export type SeoQuery = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'titleTemplate' | 'siteUrl' | 'twitterUsername'>
      & { defaultTitle: SiteSiteMetadata['title'], defaultDescription: SiteSiteMetadata['description'], defaultImage: SiteSiteMetadata['image'] }
    )> }> };

export type FragmentNameFragment = Pick<JapanPrefectureMedicalTreatmentJson, 'prefJP' | 'date' | 'hospitalizedCases' | 'hospitalizedCasesPhase' | 'hospitalizedCasesMaxPhase' | 'hospitalizedCasesCap' | 'hospitalizedCasesUTE' | 'severeCases' | 'severeCasesPhase' | 'severeCasesMaxPhase' | 'severeCasesCap' | 'severeCasesUTE' | 'atHotelCases' | 'atHotelCasesPhase' | 'atHotelCasesMaxPhase' | 'atHotelCasesCap' | 'atHotelCasesUTE'>;

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { pref: Pick<JapanPrefectureMedicalTreatmentJsonConnection, 'distinct'>, current: { nodes: Array<FragmentNameFragment> }, trend: { nodes: Array<FragmentNameFragment> } };

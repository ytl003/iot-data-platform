// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace Nocobase {
  export interface RowBase {
    createdAt: string
    updatedAt: string
    id: number
    sort: number
    createdById: number
    updatedById: number
    createdBy?: User
    updatedBy?: User
  }

  export type FileMimeType = 'image/svg+xml'

  export interface File extends RowBase {
    title: string
    filename: string
    extname: string
    size: number
    mimetype: FileMimeType
    path: string
    meta: {}
    url: string
    storageId: 1
  }
  export interface User extends RowBase {
    nickname: string
    username: string
    companyId: number
    email: string
    roles?: Nocobase.Role[]
    phone: string
    mobile: string
  }
  export interface FiledEnum {
    value: string
    label: string
    color: string
  }
  export enum XComponent {
    Input = 'Input',
    Select = 'Select',
    RecordPicker = 'RecordPicker',
  }
  export interface UiSchema {
    enum?: FiledEnum[]
    'x-component': XComponent
  }
  export interface Filed {
    collectionName: string
    name: string
    interface: 'input' | 'select'
    type: 'string'
    defaultValue: string | number | boolean
    uiSchema: UiSchema
  }
  export interface Collection {
    name: string
    title: string
    fields: Filed[]
  }

  export interface Role {
    allowConfigure: false
    allowNewMenu: string[]
    createdAt: string
    default: boolean
    description: string
    hidden: boolean
    name: 'root' | 'member' | 'EHR' | 'EHR_ADMIN' | 'org'
    strategy: string
    title: string
    updatedAt: string
  }

  export interface Region {
    name: string
    level: number
    code: string
    parentCode?: string
  }
  export interface PageMeta {
    count: number
    page: number
    pageSize: number
    totalPage: number
  }

  export interface CommonParams {
    filterByTk?: number
    filter?: any
    appends?: string[]
    page?: number
    pageSize?: number
  }

}

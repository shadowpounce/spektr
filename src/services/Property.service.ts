import {
  IPropertiesResponse,
  IPropertyImagesResponse,
  IPropertyResponse,
} from '../interfaces/Hospitable/Property'
import { instanceCreate } from './instance'

const URL = 'https://api.hospitable.com/properties'

export const propertyService = (jwtToken: string) => {
  return {
    async getAll() {
      // get all
      const { data } = await instanceCreate(URL, {
        authorization: `Bearer ${jwtToken}`,
      }).get<IPropertiesResponse>('', {
        params: {
          page: '1',
          per_page: '2147483647',
        },
      })

      return data
    },
    async getById(id: number) {
      const { data } = await instanceCreate(URL, {
        authorization: `Bearer ${jwtToken}`,
      }).get<IPropertyResponse>(`/${id}`)

      return data
    },
    async getImages(id: number) {
      const { data } = await instanceCreate(URL, {
        authorization: `Bearer ${jwtToken}`,
      }).get<IPropertyImagesResponse>(`/${id}/images`)

      return data
    },
  }
}

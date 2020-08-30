import axios, { AxiosInstance, AxiosResponse } from 'axios'

export default class Api {
  protected readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create({
      baseURL: 'http://localhost:8081/',
    })
  }

  protected async get<R>(url: string): Promise<AxiosResponse<R>> {
    return await this.http.get<R>(url)
  }
}

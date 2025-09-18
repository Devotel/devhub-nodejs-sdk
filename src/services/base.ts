import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { DevHubConfig, ApiResponse } from '../types/index.js';

export class BaseService {
  protected client: AxiosInstance;

  constructor(config: DevHubConfig) {
    this.client = axios.create({
      baseURL: 'https://global-api-development.devotel.io/api/v1',
      headers: {
        'x-api-key': config.apiKey,
        'Content-Type': 'application/json'
      }
    });
  }

  protected async request<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
    try {
      const response = await this.client.request(config);
      return {
        success: true,
        data: response.data
      };
    } catch (error: any) {
      return {
        success: false,
        error: error.response?.data?.message || error.message
      };
    }
  }
}
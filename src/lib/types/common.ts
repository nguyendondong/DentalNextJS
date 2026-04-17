export interface Section {
  title: string;
  subtitle: string;
  description: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface ApiErrorResponse {
  code: string;
  status: number;
  error: string;
}

export interface PostParams {
  title: string;
  body: string;
  userId: number;
}

export interface Posts {
  body: string;
  id: number;
  title: string;
  userId: number;
}

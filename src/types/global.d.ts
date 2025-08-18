declare global {
  interface IBackendRes<T> {
    error?: string | string[];
    message: string;
    statusCode: number | string;
    data?: T;
  }

  interface ILogin {
    access_token: string;
    payload: {
      fullName: string;
      email: string;
      roleId: string;
    };
  }
}

export {}
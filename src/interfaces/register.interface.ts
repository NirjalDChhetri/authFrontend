export interface IRegister {
    userName: string
    email: string
    password: string
    confirmPassword?: string
}

export interface IRegisterResponse {
    data: {
      isVerified: boolean
      isCompleted: boolean
    }
  }
  
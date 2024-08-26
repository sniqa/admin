const characters = (target: string, min: number, max: number) =>
  `${target}最少${min}个字符,最多${max}个字符`;

// setup page constant
export const SETUP = {
  CREATE_ADMIN_ACCOUNT: "创建管理账号",
  USERNAME: "用户名",
  USERNAME_MIN_CHARACTERS: 2,
  USERNAME_MAX_CHARACTERS: 10,
  PASSWORD: "密码",
  PASSWORD_MIN_CHARACTERS: 5,
  PASSWORD_MAX_CHARACTERS: 16,
  COMFIRM_PASSWORD: "再次输入密码",
  USERNAME_ERROR_MESSAGE: (min: number, max: number) =>
    characters("用户名", min, max),
  PASSWORD_ERROR_MESSAGE: (min: number, max: number) =>
    characters("密码", min, max),
  //   COMFIRM_PASSWORD_ERROR_MESSAGE: "",
  COMFIRM_PASSWORD_NOT_MATCH: "密码不一致",
  CREATE_ACCOUNT: "创建账号",
  ALREADY_HAVE_ACCOUNT: "已有账号? 点此登陆",
};

export const LOGIN = {
  LOGIN: "登录",
  NOT_HAVE_ACCOUNT: "没有账号? 点此注册",
  FORGET_PASSWORD: "忘记密码",
};

export const COMMON = {
  LEAST: "",
  MAXIMUM: "",
};

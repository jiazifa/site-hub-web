
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};


/**
 * 异常处理程序
 */
// eslint-disable-next-line @typescript-eslint/ban-types
const errorHandler = (error: { response: Response, data: { [key: string]: object } }): object => {
  const { response, data } = error;
  console.log(data);
  if (data || data !== undefined) { return data; }
  return response;
};

// const BASE_URL = "http://localhost:8899"
const BASE_URL = "http://172.28.137.217:8899"


// eslint-disable-next-line @typescript-eslint/ban-types
function request(url: string, method: string | undefined, data: Record<string, unknown> | undefined): Promise<Record<string, unknown>> {
  if (url.startsWith("http") === false) {
    url = `${BASE_URL}${url}`
  }
  let options: RequestInit | undefined = {
    method: (method ?? "GET").toUpperCase(),
    mode: "cors",
    credentials: "include",
  }
  if (options.method !== "GET") {
    options.body = JSON.stringify(data)
  }

  return fetch(url, options).then(r => r.json())
}

async function GET(path: string, data: Record<string, unknown> | undefined = {}): Promise<Record<string, unknown>> {
  return request(path, "GET", data)
}

async function POST(path: string, data: Record<string, unknown> | undefined = {}): Promise<Record<string, unknown>> {
  return request(path, "POST", data)
}

export {
  GET,
  POST
};

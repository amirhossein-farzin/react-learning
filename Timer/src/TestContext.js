import { createContext } from "react";

export const TestContext = createContext({
    timeArr:[],
    setTimeArr:()=>{}
})//?هر مقدار دلخواهی می توان قرار داد و اصلا فرقی ندارد رشته باشد یا آرایه یا غیره، یا حتی یک چیز خالی

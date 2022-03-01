import messageIds from "./messageIds"
import { translate,i18n  } from "voerka-i18n"
import defaultMessages from "./{{defaultLanguage}}.js"  
import i18nSettings from "./settings.js"
import formatters from "voerka-i18n/formatters" 

// 自动创建全局VoerkaI18n实例
if(!globalThis.VoerkaI18n){
    globalThis.VoerkaI18n = new i18n(i18nSettings)
}

let scope = {
    defaultLanguage: "{{defaultLanguage}}",     // 默认语言名称
    default:   defaultMessages,                 // 默认语言包
    messages : defaultMessages,                 // 当前语言包
    idMap:messageIds,                             // 消息id映射列表
    formatters:{
        ...formatters,
        ...i18nSettings.formatters || {}
    },
    loaders:{},                                 // 异步加载语言文件的函数列表
    i18nSettings:{}                             // 引用全局VoerkaI18n实例 
}

let supportedlanguages = {}  

messages["{{defaultLanguage}}"]= defaultMessages
{{each languages}}{{if $value.name !== defaultLanguage}}
scope.loaders["{{$value.name}}"] = ()=>import("./{{$value.name}}.js")
{{/if}}{{/each}}

const t = ()=> translate.bind(scope)(...arguments)

// 注册当前作用域到全局VoerkaI18n实例
VoerkaI18n.register(scope)

export scope
export t
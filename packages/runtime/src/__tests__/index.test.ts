

import {test,vi,describe,expect,afterAll,beforeAll, beforeEach} from 'vitest'
import { VoerkaI18nScope } from '../scope'
import zhFormatters from '../formatters/zh';
import enFormatters from '../formatters/en';
import { VoerkaI18nManager } from '../manager';
import { VoerkaI18nFormatterRegistry } from '../formatterRegistry';
import { VoerkaI18nLanguageMessages, VoerkaI18nFormatterConfigs, VoerkaI18nTranslate } from '../types';
import { deepMerge } from 'flex-tools/object/deepMerge';
import { isPlainObject } from 'flex-tools/typecheck/isPlainObject';
import { default as inlineFormatters } from '../formatters';
import { InvalidLanguageError } from '../errors';

function mergeFormattersConfigs(configSources:any[]){        
    return configSources.reduce((finalConfig, curConfig)=>{
            if(isPlainObject(curConfig)) deepMerge(finalConfig,curConfig,{newObject:false,array:'replace'})
            return finalConfig
        },{})                      
}

const zhMessages:VoerkaI18nLanguageMessages = {
    $config:{
        add:{a:1},
        dec:{b:1}
    },
    "你好": "你好",
    "我叫{name},今年{age}岁": "我叫{name},今年{age}岁",
    "中国": "中国",
    "我有{}部车": ["我没有车","我有一部车","我有两部车","我有{}部车"]  ,
    "我的工资是每月{}元":"我的工资是每月{}元"
}
const enMessages={
    "你好": "hello",
    "我叫{name},今年{age}岁": "My name is {name},Now {age} years old year",
    "中国": "china",
    "我有{}部车": ["I don't have car","I have a car","I have two cars","I have {} cars"],
    "我的工资是每月{}元":"My salary is {} yuan per month"
}

const messages = {
    zh: zhMessages,
    en: enMessages
}

const idMap={
    "你好":1,
    "你好,{name}":2,
    "中国":3,
    "我有{}部车":4
}
const languages = [
    { name: "zh",default:true,active:true},
    { name: "en"}
]

Object.assign(zhFormatters.$config,{
    x:{x1:1,x2:2},
    y:{y1:1,y2:2}
})
Object.assign(enFormatters.$config,{
    x:{x1:11,x2:22},
    y:{y1:11,y2:22},
    z:{z1:11,z2:22}
})

const formatters ={
    "*":{
        $config:{
            x:{g:1},
            y:{g:1},
            g:{g1:1,g2:2}
        }
    },
    zh:{
        $config:{},
        prefix:(value:any,args:any[],config?:VoerkaI18nFormatterConfigs)=>config?.chars+value,
        first:(value:any)=>'ZH'+value[0],
    },
    en:{ 
        $config:{},
        first:(value:any)=>'EN'+value[0],
    },
    jp:()=>{}
}

let scope:VoerkaI18nScope;



describe("所有测试", () => {
    beforeAll(async ()=>{
        return new Promise((resolve)=>{
            scope = new VoerkaI18nScope({
                id: "test",
                languages, 
                messages,
                formatters,
                callback:()=>{
                    resolve()
                }
            })
        })        
    })
    beforeEach(async ()=>{
        await scope.change("zh")
    })
    describe("VoerkaI18nScope", () => {    
        test("成功创建实例", () => {
            expect(scope).toBeInstanceOf(VoerkaI18nScope)
            expect(scope.activeLanguage).toBe("zh")
            expect(scope.defaultLanguage).toBe("zh")
            expect(scope.messages).toEqual(messages)
            expect(scope.default).toEqual(zhMessages)
            expect(scope.current).toEqual(zhMessages)
            // 全局管理器
            expect(scope.global).toBeInstanceOf(VoerkaI18nManager)
        })
        test("切换语言", () => {
            return new Promise<void>((resolve)=>{
                scope.on((language:string) => {
                    expect(language).toBe("en")
                    expect(scope.activeLanguage).toBe("en")
                    expect(scope.defaultLanguage).toBe("zh")
                    expect(scope.messages).toEqual(messages)
                    expect(scope.default).toEqual(zhMessages)
                    expect(scope.current).toEqual(enMessages)
                    resolve()
                })
                scope.change("en")
            })        
        })

        test("切换到不存在的语言", async () => {
            try{
                await scope.change("xn")
            }catch(e){
                expect(e).toBeInstanceOf(InvalidLanguageError)
            }        
        })
        test("指定了默认信息加载器时，切换到不存在的语言时从远程加载", async () => {
            scope.global.registerDefaultLoader(async function(newLanguage:string,curScope){
                expect(newLanguage).toBe("de")
                expect(curScope).toBe(scope)
                return {
                    hello:"[DE]hello"
                }
            })
            await scope.change("de")
            expect((scope.current as any)['hello']).toEqual("[DE]hello")
        })

        test("全局切换语言", () => {
            return new Promise<void>((resolve)=>{
                let event = 0 
                scope.on((language:string) => {
                    expect(language).toBe("en")
                    expect(scope.activeLanguage).toBe("en")
                    expect(scope.defaultLanguage).toBe("zh")
                    expect(scope.messages).toEqual(messages)
                    expect(scope.default).toEqual(zhMessages)
                    expect(scope.current).toEqual(enMessages)
                    expect(scope.idMap).toEqual(idMap) 
                    event++
                    if(event==2) resolve()
                })
                VoerkaI18n.on((language:string) => {
                    expect(language).toBe("en")                
                    expect(VoerkaI18n.activeLanguage).toBe("en")
                    expect(VoerkaI18n.defaultLanguage).toBe("zh") 
                    event++
                    if(event==2) resolve()
                })
                VoerkaI18n.change("en")
            })
        })

        test("多个Scope", async () => {    
            let scope1 = new VoerkaI18nScope({
                languages,
                idMap: {},
                messages: {},
                formatters: {},
            })
            let scope2 = new VoerkaI18nScope({
                languages,
                idMap: {},
                messages: {},
                formatters: {},
            })




        })
        

    })
    describe("格式化化配置与参数", () => {    

        test("格式化器参数", async () => {        
            expect(scope.formatters).toBeInstanceOf(VoerkaI18nFormatterRegistry)
            expect(scope.formatters.activeLanguage).toBe("zh")
            expect(scope.formatters.formatters).toEqual(formatters)
            expect(scope.formatters.types).toBe(zhFormatters.$types)
        })

        test("查找格式化器", async () => {        
            expect(scope.formatters.get("first")).toBe(formatters.zh.first)
            await scope.change("en")
            expect(scope.formatters.get("first")).toBe(formatters.en.first)        
        })
        test("合并后的格式化器配置", async () => {         
            let fallbackLanguage = scope.getLanguage(scope.activeLanguage)?.fallback
            const globalFormatters = inlineFormatters
            let scopeConfig = mergeFormattersConfigs([
                (fallbackLanguage! in globalFormatters) ? (globalFormatters as any)?.[fallbackLanguage!].$config:{},
                globalFormatters.zh.$config,
                (fallbackLanguage! in formatters) ? (formatters as any)?.[fallbackLanguage!]?.$config:{},
                formatters.zh.$config
            ])
            expect(scope.formatters.config).toEqual(scopeConfig)
            // 
            await scope.change("en")
            fallbackLanguage = scope.getLanguage(scope.activeLanguage)?.fallback
            scopeConfig = mergeFormattersConfigs([
                (fallbackLanguage! in globalFormatters) ? (globalFormatters as any)?.[fallbackLanguage!].$config:{},
                globalFormatters.en.$config,
                (fallbackLanguage! in formatters) ? (formatters as any)?.[fallbackLanguage!]?.$config:{},
                formatters.en.$config
            ])
            expect(scope.formatters.config).toEqual(scopeConfig)        
        })
    })

    describe('翻译函数', () => {
        let t:VoerkaI18nTranslate
        beforeAll(() => {
            t = scope.t
        })
        test('基本翻译',async () => {
            expect(t("你好")).toBe("你好")
            expect(t("我叫{name},今年{age}岁","张三",12)).toBe("我叫张三,今年12岁") 
            expect(t("我叫{name},今年{age}岁",["张三",12])).toBe("我叫张三,今年12岁") 
            expect(t("我叫{name},今年{age}岁",{name:"张三",age:12})).toBe("我叫张三,今年12岁") 
            await scope.change("en")
            expect(t("你好")).toBe("hello")
            expect(t("我叫{name},今年{age}岁","tom",12)).toBe("My name is tom,Now 12 years old year") 
            expect(t("我叫{name},今年{age}岁",["tom",12])).toBe("My name is tom,Now 12 years old year") 
            expect(t("我叫{name},今年{age}岁",{name:"tom",age:12})).toBe("My name is tom,Now 12 years old year") 
            expect(t("中国")).toBe("china")
        })
        test('基本复数翻译',async () => {
            expect(t("我有{}部车",0)).toBe("我没有车")
            expect(t("我有{}部车",1)).toBe("我有一部车")
            expect(t("我有{}部车",2)).toBe("我有两部车")
            expect(t("我有{}部车",3)).toBe("我有3部车")
            expect(t("我有{}部车",100)).toBe("我有100部车")
            await scope.change("en")
            expect(t("我有{}部车",0)).toBe("I don't have car")
            expect(t("我有{}部车",1)).toBe("I have a car")
            expect(t("我有{}部车",2)).toBe("I have two cars")
            expect(t("我有{}部车",3)).toBe("I have 3 cars")
            expect(t("我有{}部车",100)).toBe("I have 100 cars")
        })
    })


    describe('插值变量格式化器', () => {
        let t:VoerkaI18nTranslate
        

        beforeAll(() => {
            t = scope.t
            // 注册格式化器，注册为所有语言
            scope.registerFormatter("add", (value,args,config) => {
                    return String(Number(value) + (Number(args.length==0 ? 1 : args[0])))
            });
            scope.formatters.updateConfig("zh",{
                bookname:{        
                    beginChar:"《",
                    endChar:"》"
                }
            });
            scope.formatters.updateConfig("en",{
                bookname:{        
                    beginChar:"<",
                    endChar:">"
                }
            });
            // 注册格式化器，注册为所有语言
            scope.registerFormatter("bookname", (value,args,config) => {
                let { beginChar = "<",endChar=">" } = Object.assign({},(config as any)?.bookname)            
                if(args.length==1){
                    beginChar = endChar = args[0]
                }else if(args.length>=2){
                    beginChar = args[0]
                    endChar = args[1]
                }
                return beginChar  + value + endChar
        })
        })
        test('格式化器',async () => {
            expect(t("我的工资是每月{|add}元",1000)).toBe("我的工资是每月1001元")
            expect(t("我的工资是每月{|add()}元",1000)).toBe("我的工资是每月1001元")
            expect(t("我的工资是每月{|add(2)}元",1000)).toBe("我的工资是每月1002元")
            expect(t("我的工资是每月{|add|add()|add(2)}元",1000)).toBe("我的工资是每月1004元")
        })
        test('bookname式化器',async () => {
            expect(t("hello {|bookname}","tom")).toBe("hello 《tom》")
            expect(t("hello {|bookname('#')}","tom")).toBe("hello #tom#")
            expect(t("hello {|bookname('#','!')}","tom")).toBe("hello #tom!")
            expect(t("hello {|bookname|bookname|bookname}","tom")).toBe("hello 《《《tom》》》")
            await scope.change("en")
            expect(t("hello {|bookname}","tom")).toBe("hello <tom>")        
        })

        test('空值格式化器',async () => {
            expect(t("hello {|bookname|empty('空')}",undefined)).toBe("hello 《空》")
        })

    })

    describe('内置格式化器', () => {

    })
})
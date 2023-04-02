/**

处理日期时间相关

*/
const { isFunction,replaceAll,toDate } = require('../utils')
const  { Formatter } = require('../formatter');
import { formatDateTime } from "flex-tools/misc/formatDateTime"
import { relativeTime } from "flex-tools/misc/relativeTime"
import { assignObject } from "flex-tools/object/assignObject"


 
function formatTime(value:number ,template="HH:mm:ss"){    
    return formatDateTime(value,template,{

    })
}


/**
 *   该类型的格式化器具有以下特点：
 *  
 *   1. 接受一个format参数，
 *   2. format参数取值可以是若干预设的值，如long,short等，也可能是一个模板字符串
 *   3. 当format值时，如果定义在$config[configKey]里面，代表了$config[configKey][format]是一个模板字符串
 *   4. 如果!(format in $config[configKey])，则代表format值是一个模板字符串 
 *   5. 如果format in presets, 则要求presets[format ]是一个(value)=>{....}，直接返回
 * 
  **/ 
export type FormatterTransformer = (value:any,format:string)=>string
export function createDateTimeFormatter(options={},transformer:FormatterTransformer){
    let opts = assignObject({presets:{}},options)
    return Formatter(function(value,format,$config){
        if((format in opts.presets) && isFunction(opts.presets[format])){
            return opts.presets[format](value)
        }else if((format in $config)){
            format = $config[format]
        }else if(format == "number"){
            return value
        }
        try{// this指向的是activeFormatter.$config
            return format==null ? value : transformer.call(this,value,format)
        }catch(e){
            return value
        }        
    },opts)
}


/**
 * 日期格式化器
 *  - format取值：local,long,short,iso,gmt,utc,<模板字符串>
 *  - 默认值由$config.datetime.date.format指定
 */
 const dateFormatter = createDateTimeFormatter({
    normalize: toDate,
    params   : ["format"],
    configKey: "datetime.date",
    presets  : {
        local: value=>value.toLocaleString(),
        iso  : value=>value.toISOString(),
        utc  : value=>value.toUTCString(),
        gmt  : value=>value.toGMTString()
    }
},formatDatetime)


/**
 *  季度格式化器
 *  - format: long,short,number
 *  - 默认值是 short
 */
const quarterFormatter = createDateTimeFormatter({
    normalize : value=>{
        const month = value.getMonth() + 1 
        return Math.floor( ( month % 3 == 0 ? ( month / 3 ) : (month / 3 + 1 ) ))
    },
    params   : ["format"],
    configKey: "datetime.quarter"
},(quarter,format)=>format[quarter-1]) 

/**
 *  月份格式化器
 *  - format: long,short,number
 *  - 默认值是 short
 */
const monthFormatter = createDateTimeFormatter({
    normalize: (value:Date)=> value.getMonth() + 1, 
    params   : ["format"],
    configKey: "datetime.month"
},(month,format)=>format[month-1]) 

/**
 *  周格式化器
 *  - format: long,short,number
 *  - 默认值是 long
 */
const weekdayFormatter = createDateTimeFormatter({
    normalize: (value:Date)=> value.getDay(), 
    params   : ["format"],
    configKey: "datetime.weekday"
},(day,format)=>format[day]) 

/**
 * 时间格式化器
 *  - format取值：local,long,short,timestamp,<模板字符串>
 *  - 默认值由$config.datetime.time.format指定
 */
 const timeFormatter = createDateTimeFormatter({
    normalize    : toDate,
    params       : ["format"],
    configKey    : "datetime.time",
    presets      : {
        local    : (value:Date)=>value.toLocaleTimeString(), 
        timestamp: (value:Date)=>value.getTime()
    }
},formatTime) 

/**
 * 返回相对于rel的时间
 * @param {*} value 
 * @param {*} baseTime  基准时间，默认是相对现在
 */
const relativeTimeFormatter = Formatter((value:Date,baseTime:Date,$config:any)=>{    
    //const { units,now,before,base = Date.now() , after } = $config
    return relativeTime(value, $config)
},{
    normalize:toDate,
    params:["base"],
    configKey:"datetime.relativeTime"
})
 
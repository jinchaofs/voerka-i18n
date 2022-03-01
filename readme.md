

# 指南

## 翻译函数

默认提供翻译函数`t`用来进行翻译。
```javascript

// 从当前语言包文件夹index.js中导入翻译函数
import { t } from "<myapp>/languages"

t("中华人民共和国")

// 位置插值变量
t("中华人民共和国{}","万岁")
t("中华人民共和国成立于{}年，首都{}",1949,"北京")

// 当仅有两个参数且第2个参数是{}类型时，启用字典插值变量
t("中华人民共和国成立于{year}年，首都{capital}",{year:1949,capital:"北京"})

// 插值变量可以是同步函数，在进行插值时调用。
t("中华人民共和国成立于{year}年，首都{capital}",()=>1949,"北京")

// 对插值变量启用格式化器
t("中华人民共和国成立于{date | year}年",{date:new Date('')})

```



## 复数

默认情况下，`t`函数仅仅处理单数形式的翻译，当翻译文本内容是一个`数组`时启用复数处理机制。

### 启用复数处理机制
假设在index.html文件中具有一个翻译内容
```javascript
    t("我{}一辆车")
```
经过`extract`命令提取为翻译文件后，如下：
```json
// languages/translates/default.json
{
    "我有{}辆车":{
        "en":"",
        "de":"...." 
    }
}
```
现在我们要求引入复数处理机制，为不同数量采用不同的翻译，只需要将上述翻译文本更改为数组形式。
```json
{
    "我有{}辆车":{
        "en":["I don't have a car","I have a car","I have two cars","I have {} cars"],
        "en":["I don't have a car","I have a car","I have {} cars"],
        "en":["I don't have a car","I have {} cars"],
        "de":"...." 
    }
}
```
上例中，只需要在翻译文件中将上述的`en:""`更改为`[<0对应的复数文本>,<1对应的复数文本>,...,<n对应的复数文本>]`形式代表启动复数机制.
- 可以灵活地为每一个数字(`0、1、2、...、n`)对应的复数形式进行翻译
- 数量数字大于数组长度，则总是取最后一个复数形式
- 复数形式的文本同样机制位置插值和变量插值。


### 对应的翻译函数


启用复数处理机制后，在`t`函数按如下方式进行处理。
 

- **不存在插值变量且t函数的第2个参数是数字**

```javascript

t("我有一辆车",0)  // ==   "I don't have a car"
t("我有一辆车",1)  // ==   "I have a car"
t("我有一辆车",2)  // ==   "I have two cars"
t("我有一辆车",100)  // == "I have 100 cars"
```

- **存在插值变量且t函数的第2个参数是数字**

就中文而言，上述没有指定插值变量是比较别扭的，一般可以引入一个位置插值变量更加友好。
```javascript

t("我{}一辆车",0)  // ==   "I don't have a car"
t("我{}一辆车",1)  // ==   "I have a car"
t("我{}一辆车",2)  // ==   "I have two cars"
t("我{}一辆车",100)  // == "I have 100 cars"
```

- **复数命名插值变量**

当启用复数功能时，`t`函数需要知道根据哪个变量来决定采用何种复数形式。


```javascript
t("{}有{}辆车","张三",0)
```


以上采用位置插值变量时只能处理第一个位置插值复数，当翻译内容存在多个位置插值变量时,因为无法获取哪一个位置变量是数字，因此就不能有效处理。如:
```javascript
t("{}有{}辆车","张三",0)
t("{}有{}辆车","张三",1)
```
此种情况下就需要采用命名插值变量来处理。
具体的方式是约定当插值字典中存在以`$字符开头`的变量时，并且值是`数字`时，根据该变量来引用复数。以下例中，`t`函数根据`$count`值来处理复数。
```javascript
t("{name}有{$count}辆车",{name:"Tom",$count:0})    // == "Tom don't have a car"
t("{name}有{$count}辆车",{name:"Tom",$count:1})    // == "Tom have a car"
t("{name}有{$count}辆车",{name:"Tom",$count:2})    // == "Tom have two cars"
t("{name}有{$count}辆车",{name:"Tom",$count:100})  // == "Tom have 100 cars"
```


### 示例

```javascript
// languages/translates/default.json
{
    "第{}章":{
        en:[
            "Chapter Zero","Chapter One", "Chapter Two", "Chapter Three","Chapter Four",
            "Chapter Five","Chapter Six","Chapter Seven","Chapter Eight","Chapter Nine",
            "Chapter {}"
        ],
        cn:["第零章","第一章", "第二章", "第三章","第四章","第五章","第六章","第七章","第八章","第九章"]
    }
}
// 翻译函数
t("第{}章",0)  // == Chapter Zero
t("第{}章",1)  // == Chapter One
t("第{}章",2)  // == Chapter Two
t("第{}章",3)  // == Chapter Three
t("第{}章",4)  // == Chapter Four
t("第{}章",5)  // == Chapter Five
t("第{}章",6)  // == Chapter Six
t("第{}章",7)  // == Chapter Seven
...
t("第{}章",100)  // == Chapter 100
```


## 插值变量格式化

voerka-i18n支持对插值变量进行格式化

```javascript

new VoerkaI18n({
    formats:{
        Date:{                    // 日期格式
            en:{
                default:(value)=>dayjs(value).format("YYYY/MM/DD"),       
                time:(value)=>dayjs(value).format("HH:hh:mm"),
                // 可以定义多种自定义格式...
            },
            cn:{
                default:(value)=>dayjs(value).format("YYYY年MM月DD日"),       
                time:(value)=>dayjs(value).format("HH:hh:mm"),
                // 可以定义多种自定义格式...
            },
        },
        String:{
            en:{
                firstUpper:(value)=>value[0].toUpperCase()+value.substr(1)         // 首字母大写
            }
        }
    }
})
```
以上代码定义了：
- `Date`类型的英文和中文的两个格式化函数
- `String`类型变量的`firstUpper`格式化函数

接下来，在翻译内容中使用。

```javascript

// languages/translates/default.json
{
    "今天是{date}":{
        en:"Today is {date}",   // 使用默认的格式化器
    },
    "现在是北京时间：{date}":{
        en:"Now is { date | time}" // 使用指定的格式化器time
    },

t("今天是{date}",{date:new Date()})

```

## 合并第三方库语言


```javascript

import i18n from "voerka-i18n"
import { t } from "./languages" 
  
t("xxxxx")

VoerkaI18n实例

messages:{
    cn:{
        default:{
            text1:""
        },
        namespace:{
            text1:""
        },
    }
}
```


## 一语多译

一语多译指同一句文本在不同的语景下，需要翻译成不同的内容。比如